import { useState } from "react";
import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";


function HotelBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    mobile: "",
    email: "",
    aadhar: "",
    roomType: "Eco-Lodge",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
    rooms: 1,
    specialRequests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Details Submitted: ", formData);
    alert("Booking details submitted successfully!");
  };

  return (
    <HelmetProvider>
      <div
        className="w-full min-h-screen flex flex-col justify-center items-center bg-ltgreen text-dkbrown bg-cover bg-center pt-20 pb-20"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
            <title>Bookings - Woodward 2</title>
          </Helmet>
        <div className="w-[90%] lg:w-[60%] bg-white p-8 lg:p-12 rounded-3xl shadow-xl space-y-6">
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
              />
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
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
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
              />
            </div>
            {/* Aadhar Card */}
            <div>
              <label
                htmlFor="aadhar"
                className="block text-lg md:text-xl font-MTreg"
              >
                Aadhar Card Number
              </label>
              <input
                type="text"
                id="aadhar"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
              />
            </div>
            {/* Room Type */}
            <div>
              <label
                htmlFor="roomType"
                className="block text-lg md:text-xl font-MTreg"
              >
                Room Type
              </label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
              >
                <option value="Eco-Lodge">Eco-Lodge</option>
                <option value="Premium Suite">Premium Suite</option>
                <option value="Superior Room">Superior Room</option>
                <option value="Family Suite">Family Suite</option>
                <option value="Deluxe Suite">Deluxe Suite</option>
              </select>
            </div>
            {/* Number of Rooms */}
            <div>
              <label
                htmlFor="rooms"
                className="block text-lg md:text-xl font-MTreg"
              >
                Number of Rooms
              </label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                min={1}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
              />
            </div>
            {/* Number of Guests */}
            <div>
              <label
                htmlFor="guests"
                className="block text-lg md:text-xl font-MTreg"
              >
                Number of Guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min={1}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                required
              />
            </div>
            {/* Special Requests */}
            <div>
              <label
                htmlFor="specialRequests"
                className="block text-lg md:text-xl font-MTreg"
              >
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
                className="w-full border-2 border-darkgreen rounded-lg p-3 text-lg font-MTreg focus:outline-none focus:ring-2 focus:ring-greenish"
                placeholder="Let us know any specific requirements."
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-darkgreen text-white text-lg font-MTreg py-3 rounded-lg hover:bg-greenish transition duration-300"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default HotelBookingForm;
