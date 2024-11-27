import img1 from "../assets/Heroimg.jpg";
import { motion } from "framer-motion";
import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getDocumentFieldValue from "./FirebaseFetch";


function Room1() {

  const navigate = useNavigate();

  const [prices, setPrices] = useState({
    RoomPrice: null,
  });

  useEffect(() => {
    const fetchRoomPrices = async () => {
      const Price = await getDocumentFieldValue("rooms", "Eco-Lodge_Room", "Price");

      // Update state with fetched prices
      setPrices({
        RoomPrice: Price,
      });
    };

    fetchRoomPrices();
  }, []);

  return (
    <HelmetProvider>
      <>
        <div
          className="w-full flex justify-center items-center text-dkkbrown bg-ltgreen"
          style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
        >
          <Helmet>
            <title>Eco-Lodge Room</title>
          </Helmet>
          <div className="flex justify-center flex-col items-center space-y-10 p-10 pb-40 md:pt-20 pt-40 w-full h-full">
            <div className="flex justify-center items-center text-3xl md:text-5xl rounded-3xl px-5 py-4 border-2 border-dkkbrown w-full max-w-6xl motion-safe:animate-slideIn">
              <div className="border-2 w-full text-center rounded-2xl border-dkkbrown px-4 py-5 font-MTreg">
                -- Eco-Lodge Room --
              </div>
            </div>
            <div className="flex flex-col md:flex-row p-5 md:p-20 justify-between space-y-10 md:space-y-0 items-center w-full max-w-8xl">
              {/* Image div takes up the same height as the content container */}
              <div
                className="w-full md:w-[45%] h-[0px] md:h-[550px] bg-cover bg-center rounded-3xl motion-safe:animate-slideIn"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              {/* Content div */}
              <div className="flex-grow w-full md:w-[45%] flex flex-col justify-center p-5 md:p-10">
                <h2 className="text-3xl md:text-5xl font-MTreg motion-safe:animate-slideIn">
                  Description:
                </h2>
                <p className="p-5 text-lg md:text-2xl motion-safe:animate-slideIn">
                  For eco-conscious travelers, our Eco-Lodge Room offers a
                  sustainable stay experience with thoughtfully sourced materials,
                  natural light, and a focus on minimal environmental impact.
                  These rooms feature decor inspired by the natural beauty of
                  Himachal.
                  <br />
                  <br />
                  <b>Amenities:</b> Double bed, large windows with natural
                  ventilation, complimentary Wi-Fi, sustainable toiletries,
                  recycled furnishings, and a private balcony.
                  <br />
                  <b>Ideal For:</b> Solo travelers, couples seeking a sustainable
                  stay.
                  <br />
                  <b>Capacity:</b> 2 guests.
                  <br/>
                  <b>Price :</b> ₹ {prices.RoomPrice} per night
                </p>
                <div className="flex justify-start px-5 md:px-10">
                  <motion.button
                    onClick={() => navigate(`/Book`)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="py-3 px-5 font-MTreg rounded text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300 motion-safe:animate-slideIn"
                  >
                    -- Book Now --
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </HelmetProvider>
  );
}

export default Room1;
