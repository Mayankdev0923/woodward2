import { useState } from "react";
import { useLocation } from "react-router-dom";
import setDocumentFieldValue from "./FirebaseUpdate";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import greenbg from "../assets/greenbg.jpg";

// Interface for the formData structure
interface Room {
  roomType: string;
  guests: number;
}

interface FormData {
  name: string;
  dob: string;
  address: string;
  mobile: string;
  email: string;
  aadhar: string;
  specialRequests?: string;
  checkInDate: string;
  checkOutDate: string;
  rooms: Room[];
}

// PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
});

const ConfirmationPage = () => {
  const location = useLocation();
  const formData: FormData | undefined = location.state?.formData;
  const totalAmount: number = location.state?.totalAmount || 0;
  const numberOfDays: number = location.state?.numberOfDays || 0; // Access number of days

  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasbooked, setHasBooked] = useState(false);

  if (!formData) {
    return (
      <p className="text-center text-red-500">No booking details found.</p>
    );
  }

  formData.rooms.forEach((room, index) => {
    console.log(`Index: ${index}, Item: ${room.roomType} , ${room.guests}`);
  });

  const pushBookingData = async () => {
    setLoading(true);
    try {
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "name",
        formData.name
      );
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "dob",
        formData.dob
      );
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "address",
        formData.address
      );
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "mobile",
        formData.mobile
      );
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "email",
        formData.email
      );
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "aadhar",
        formData.aadhar
      );
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "specialRequests",
        formData.specialRequests
      );
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "checkInDate",
        formData.checkInDate
      );
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "checkOutDate",
        formData.checkOutDate
      );
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "totalamount",
        totalAmount
      );
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "verifiedstate",
        false
      );

      // Process the rooms array with async/await
      for (const [index, room] of formData.rooms.entries()) {
        await setDocumentFieldValue(
          "bookings",
          `${formData.name}-${formData.checkInDate}`,
          `room${index}`,
          room.roomType
        );
        await setDocumentFieldValue(
          "bookings",
          `${formData.name}-${formData.checkInDate}`,
          `room${index}-guests`,
          room.guests
        );
      }

      alert("Booking data pushed successfully.");
    } catch (error) {
      console.error("Error pushing booking data:", error);
    } finally {
      setLoading(false);
      setHasBooked(true);
    }
  };

  const finalsubmit = () => {
    alert(
      "Your Details would be submitted and will be subject to further verification. You may receive a phone call and email concerning your booking validation"
    );
    pushBookingData();
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center bg-ltgreen text-dkbrown bg-cover bg-center pt-20 pb-20 px-5"
      style={{ backgroundImage: `url(${greenbg})` }}
    >
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="loader border-t-4 border-white w-16 h-16 rounded-full animate-spin"></div>
        </div>
      )}
      <div className="w-full sm:w-[90%] lg:w-[60%] bg-white p-8 lg:p-12 rounded-3xl shadow-xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Booking Confirmation
        </h2>
        <div className="space-y-4 text-lg">
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Date of Birth:</strong> {formData.dob}
          </p>
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
          <p>
            <strong>Mobile:</strong> {formData.mobile}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Aadhar Number:</strong> {formData.aadhar}
          </p>
          <p>
            <strong>Special Requests:</strong>{" "}
            {formData.specialRequests || "None"}
          </p>
          <p>
            <strong>Check In Date:</strong> {formData.checkInDate}
          </p>
          <p>
            <strong>Check Out Date:</strong> {formData.checkOutDate}
          </p>

          <h3 className="text-2xl font-bold">Rooms:</h3>
          {formData.rooms.map((room, index) => (
            <div key={index} className="text-lg">
              <p>
                {room.roomType} - {room.guests} Guest(s)
              </p>
            </div>
          ))}

          <h3 className="text-2xl font-bold">
            Cost: ₹{(totalAmount / numberOfDays).toLocaleString()} {" /night"}
          </h3>
        </div>

        <h3 className="text-2xl font-bold">
          Total for {numberOfDays} day(s): ₹{totalAmount.toLocaleString()}
        </h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="verify"
              className="w-5 h-5 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
              checked={isVerified}
              onChange={(e) => setIsVerified(e.target.checked)}
            />
            <label
              htmlFor="verify"
              className="text-gray-800 text-sm md:text-base py-5"
            >
              I verify that the above details are correct.
            </label>
          </div>

          <PDFDownloadLink
            document={
              <BookingReceipt formData={formData} totalAmount={totalAmount} />
            }
            fileName="booking_receipt.pdf"
          >
            <button
              className="w-full px-4 py-2 rounded-lg 
                    bg-green-900 hover:bg-green-600 text-white"
            >
              Download Pre-Payment Receipt
            </button>
          </PDFDownloadLink>
          <button
            disabled={!isVerified || hasbooked}
            onClick={finalsubmit}
            className={`w-full px-4 py-2 rounded-lg ${
              !hasbooked?
              (isVerified
                ? "bg-green-900 hover:bg-green-600 text-white"
                : "bg-greenish text-white cursor-not-allowed")
                : "bg-greenish text-dkbrown cursor-not-allowed"
            }`}
          >
            {!hasbooked?"Proceed to Confirm My Booking":"Booking Already Completed"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Component to generate the PDF receipt
const BookingReceipt = ({
  formData,
  totalAmount,
}: {
  formData: FormData;
  totalAmount: number;
}) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Hotel Booking Receipt</Text>
        <Text style={styles.text}>Name: {formData.name}</Text>
        <Text style={styles.text}>Date of Birth: {formData.dob}</Text>
        <Text style={styles.text}>Address: {formData.address}</Text>
        <Text style={styles.text}>Mobile: {formData.mobile}</Text>
        <Text style={styles.text}>Email: {formData.email}</Text>
        <Text style={styles.text}>Aadhar: {formData.aadhar}</Text>
        <Text style={styles.text}>
          Special Requests: {formData.specialRequests || "None"}
        </Text>
        <Text style={styles.text}>Check In Date: {formData.checkInDate}</Text>
        <Text style={styles.text}>Check Out Date: {formData.checkOutDate}</Text>

        <Text style={styles.text}>Rooms:</Text>
        {formData.rooms.map((room, index) => (
          <Text key={index} style={styles.text}>
            {room.roomType} - {room.guests} Guests
          </Text>
        ))}

        <Text style={styles.text}>Total: ₹{totalAmount.toLocaleString()}</Text>
      </Page>
    </Document>
  );
};

export default ConfirmationPage;
