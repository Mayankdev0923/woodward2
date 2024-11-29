import { useState, useEffect } from "react";
import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import getDocumentFieldValue from "./FirebaseFetch";


// Define the Room type
interface Room {
  roomType: string;
  guests: number;
}


const HotelBookingForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    mobile: "",
    email: "",
    aadhar: "",
    specialRequests: "",
    checkInDate: "",
    checkOutDate: "",
    rooms: [{ roomType: "", guests: 1 }] as Room[], // Typing rooms as an array of Room object
  });

  const [roomPrices, setRoomPrices] = useState<{ [key: string]: number }>({});
  const [availableRoom, setavailableRoom] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    const fetchavailableRoom = async () => {
      try {
        const available_number: { [key: string]: number } = {};

        // Define the room types
        const roomTypes = [
          "Eco-Lodge_Room",
          "Premium_Suite",
          "Superior_Suite",
          "Family_Suite",
          "Deluxe_Room",
        ];

        // Fetch prices dynamically for each room type
        for (const roomType of roomTypes) {
          const availableroom = await getDocumentFieldValue(
            "rooms",
            roomType,
            "available"
          );
          available_number[roomType] = availableroom;
        }

        // Update the state with the fetched prices
        setavailableRoom(available_number);
      } catch (error) {
        console.error("Failed to fetch room prices:", error);
      }
    };

    fetchavailableRoom();
  }, []);

  useEffect(() => {
    const fetchRoomPrices = async () => {
      try {
        const prices: { [key: string]: number } = {};

        // Define the room types
        const roomTypes = [
          "Eco-Lodge_Room",
          "Premium_Suite",
          "Superior_Suite",
          "Family_Suite",
          "Deluxe_Room",
        ];

        // Fetch prices dynamically for each room type
        for (const roomType of roomTypes) {
          const price = await getDocumentFieldValue("rooms", roomType, "Price");
          prices[roomType] = price;
        }

        // Update the state with the fetched prices
        setRoomPrices(prices);
      } catch (error) {
        console.error("Failed to fetch room prices:", error);
      }
    };

    fetchRoomPrices();
  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;

      formData.rooms.forEach((room) => {
        const roomPrice = roomPrices[room.roomType]; // Get price from the fetched roomPrices
        if (roomPrice) {
          total += roomPrice; // Calculate total if the price is defined
        } else {
          console.warn(`Price not found for room type: ${room.roomType}`);
        }
      });

      setTotalAmount(total);
    };

    if (Object.keys(roomPrices).length > 0) {
      calculateTotal(); // Only calculate if roomPrices is populated
    }
  }, [roomPrices, formData.rooms]);

  const navigate = useNavigate();


  const [_captchaVerified, setCaptchaVerified] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [errors, setErrors] = useState<any>({}); // To store errors

  // Validating mobile number (10 digits)
  const isValidMobile = (mobile: string) => /^[0-9]{10}$/.test(mobile);

  // Validating email format
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Aadhar Number Format Validation (12 digits)
  const isValidAadhar = (aadhar: string) => /^[0-9]{12}$/.test(aadhar);

  // Calculate age from DOB
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const ageDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  // Calculate the total cost of rooms
  const calculateTotal = () => {
    let total = 0;

    formData.rooms.forEach((room) => {
      const roomPrice = roomPrices[room.roomType]; // Get price from the fetched roomPrices
      if (roomPrice) {
        total += roomPrice * room.guests; // Calculate total if the price is defined
      } else {
        console.warn(`Price not found for room type: ${room.roomType}`);
      }
    });

    setTotalAmount(total);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index?: number
  ) => {
    const { name, value } = e.target;

    if (name === "checkInDate") {
      // Ensure check-out date is after check-in date
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        checkOutDate: prev.checkOutDate < value ? value : prev.checkOutDate,
      }));
    } else if (name === "checkOutDate") {
      // Ensure check-out date is after check-in date
      if (new Date(value) <= new Date(formData.checkInDate)) {
        alert("Check-out date must be after check-in date");
        return;
      }
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      // Existing change handler logic
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (name === "roomType") {
      const updatedRooms = [...formData.rooms];
      const oldRoomType = updatedRooms[index!].roomType;
      const newRoomType = value;

      // Check if the new room type is available
      const availableCount = availableRoom[newRoomType] || 0;
      if (availableCount <= 0) {
        alert(`${newRoomType} is not available.`);
        return;
      }

      // Update the room type
      updatedRooms[index!].roomType = newRoomType;
      setFormData({ ...formData, rooms: updatedRooms });

      // Decrease available count for the new room type
      setavailableRoom((prev) => ({
        ...prev,
        [newRoomType]: availableCount - 1,
        [oldRoomType]: (prev[oldRoomType] || 0) + 1, // Increase old room type count
      }));
    } else if (name === "guests") {
      const updatedRooms = [...formData.rooms];
      const newGuestCount = parseInt(value, 10);

      // Update guests
      updatedRooms[index!].guests = newGuestCount;
      setFormData({ ...formData, rooms: updatedRooms });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Function to add a room
  const handleRoomAdd = () => {
    const newRoomType = "Eco-Lodge_Room"; // Default room type
    const currentAvailableRooms = availableRoom[newRoomType] || 0;

    if (currentAvailableRooms <= 0) {
      alert(`No more ${newRoomType} rooms are available.`);
      return;
    }

    // Add room to form data
    setFormData({
      ...formData,
      rooms: [...formData.rooms, { roomType: newRoomType, guests: 1 }],
    });

    // Decrease available rooms
    setavailableRoom((prev) => ({
      ...prev,
      [newRoomType]: currentAvailableRooms - 1,
    }));
  };

  // Function to remove a room
  const handleRoomRemove = (indexToRemove: number) => {
    const roomTypeToRemove = formData.rooms[indexToRemove].roomType;

    // Remove the room from form data
    const updatedRooms = formData.rooms.filter(
      (_, index) => index !== indexToRemove
    );

    setFormData({
      ...formData,
      rooms: updatedRooms,
    });

    // Increase available rooms
    setavailableRoom((prev) => ({
      ...prev,
      [roomTypeToRemove]: (prev[roomTypeToRemove] || 0) + 1,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Calculate age from DOB
    const age = calculateAge(formData.dob);

    if (age < 18) {
      alert("You must be at least 18 years old to book.");
      return; // Prevent form submission if the user is under 18
    }

    // Validate Aadhar Number
    if (!isValidAadhar(formData.aadhar)) {
      alert("Aadhar number must be 12 digits.");
      return; // Prevent form submission if Aadhar is invalid
    }

    // Validate Mobile Number
    if (!isValidMobile(formData.mobile)) {
      alert("Mobile number must be 10 digits.");
      return; // Prevent form submission if mobile number is invalid
    }

    // Validate Email
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return; // Prevent form submission if email is invalid
    }

    // Calculate total amount for the stay
    calculateTotal();

    // Calculate number of days between check-in and check-out
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const timeDifference = checkOut.getTime() - checkIn.getTime();
    const numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days

    // Calculate total amount based on number of days
    const totalAmountForStay = totalAmount * numberOfDays;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison
    if (checkIn < today) {
      alert("Check-in date cannot be earlier than today.");
      return; // Prevent form submission if the check-in date is invalid
    }

    // Reset errors before re-checking
    setErrors({});

    // Additional checks...

    // Redirect to the confirmation page with form data, total amount, and number of days
    navigate("/confirmation", {
      state: {
        formData,
        totalAmount: totalAmountForStay,
        numberOfDays, // Pass the number of days
      },
    });

    console.log("Booking Details Submitted: ", formData);
    alert("Booking details submitted successfully!");
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  return (
    <HelmetProvider>
      <div
        className="w-full min-h-screen flex flex-col justify-center bg-repeat items-center bg-ltgreen text-dkbrown pt-20 pb-20 px-5 md:px-0"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Bookings - Woodward 2</title>
        </Helmet>
        <div className="w-full sm:w-[90%] lg:w-[60%] bg-white p-8 lg:p-12 rounded-3xl shadow-xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-MTreg text-center">
            Hotel Booking Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg md:text-xl font-MTreg"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
                autoComplete="name"
              />
            </div>
            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dob"
                className="block text-lg md:text-xl font-MTreg"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
                autoComplete="bday"
              />
              {errors.age && (
                <p className="text-red-600 text-sm">{errors.age}</p>
              )}
            </div>
            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-lg md:text-xl font-MTreg"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
                autoComplete="street-address"
              />
            </div>
            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-lg md:text-xl font-MTreg"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
                pattern="^(\\+91|0)?[789]\d{9}$"
                title="Mobile number should be 10 digits"
                autoComplete="tel"
              />
            </div>
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg md:text-xl font-MTreg"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>
            {/* Aadhar Number */}
            <div>
              <label
                htmlFor="aadhar"
                className="block text-lg md:text-xl font-MTreg"
              >
                Aadhar Number
              </label>
              <input
                type="text"
                id="aadhar"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
                pattern="[0-9]{12}"
                title="Aadhar number should be 12 digits"
                autoComplete="off"
              />
              {errors.aadhar && (
                <p className="text-red-600 text-sm">{errors.aadhar}</p>
              )}
            </div>
            {/*Special Requests*/}
            <div>
              <label
                htmlFor="specialRequests"
                className="block text-lg md:text-xl font-MTreg"
              >
                Special Requests (Optional)
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                placeholder="Please let us know about any special requirements or additional services you may need during your stay (e.g., extra pillows, late check-in, accessibility needs)"
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                maxLength={500}
              />
              <div className="flex justify-between">
                <p className="text-sm text-gray-500 mt-2">Max 500 characters</p>
                <p className="text-sm text-gray-500 mt-2">
                  {formData.specialRequests.length}/500
                </p>
              </div>
            </div>

            {/* Check-In Date */}
            <div>
              <label
                htmlFor="checkInDate"
                className="block text-lg md:text-xl font-MTreg"
              >
                Check-In Date
              </label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
                min={new Date().toISOString().split("T")[0]} // Set min to today's date
              />
            </div>

            {/* Check-Out Date */}
            <div>
              <label
                htmlFor="checkOutDate"
                className="block text-lg md:text-xl font-MTreg"
              >
                Check-Out Date
              </label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
              />
            </div>

            {/* Room Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-MTreg">Room Details</h3>
              {formData.rooms.map((room, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0"
                >
                  {/* Room Type */}
                  <div className="flex-1">
                    <label htmlFor={`roomType${index}`} className="font-MTreg">
                      Room Type
                    </label>
                    <select
                      id={`roomType${index}`}
                      name="roomType"
                      value={room.roomType}
                      onChange={(e) => {
                        const selectedRoomType = e.target.value;
                        const availableCount =
                          availableRoom[selectedRoomType] || 0;

                        if (availableCount === 0) {
                          alert(`${selectedRoomType} is not available.`);
                          return; // Prevent changing the room type if not available
                        }

                        handleChange(e, index);
                      }}
                      className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                    >
                      <option></option>
                      {Object.keys(roomPrices).map((roomType) => (
                        <option
                          key={roomType}
                          value={roomType}
                          disabled={availableRoom[roomType] === 0}
                        >
                          {roomType} (₹{roomPrices[roomType]} per night) -{" "}
                          {availableRoom[roomType] > 0
                            ? `${availableRoom[roomType]} available`
                            : "Not Available"}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div className="flex-1">
                    <label htmlFor={`guests${index}`} className="font-MTreg">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id={`guests${index}`}
                      name="guests"
                      value={room.guests}
                      onChange={(e) => {
                        const guestCount = e.target.value; // Get the value directly as a string

                        // Check if the input is empty
                        if (guestCount === "") {
                          return; // Do nothing if the input is empty
                        }

                        const parsedGuestCount = parseInt(guestCount, 10);

                        // Ensure the number of guests is between 1 and 4
                        if (parsedGuestCount < 1 || parsedGuestCount > 4) {
                          alert("Number of guests must be between 1 and 4.");
                          return; // Prevent changing the guest count if it's out of range
                        }

                        // Update the guest count
                        handleChange(e, index); // Call handleChange only if the input is valid
                      }}
                      min={1}
                      max={4} // Set max to 4
                      className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                    />
                  </div>

                  {/* Remove Button */}
                  <div className="flex items-center text-center justify-center md:pt-5 ">
                    <button
                      type="button"
                      onClick={() => handleRoomRemove(index)}
                      className="w-full text-red-600 rounded-lg border-2 border-red-300 p-4"
                    >
                      Remove Room
                    </button>
                  </div>
                </div>
              ))}

              {/* Add Room Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleRoomAdd}
                  className="text-blue-600 rounded-lg border-2 border-blue-300 p-4"
                >
                  Add Room
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row space-y-5 p-1 justify-between px-5">
              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6LcNU4oqAAAAAFwLujsPPCIVpGrkKH7MolIt7u6d"
                  onChange={handleCaptchaChange}
                />
              </div>
              {/* Total Cost Display */}
              <div className="text-4xl text-bold text-left font-MTreg flex justify-center">
                <p>
                  <span className="font-semibold">TOTAL COST: </span>
                  <sup>₹</sup>
                  {totalAmount.toLocaleString()}
                  {" /Night"}
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-green-900 hover:bg-green-600 text-white rounded-lg px-8 py-3 font-MTreg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default HotelBookingForm;
