import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import getDocumentFieldValue from "./FirebaseFetch"; 
import setDocumentFieldValue from "./FirebaseUpdate";

function AdminDashboard() {
  const [roomPrices, setRoomPrices] = useState<{ [key: string]: number }>({});
  const [roomAvailability, setRoomAvailability] = useState<{ [key: string]: number }>({});
  const [roomOccupancy, setRoomOccupancy] = useState<{ [key: string]: number }>({});
  const [updatedPrices, setUpdatedPrices] = useState<{ [key: string]: number }>({});

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
          const available = await getDocumentFieldValue("rooms", roomType, "available");
          const occupied = await getDocumentFieldValue("rooms", roomType, "occupied");

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
      alert(`The price for ${roomType} is updated to ${updatedPrice} succesfully!`);
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
              Rooms
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
                      <tr key={roomType} className="hover:bg-gray-50 text-center">
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
                            {Number(roomAvailability[roomType]) + Number(roomOccupancy[roomType])} Total
                          </button>
                        </td>
                        <td className="p-1 border border-black">
                          <input
                            type="number"
                            className="border rounded p-1 w-full sm:w-32 md:w-40" // Limit width on small screens
                            value={updatedPrice || price || 0}
                            onChange={(e) =>
                              handlePriceChange(roomType, Number(e.target.value))
                            }
                          />
                        </td>
                        <td className="p-2 border border-black">
                          <button
                            className={`py-1 px-1 rounded text-white ${
                              updatedPrice !== undefined && updatedPrice !== price
                                ? "bg-blue-500"
                                : "bg-gray-300 cursor-not-allowed"
                            }`}
                            onClick={() => handleUpdatePrice(roomType)}
                            disabled={updatedPrice === undefined || updatedPrice === price}
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    );
                  })}
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
