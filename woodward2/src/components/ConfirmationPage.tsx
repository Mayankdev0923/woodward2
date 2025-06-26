import { useState } from "react";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";
import setDocumentFieldValue from "./FirebaseUpdate";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Image,
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

// // PDF styles
// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     backgroundColor: "#fff",
//   },
//   section: {
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
// });

const ConfirmationPage = () => {
  const location = useLocation();
  const roomPrices: Record<string, number> = location.state?.roomPrices || {};
  const formData: FormData | undefined = location.state?.formData;
  const totalAmount: number = location.state?.totalAmount || 0;
  console.log(totalAmount)
  const numberOfDays: number = location.state?.numberOfDays || 0; // Access number of days

  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasbooked, setHasBooked] = useState(false);

  if (!formData) {
    return (
      <p className="text-center text-red-500">No booking details found.</p>
    );
  }

  const sendEmail = async (templateParams: Record<string, any>) => {
    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID2 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID2;
      const userID = import.meta.env.VITE_EMAILJS_USER_ID;

      const response = await emailjs.send(
        serviceID,
        templateID2,
        templateParams,
        userID
      );
      return response.status === 200;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  };

  const handleSendEmail = async () => {
    setLoading(true);

    try {
      const templateParams = {
        from_name: formData.name, // Replace with dynamic data if needed
        booking_name: formData.name,
        booking_email: formData.email,
        booking_mobile: formData.mobile,
        booking_request: formData.specialRequests,
        booking_dob: formData.dob,
        booking_aadhar: formData.aadhar,
        booking_checkin: formData.checkInDate,
        booking_checkout: formData.checkOutDate,
        booking_total: totalAmount,
        rooms: `${roomdatasender()}`,
      };

      await sendEmail(templateParams);
      setLoading(false);
      console.log("email sent to admin");
    } catch (error) {
      setLoading(false);
      console.error("failed to send mail : ", error);
      console.log("email not sent to admin");
    }
  };

  const roomdatasender = () => {
    var returnstring = "\n";
    formData.rooms.map(
      (room) =>
        (returnstring =
          returnstring + `${room.roomType} - ${room.guests} Guest(s)` + "\n")
    );

    return returnstring;
  };

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
      await setDocumentFieldValue(
        "bookings",
        `${formData.name}-${formData.checkInDate}`,
        "emailsent",
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
      handleSendEmail();
      setHasBooked(true);
      alert("Booking Request sent successfully.");
    } catch (error) {
      console.error("Error pushing booking data:", error);
    } finally {
      setLoading(false);
    }
  };
  const pushRecord = async () => {
    try {
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "name",
        formData.name
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "dob",
        formData.dob
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "address",
        formData.address
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "mobile",
        formData.mobile
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "email",
        formData.email
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "aadhar",
        formData.aadhar
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "specialRequests",
        formData.specialRequests
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "checkInDate",
        formData.checkInDate
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "checkOutDate",
        formData.checkOutDate
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "totalamount",
        totalAmount
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "verifiedstate",
        false
      );
      await setDocumentFieldValue(
        "Record",
        `${formData.name}-${formData.checkInDate}`,
        "emailsent",
        false
      );

      // Process the rooms array with async/await
      for (const [index, room] of formData.rooms.entries()) {
        await setDocumentFieldValue(
          "Record",
          `${formData.name}-${formData.checkInDate}`,
          `room${index}`,
          room.roomType
        );
        await setDocumentFieldValue(
          "Record",
          `${formData.name}-${formData.checkInDate}`,
          `room${index}-guests`,
          room.guests
        );
      }
    } catch (error) {
      console.error("Error pushing record :", error);
    } finally {
    }
  };

  const finalsubmit = () => {
    alert(
      "Your Details would be submitted and will be subject to further verification. You may receive a phone call and email concerning your booking validation. Please stay on page until details are being sent!!"
    );
    pushBookingData();
    pushRecord();
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
              <BookingReceipt
                formData={formData}
                totalAmount={totalAmount}
                roomPrices={roomPrices}
              />
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
              !hasbooked
                ? isVerified
                  ? "bg-green-900 hover:bg-green-600 text-white"
                  : "bg-greenish text-white cursor-not-allowed"
                : "bg-greenish text-dkbrown cursor-not-allowed"
            }`}
          >
            {!hasbooked
              ? "Proceed to Confirm My Booking"
              : "Booking Request Already Sent"}
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
  roomPrices,
}: {
  formData: FormData;
  totalAmount: number;
  roomPrices: Record<string, number>;
}) => {
  const checkInDate = new Date(formData.checkInDate);
  const checkOutDate = new Date(formData.checkOutDate);
  const numberOfDays =
    Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
    ) || 1;

  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      fontFamily: "Helvetica",
      backgroundColor: "#fff",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    logo: {
      width: 80,
      height: 80,
    },
    hotelInfo: {
      textAlign: "right",
    },
    sectionTitle: {
      fontSize: 14,
      marginTop: 10,
      marginBottom: 6,
      textDecoration: "underline",
    },
    text: {
      marginBottom: 3,
    },
    table: {
      marginTop: 8,
      border: "1pt solid black",
    },
    tableRow: {
      flexDirection: "row",
    },
    tableHeader: {
      backgroundColor: "#eee",
      fontWeight: "bold",
    },
    cell: {
      flex: 1,
      padding: 5,
      borderRight: "1pt solid black",
      borderBottom: "1pt solid black",
    },
    footer: {
      marginTop: 20,
      paddingTop: 10,
      fontSize: 11,
      textAlign: "center",
      borderTop: "1pt solid #000",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image src="/logo.png" style={styles.logo} />
          <View style={styles.hotelInfo}>
            <Text>WOODWARD II by 4WILDFLOWER</Text>
            <Text>Hotel Woodward 2, near Narayan temple</Text>
            <Text>tehsil Kasol, Jari, Himachal Pradesh 175105</Text>
            <Text>Phone: 9317707539, 8168235008, 9215229400</Text>
            <Text>Email: 4wildflowerhospitality@gmail.com</Text>
          </View>
        </View>

        <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 10 }}>
          Prepayment Receipt
        </Text>

        {/* Guest Info */}
        <Text style={styles.sectionTitle}>Guest Details</Text>
        <Text style={styles.text}>Name: {formData.name}</Text>
        <Text style={styles.text}>DOB: {formData.dob}</Text>
        <Text style={styles.text}>Mobile: {formData.mobile}</Text>
        <Text style={styles.text}>Email: {formData.email}</Text>
        <Text style={styles.text}>Aadhar: {formData.aadhar}</Text>
        <Text style={styles.text}>Address: {formData.address}</Text>

        {/* Booking Info */}
        <Text style={styles.sectionTitle}>Booking Summary</Text>
        <Text style={styles.text}>Check-In: {formData.checkInDate}</Text>
        <Text style={styles.text}>Check-Out: {formData.checkOutDate}</Text>
        <Text style={styles.text}>Number of Nights: {numberOfDays}</Text>

        {/* Table Header */}
        <View style={[styles.table, styles.tableHeader]}>
          <View style={styles.tableRow}>
            <Text style={styles.cell}>Room</Text>
            <Text style={styles.cell}>Guests</Text>
            <Text style={styles.cell}>Rate/Night</Text>
            <Text style={styles.cell}>Total</Text>
          </View>
        </View>

        {/* Table Rows */}
        {formData.rooms.map((room, index) => {
          const rate = roomPrices[room.roomType] || 0;
          const rowTotal = rate * numberOfDays ;
          return (
            <View style={styles.table} key={index}>
              <View style={styles.tableRow}>
                <Text style={styles.cell}>{room.roomType}</Text>
                <Text style={styles.cell}>{room.guests}</Text>
                <Text style={styles.cell}>INR {rate}</Text>
                <Text style={styles.cell}>INR {rowTotal}</Text>
              </View>
            </View>
          );
        })}

        <Text style={{ textAlign: "right", marginTop: 10, fontSize: 13 }}>
          <Text style={{ fontWeight: "bold" }}>Total Amount:</Text> INR 
          {totalAmount.toLocaleString()}
        </Text>

        {/* Payment Instructions */}
        <Text style={styles.sectionTitle}>Payment Instructions</Text>
        <Text style={styles.text}>
          This receipt confirms your booking intent. Please contact the owner
          directly for payment and confirmation.
        </Text>
        <Text style={styles.text}>Phone: 9317707539</Text>
        <Text style={styles.text}>Email: 4wildflowerhospitality@gmail.com</Text>

        {/* Thank You Footer */}
        <Text style={styles.footer}>
          Thank you for choosing WOODWARD II. We look forward to hosting you!
        </Text>
      </Page>
    </Document>
  );
};

export default ConfirmationPage;
