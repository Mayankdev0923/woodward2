import img1 from "../assets/Heroimg.jpg";
import greenbg from "../assets/greenbg.jpg";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getDocumentFieldValue from "./FirebaseFetch";

function Room2() {

  const navigate = useNavigate();

  const [prices, setPrices] = useState({
    RoomPrice: null,
  });

  useEffect(() => {
    const fetchRoomPrices = async () => {
      const Price = await getDocumentFieldValue("rooms", "Premium_Suite", "Price");

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
        <Helmet>
          <title>Premium Suite</title>
        </Helmet>
        <div
          className="w-full flex justify-center items-center bg-repeat text-dkkbrown bg-ltgreen"
          style={{ backgroundImage: `url(${greenbg})` }}
        >
          <div className="flex justify-center flex-col items-center space-y-10 p-10 pb-40 md:pt-20 pt-40 w-full h-full">
            <div className="flex justify-center items-center text-3xl md:text-5xl rounded-3xl px-5 py-4 border-2 border-dkkbrown w-full max-w-6xl motion-safe:animate-slideIn">
              <div className="border-2 w-full text-center rounded-2xl border-dkkbrown px-4 py-5 font-MTreg">
                -- Premium Suite with Panoramic Views --
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
                  The Premium Suite is our most luxurious option, featuring
                  expansive windows for panoramic mountain and valley views. This
                  spacious suite offers a private living room, making it ideal for
                  those who want the ultimate relaxation experience in Kasol.
                  <br />
                  <br />
                  <b>Amenities:</b> King-sized bed, private living area with sofa,
                  large windows, private balcony, Wi-Fi, flat-screen TV, minibar,
                  coffee/tea maker, and a luxurious en-suite bathroom with premium
                  toiletries and a rain shower.
                  <br />
                  <b>Ideal For:</b> Honeymooners, luxury travelers.
                  <br />
                  <b>Capacity:</b> 2 guests (perfect for romantic getaways).
                  <br />
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

export default Room2;
