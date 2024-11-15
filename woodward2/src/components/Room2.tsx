import img1 from "../assets/Heroimg.jpg";
import greenbg from "../assets/greenbg.jpg";
import { motion } from "framer-motion";
import { Helmet,HelmetProvider } from "react-helmet-async";

function Room2() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Premium Suite</title>
        </Helmet>
        <div
          className="w-full pt-20  flex justify-center items-center text-dkkbrown bg-ltgreen"
          style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
        >
          <div className="flex justify-center flex-col items-center space-y-10 p-10 md:p-20 w-full h-full">
            <div className="flex justify-center items-center text-3xl md:text-5xl rounded-3xl px-4 py-4 border-2 border-dkkbrown w-full max-w-6xl">
              <div className="border-2  w-full text-center  rounded-2xl border-dkkbrown px-7 py-5 font-MTreg">
                -- Premium Suite with Panoramic Views --
              </div>
            </div>
            <div className="flex flex-col md:flex-row p-5 h-[0px] md:h-[550px] md:p-20 justify-between space-y-10 md:space-y-0 items-center w-full max-w-8xl">
              <div
                className="w-full md:w-[45%] h-[0px] md:h-[550px] bg-cover bg-center rounded-3xl"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div className="flex-grow w-full md:w-[45%] flex flex-col justify-center p-5 md:p-10">
                <h2 className="text-3xl md:text-5xl font-MTreg">Description:</h2>
                <p className="p-5 text-lg md:text-2xl">
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
                </p>
                <div className="flex justify-start px-5 md:px-10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="py-3 px-5 font-MTreg rounded text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300"
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
