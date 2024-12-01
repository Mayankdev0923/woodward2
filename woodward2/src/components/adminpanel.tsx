import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import getDocumentFieldValue from "./FirebaseFetch";
import setDocumentFieldValue from "./FirebaseUpdate";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./Firebase";
import { initializeApp } from "firebase/app";

// Define a type for the booking data structure
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
  [key: string]: string | number; // For dynamic room fields (e.g., room0, room1)
};

// Define the type for the return value of `fetchAllBookingData`
type BookingData = Booking[];

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function AdminDashboard() {
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
  const [allBookings, setAllBookings] = useState<BookingData>([]);

  useEffect(() => {
    const fetchRoomPricesAndAvailability = async () => {
      try {
        const prices: { [key: string]: number } = {};
        const availability: { [key: string]: number } = {};
        const occupancy: { [key: string]: number } = {};

        const roomTypes = [
          "Eco-Lodge_Room",
          "Premium_Suite",
          "Superior_Suite",
          "Family_Suite",
          "Deluxe_Room",
        ];

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
        }

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

  // Handle room price change
  const handlePriceChange = (roomType: string, newPrice: number) => {
    setUpdatedPrices((prevPrices) => ({
      ...prevPrices,
      [roomType]: newPrice,
    }));
  };

  const handleUpdatePrice = (roomType: string) => {
    const updatedPrice = updatedPrices[roomType];
    if (updatedPrice !== undefined && updatedPrice !== roomPrices[roomType]) {
      setDocumentFieldValue("rooms", roomType, "Price", updatedPrice);
      alert(
        `The price for ${roomType} is updated to ${updatedPrice} successfully!`
      );
      setRoomPrices((prevPrices) => ({
        ...prevPrices,
        [roomType]: updatedPrice,
      }));
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
              className="overflow-x-auto mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <table className="min-w-full border-collapse border border-black">
                <thead>
                  <tr className="bg-dkbrown text-gray-300">
                    <th className="p-2 border border-black">Type</th>
                    <th className="p-2 border border-black">Availability</th>
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
                            value={updatedPrice || price}
                            onChange={(e) =>
                              handlePriceChange(
                                roomType,
                                Number(e.target.value)
                              )
                            }
                            className="w-20 p-2 text-center"
                          />
                        </td>
                        <td className="p-2 border border-black">
                          <button
                            onClick={() => handleUpdatePrice(roomType)}
                            className="bg-blue-500 text-white py-1 px-3 rounded"
                          >
                            Update Price
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
              className="overflow-x-auto mt-4"
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
                    <th className="p-2 border border-black">Rooms</th>
                  </tr>
                </thead>
                <tbody>
                  {allBookings.map((booking) => (
                    <tr key={booking.documentId} className="hover:bg-gray-50 text-center">
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
                      <td className="p-2 border border-black flex flex-col">
                        {Object.keys(booking)
                          .filter((key) => key.endsWith("-guests")) // Filter keys ending with "-guests"
                          .map((guestKey) => {
                            // The room index will be derived by removing the '-guests' part
                            const roomKey = guestKey.replace("-guests", "");
                            const roomType = booking[roomKey]; // Get room type for the current room

                            // Get the guest count for the current room
                            const guestCount = booking[guestKey];

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
