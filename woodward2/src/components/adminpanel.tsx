import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import getDocumentFieldValue from "./FirebaseFetch";
import setDocumentFieldValue from "./FirebaseUpdate";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { firebaseConfig } from "./Firebase";
import { initializeApp } from "firebase/app";
import sendEmail from "../utils/emailService";

type Booking = {
  documentId: string;
  name: string;
  dob: string;
  address: string;
  mobile: string;
  email: string;
  aadhar: string;
  specialRequests: string;
  checkInDate: string;
  checkOutDate: string;
  verifiedstate: boolean;
  emailsent: boolean; // explicitly declare as boolean
  [key: string]: string | number | boolean; // allow dynamic fields with boolean values
};

type BookingData = Booking[]; // Define the type for booking data array

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function AdminDashboard() {
  const [loading, setLoading] = useState(false);
  const [ispricechanged, setIsPriceChanged] = useState<{
    [key: string]: boolean;
  }>({});
  const [iscapacitychanged, setIsCapacityChanged] = useState<{
    [key: string]: boolean;
  }>({});
  const [roomPrices, setRoomPrices] = useState<{ [key: string]: number }>({});
  const [roomAvailability, setRoomAvailability] = useState<{
    [key: string]: number;
  }>({});
  const [roomOccupancy, setRoomOccupancy] = useState<{ [key: string]: number }>(
    {}
  );
  const [updatedPrices, setUpdatedPrices] = useState<{ [key: string]: number }>(
    {}
  );
  const [updatedCapacities, setUpdatedCapacities] = useState<{
    [key: string]: number;
  }>({});
  const [allBookings, setAllBookings] = useState<BookingData>([]);

  useEffect(() => {
    const fetchRoomPricesAndAvailability = async () => {
      try {
        const prices: { [key: string]: number } = {};
        const availability: { [key: string]: number } = {};
        const occupancy: { [key: string]: number } = {};
        const changeinprice: { [key: string]: boolean } = {};
        const changeincapacity: { [key: string]: boolean } = {};

        const roomTypes = ["Executive_Room", "Superior_Room"];

        for (const roomType of roomTypes) {
          const price = await getDocumentFieldValue("rooms", roomType, "Price");
          const available = await getDocumentFieldValue(
            "rooms",
            roomType,
            "available"
          );
          const occupied = await getDocumentFieldValue(
            "rooms",
            roomType,
            "occupied"
          );

          prices[roomType] = price;
          availability[roomType] = available;
          occupancy[roomType] = occupied;
          changeinprice[roomType] = false;
          changeincapacity[roomType] = false;
        }

        setIsPriceChanged(changeinprice);
        setIsCapacityChanged(changeincapacity);
        setRoomPrices(prices);
        setRoomAvailability(availability);
        setRoomOccupancy(occupancy);
      } catch (error) {
        console.error("Failed to fetch room data:", error);
      }
    };

    fetchRoomPricesAndAvailability();
  }, []);

  useEffect(() => {
    const fetchAllBookingData = async (): Promise<BookingData> => {
      try {
        const bookingsCollection = collection(db, "bookings");
        const snapshot = await getDocs(bookingsCollection);
        const allBookingData: BookingData = [];

        for (const doc of snapshot.docs) {
          const documentId = doc.id;
          const documentData: Booking = {
            documentId,
            name: "",
            dob: "",
            address: "",
            mobile: "",
            email: "",
            aadhar: "",
            specialRequests: "",
            checkInDate: "",
            checkOutDate: "",
            totalamount: "",
            verifiedstate: false,
            emailsent: false, // Initialize boolean properly
          };

          // Fetch fields in the same order
          documentData["name"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "name"
          );
          documentData["dob"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "dob"
          );
          documentData["address"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "address"
          );
          documentData["mobile"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "mobile"
          );
          documentData["email"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "email"
          );
          documentData["aadhar"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "aadhar"
          );
          documentData["specialRequests"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "specialRequests"
          );
          documentData["checkInDate"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "checkInDate"
          );
          documentData["checkOutDate"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "checkOutDate"
          );
          documentData["totalamount"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "totalamount"
          );
          documentData["verifiedstate"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "verifiedstate"
          );
          documentData["emailsent"] = await getDocumentFieldValue(
            "bookings",
            documentId,
            "emailsent"
          );

          // Fetch room data dynamically
          let index = 0;
          while (true) {
            const roomType = await getDocumentFieldValue(
              "bookings",
              documentId,
              `room${index}`
            );
            const roomGuests = await getDocumentFieldValue(
              "bookings",
              documentId,
              `room${index}-guests`
            );
            if (!roomType) break;

            documentData[`room${index}`] = roomType;
            documentData[`room${index}-guests`] = roomGuests;

            index++;
          }

          allBookingData.push(documentData);
        }

        setAllBookings(allBookingData);
        return allBookingData;
      } catch (error) {
        console.error("Error fetching booking data:", error);
        return [];
      }
    };

    fetchAllBookingData();
  }, []);

  const handleSendEmail = async (booking: Booking) => {
    setLoading(true);

    try {
      const templateParams = {
        to_name: booking.name, // Replace with dynamic data if needed
        to_email: booking.email,
        from_name: "WOODWARD2",
        booking_name: booking.name,
        booking_email: booking.email,
        booking_mobile: booking.mobile,
        booking_request: booking.specialRequests,
        booking_dob: booking.dob,
        booking_aadhar: booking.aadhar,
        booking_checkin: booking.checkInDate,
        booking_checkout: booking.checkOutDate,
        booking_total: booking.totalamount,
        rooms: `${roomdatasender(booking)}`,
      };

      await sendEmail(templateParams);
      setLoading(false);
      alert(`Confirmation mail sent to ${booking.name} successfully!`);
      setDocumentFieldValue("bookings", booking.documentId, "emailsent", true);
      booking.emailsent = true;
    } catch (error) {
      setLoading(false);
      console.error("failed to send mail : ", error);
      alert("email not sent");
    }
  };

  const roomdatasender = (booking: Booking) => {
    let i = 0;
    var returnstring = "\n";
    while (booking[`room${i}`]) {
      const roomType = booking[`room${i}`] as string;
      const roomGuest = booking[`room${i}-guests`] as string;

      returnstring =
        returnstring +
        "\n     " +
        `Room ${i + 1} : ` +
        "\n     " +
        "Room Type :  " +
        roomType +
        "\n     " +
        "Guests for this room : " +
        roomGuest +
        " guest(s)" +
        "\n";
      i++;
    }

    return returnstring;
  };

  const handleVerify = async (booking: Booking) => {
    setLoading(true);
    const roomUpdates: {
      [key: string]: { available: number; occupied: number };
    } = {};

    let i = 0;
    while (booking[`room${i}`]) {
      const roomType = booking[`room${i}`] as string;

      // Fetch current availability and occupancy from the state
      const currentAvailable = roomAvailability[roomType] || 0;
      const currentOccupied = roomOccupancy[roomType] || 0;

      if (currentAvailable == 0) {
        alert("Not enough rooms to assign");
        setLoading(false);
        return;
      }

      // Update local state (decrease available, increase occupied)
      roomUpdates[roomType] = {
        available: currentAvailable - 1, // Decrease available
        occupied: currentOccupied + 1, // Increase occupied
      };

      i++;
    }

    // Update the local state first to reflect the changes on the UI
    setRoomAvailability((prev) => ({
      ...prev,
      ...Object.fromEntries(
        Object.entries(roomUpdates).map(([roomType, { available }]) => [
          roomType,
          available,
        ])
      ),
    }));

    setRoomOccupancy((prev) => ({
      ...prev,
      ...Object.fromEntries(
        Object.entries(roomUpdates).map(([roomType, { occupied }]) => [
          roomType,
          occupied,
        ])
      ),
    }));

    // Now, update Firebase with the new room availability and occupancy
    for (const roomType in roomUpdates) {
      const { available, occupied } = roomUpdates[roomType];
      await setDocumentFieldValue("rooms", roomType, "available", available);
      await setDocumentFieldValue("rooms", roomType, "occupied", occupied);
    }

    // Update booking verification state in Firebase
    await setDocumentFieldValue(
      "bookings",
      booking.documentId,
      "verifiedstate",
      true
    );

    // Update the local state for bookings to reflect the verification
    setAllBookings((prevBookings) =>
      prevBookings.map((b) =>
        b.documentId === booking.documentId
          ? { ...b, verifiedstate: true } // Update the verified state in local state
          : b
      )
    );

    alert(`Booking for ${booking.name} verified.`);
    setLoading(false);
  };

  const handleDeleteBooking = async (booking: Booking) => {
    setLoading(true);

    // First, vacate the rooms associated with the booking
    const roomUpdates: {
      [key: string]: { available: number; occupied: number };
    } = {};

    let i = 0;
    while (booking[`room${i}`]) {
      const roomType = booking[`room${i}`] as string;

      // Fetch current availability and occupancy from the state
      const currentAvailable = roomAvailability[roomType] || 0;
      const currentOccupied = roomOccupancy[roomType] || 0;

      // Update local state (increase available, decrease occupied)
      roomUpdates[roomType] = {
        available: currentAvailable + 1, // Increase available
        occupied: currentOccupied - 1, // Decrease occupied
      };

      i++;
    }

    // Update the local state first to reflect the changes on the UI
    setRoomAvailability((prev) => ({
      ...prev,
      ...Object.fromEntries(
        Object.entries(roomUpdates).map(([roomType, { available }]) => [
          roomType,
          available,
        ])
      ),
    }));

    setRoomOccupancy((prev) => ({
      ...prev,
      ...Object.fromEntries(
        Object.entries(roomUpdates).map(([roomType, { occupied }]) => [
          roomType,
          occupied,
        ])
      ),
    }));

    // Now, update Firebase with the new room availability and occupancy
    for (const roomType in roomUpdates) {
      const { available, occupied } = roomUpdates[roomType];
      await setDocumentFieldValue("rooms", roomType, "available", available);
      await setDocumentFieldValue("rooms", roomType, "occupied", occupied);
    }

    // Delete the booking document after vacating the rooms
    await deleteDoc(doc(db, "bookings", booking.documentId));

    // Update the local state for bookings to reflect the deletion
    setAllBookings(
      (prevBookings) =>
        prevBookings.filter((b) => b.documentId !== booking.documentId) // Remove the deleted booking
    );

    alert(`Booking for ${booking.name} has been deleted and rooms vacated.`);
    setLoading(false);
  };

  const handleVacate = async (booking: Booking) => {
    setLoading(true);

    const roomUpdates: {
      [key: string]: { available: number; occupied: number };
    } = {};

    let i = 0;
    while (booking[`room${i}`]) {
      const roomType = booking[`room${i}`] as string;

      // Fetch current availability and occupancy from the state
      const currentAvailable = roomAvailability[roomType] || 0;
      const currentOccupied = roomOccupancy[roomType] || 0;

      // Update local state (increase available, decrease occupied)
      roomUpdates[roomType] = {
        available: currentAvailable + 1, // Increase available
        occupied: currentOccupied - 1, // Decrease occupied
      };

      i++;
    }

    // Update the local state first to reflect the changes on the UI
    setRoomAvailability((prev) => ({
      ...prev,
      ...Object.fromEntries(
        Object.entries(roomUpdates).map(([roomType, { available }]) => [
          roomType,
          available,
        ])
      ),
    }));

    setRoomOccupancy((prev) => ({
      ...prev,
      ...Object.fromEntries(
        Object.entries(roomUpdates).map(([roomType, { occupied }]) => [
          roomType,
          occupied,
        ])
      ),
    }));

    // Now, update Firebase with the new room availability and occupancy
    for (const roomType in roomUpdates) {
      const { available, occupied } = roomUpdates[roomType];
      await setDocumentFieldValue("rooms", roomType, "available", available);
      await setDocumentFieldValue("rooms", roomType, "occupied", occupied);
    }

    // Mark the booking as not verified (vacated) in Firebase
    await setDocumentFieldValue(
      "bookings",
      booking.documentId,
      "verifiedstate",
      false
    );

    // Update the local state for bookings to reflect the vacating action
    setAllBookings((prevBookings) =>
      prevBookings.map((b) =>
        b.documentId === booking.documentId
          ? { ...b, verifiedstate: false } // Update the verified state in local state
          : b
      )
    );

    alert(`Room for ${booking.name} vacated.`);
    setLoading(false);
  };

  const handlePriceChange = (roomType: string, newPrice: number) => {
    setIsPriceChanged((prevPrices) => ({
      ...prevPrices,
      [roomType]: true,
    }));
    setUpdatedPrices((prevPrices) => ({
      ...prevPrices,
      [roomType]: newPrice,
    }));
  };
  const handleCapacityChange = (roomType: string, newCapacity: number) => {
    setIsCapacityChanged((prevPrices) => ({
      ...prevPrices,
      [roomType]: true,
    }));
    setUpdatedCapacities((prevPrices) => ({
      ...prevPrices,
      [roomType]: newCapacity,
    }));
  };

  const handleUpdateCapacity = (roomType: string) => {
    const updatedCapacity = updatedCapacities[roomType];
    if (
      updatedCapacity !== undefined &&
      updatedCapacity !== roomAvailability[roomType] + roomOccupancy[roomType]
    ) {
      setLoading(true);
      const newAvailable = updatedCapacity - roomOccupancy[roomType];
      try {
        setDocumentFieldValue("rooms", roomType, "available", newAvailable);
        setIsPriceChanged(() => ({
          [roomType]: false,
        }));
        alert(
          `The capacity for ${roomType} is updated to ${updatedCapacity} successfully!`
        );
        setRoomAvailability((prevPrices) => ({
          ...prevPrices,
          [roomType]: newAvailable,
        }));
      } catch (error) {
        console.error(error);
        alert("Unable to update Capacity");
      }
      setLoading(false);
    }
  };

  const handleUpdatePrice = (roomType: string) => {
    const updatedPrice = updatedPrices[roomType];
    if (updatedPrice !== undefined && updatedPrice !== roomPrices[roomType]) {
      setLoading(true);
      try {
        setDocumentFieldValue("rooms", roomType, "Price", updatedPrice);
        setIsPriceChanged(() => ({
          [roomType]: false,
        }));
        alert(
          `The price for ${roomType} is updated to ${updatedPrice} successfully!`
        );
        setRoomPrices((prevPrices) => ({
          ...prevPrices,
          [roomType]: updatedPrice,
        }));
      } catch (error) {
        console.error(error);
        alert("Unable to update Price");
      }
      setLoading(false);
    }
  };

  return (
    <HelmetProvider>
      <div
        className="w-full flex justify-center items-center bg-repeat text-dkkbrown bg-ltgreen"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Admin Dashboard</title>
        </Helmet>
        <div className="flex flex-col items-center space-y-10 p-10 pb-40 md:pt-20 pt-40 w-full h-full">
          {loading && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="loader border-t-4 border-white w-16 h-16 rounded-full animate-spin"></div>
            </div>
          )}
          <div className="flex justify-center items-center text-3xl md:text-5xl rounded-3xl px-4 py-4 border-2 border-dkkbrown w-full max-w-5xl motion-safe:animate-slideIn">
            <div className="border-2 w-full text-center rounded-2xl border-dkkbrown px-4 py-5 font-MTreg">
              -- Admin Dashboard --
            </div>
          </div>

          {/* Rooms Table */}
          <div className="w-full max-w-8xl">
            <h2 className="text-xl font-semibold text-center motion-safe:animate-slideIn">
              Rooms & Prices
            </h2>
            <motion.div
              className="overflow-x-auto mt-4 animate-slideIn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <table className="min-w-full border-collapse border border-black ">
                <thead>
                  <tr className="bg-dkbrown text-gray-300">
                    <th className="p-2 border border-black">Type</th>
                    <th className="p-2 border border-black">Availability</th>
                    <th className="p-2 border border-black">Total Capacity</th>
                    <th className="p-2 border border-black">Price</th>
                    <th className="p-2 border border-black">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(roomPrices).map((roomType) => {
                    const isAvailable = roomAvailability[roomType] > 0;
                    const price = roomPrices[roomType];
                    const updatedPrice = updatedPrices[roomType];

                    return (
                      <tr
                        key={roomType}
                        className="hover:bg-gray-50 text-center"
                      >
                        <td className="p-2 border border-black">{roomType}</td>
                        <td className="p-2 border border-black space-y-2 md:space-x-2 items-center flex-row justify-center md:flex-col">
                          <button
                            className={`py-1 px-2 rounded ${
                              isAvailable ? "bg-green-500" : "bg-red-500"
                            } text-white`}
                          >
                            {roomAvailability[roomType]} Available
                          </button>
                          <button className="py-1 px-2 rounded bg-gray-600 text-white">
                            {Number(roomAvailability[roomType]) +
                              Number(roomOccupancy[roomType])}{" "}
                            Total
                          </button>
                        </td>
                        <td className="p-2 border border-black">
                          <input
                            type="number"
                            value={
                              updatedCapacities[roomType] ||
                              roomAvailability[roomType] +
                                roomOccupancy[roomType]
                            }
                            onChange={(e) =>
                              handleCapacityChange(
                                roomType,
                                Number(e.target.value)
                              )
                            }
                            className="w-20 p-2 text-center rounded"
                          />
                        </td>
                        <td className="p-2 border border-black">
                          <input
                            type="number"
                            value={updatedPrice || price}
                            onChange={(e) =>
                              handlePriceChange(
                                roomType,
                                Number(e.target.value)
                              )
                            }
                            className="w-20 p-2 text-center rounded"
                          />
                        </td>
                        <td className="p-2 border border-black space-x-2 space-y-2">
                          <button
                            disabled={!ispricechanged}
                            onClick={() => handleUpdatePrice(roomType)}
                            className={
                              ispricechanged[roomType]
                                ? "bg-blue-500 text-white py-1 px-3 rounded"
                                : "bg-gray-400 text-white py-1 px-3 rounded cursor-not-allowed"
                            }
                          >
                            Update Price
                          </button>
                          <button
                            disabled={!iscapacitychanged}
                            onClick={() => handleUpdateCapacity(roomType)}
                            className={
                              iscapacitychanged[roomType]
                                ? "bg-blue-500 text-white py-1 px-3 rounded"
                                : "bg-gray-400 text-white py-1 px-3 rounded cursor-not-allowed"
                            }
                          >
                            Update Capacity
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>
          </div>

          {/* Bookings Table */}
          <div className="w-full max-w-8xl mt-10">
            <h2 className="text-xl font-semibold text-center motion-safe:animate-slideIn">
              Bookings & Requests
            </h2>
            <motion.div
              className="overflow-x-auto mt-4 animate-slideIn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <table className="min-w-full border-collapse border border-black">
                <thead>
                  <tr className="bg-dkbrown text-gray-300">
                    <th className="p-2 border border-black">Name</th>
                    <th className="p-2 border border-black">DOB</th>
                    <th className="p-2 border border-black">Address</th>
                    <th className="p-2 border border-black">Mobile</th>
                    <th className="p-2 border border-black">Email</th>
                    <th className="p-2 border border-black">Check-In</th>
                    <th className="p-2 border border-black">Check-Out</th>
                    <th className="p-2 border border-black">
                      Total Billing Amount
                    </th>
                    <th className="p-2 border border-black">Rooms</th>
                    <th className="p-2 border border-black">Actions</th>
                    <th className="p-2 border border-black">Email User</th>{" "}
                    {/* Add new column */}
                  </tr>
                </thead>
                <tbody>
                  {allBookings.map((booking) => (
                    <tr
                      key={booking.documentId}
                      className="hover:bg-gray-50 text-center"
                    >
                      <td className="p-2 border border-black">
                        {booking.name}
                      </td>
                      <td className="p-2 border border-black">{booking.dob}</td>
                      <td className="p-2 border border-black">
                        {booking.address}
                      </td>
                      <td className="p-2 border border-black">
                        {booking.mobile}
                      </td>
                      <td className="p-2 border border-black">
                        {booking.email}
                      </td>
                      <td className="p-2 border border-black">
                        {booking.checkInDate}
                      </td>
                      <td className="p-2 border border-black">
                        {booking.checkOutDate}
                      </td>
                      <td className="p-2 border border-black">
                        {booking.totalamount}
                      </td>
                      <td className="p-2 border border-black">
                        {Object.keys(booking)
                          .filter((key) => key.endsWith("-guests")) // Filter keys ending with "-guests"
                          .map((guestKey) => {
                            const roomKey = guestKey.replace("-guests", ""); // Derive room index
                            const roomType = booking[roomKey]; // Room type
                            const guestCount = booking[guestKey]; // Guests in room
                            return (
                              <div
                                key={guestKey}
                                className="p-2 mb-2 bg-yellow-200 rounded-xl"
                              >
                                <div>{roomType}</div>
                                <div>{guestCount} guests</div>
                              </div>
                            );
                          })}
                      </td>
                      <td className="p-2 border border-black space-x-2 space-y-2">
                        <button
                          onClick={() => handleDeleteBooking(booking)}
                          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                        {!booking.verifiedstate && (
                          <button
                            onClick={() => handleVerify(booking)}
                            className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                          >
                            Start User Stay
                          </button>
                        )}
                        {booking.verifiedstate && (
                          <button
                            onClick={() => handleVacate(booking)}
                            className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                          >
                            End User Stay
                          </button>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => handleSendEmail(booking)}
                          disabled={booking.emailsent}
                          className={
                            booking.emailsent
                              ? "bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 cursor-not-allowed"
                              : "bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                          }
                        >
                          {booking.emailsent
                            ? "Already Confirmed"
                            : "Email Confirmation"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default AdminDashboard;
