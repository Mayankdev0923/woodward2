import img1 from "../assets/Heroimg.jpg";
import greenbg from "../assets/greenbg.jpg";
import { motion } from "framer-motion";

function Room2() {
  return (
    <>
      <div className="w-full h-[120vh] flex  justify-center items-center text-dkkbrown  bg-ltgreen"
      style={{ backgroundImage: `url(${greenbg})` }}>
        <div className="flex justify-center flex-col items-center space-y-10 p-20 w-full h-[100vh]">
          <div className="flex justify-center items-center rounded-3xl text-5xl px-5 py-4 border-2 border-dkkbrown">
            <div className="border-2 border-dkkbrown rounded-2xl px-7 font-MTreg py-5">
              -- Premium Suite with Panoramic Views --
            </div>
          </div>
          <div className=" p-20 flex justify-between space-x-10 items-center">
            <div
              className="flex-grow rounded-3xl bg-cover bg-center p-10 w-[70%] h-[90%]"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="flex-grow w-[70%] h-[90%] flex flex-col justify-center p-10">
              <h2 className="px-10 text-left text-5xl font-MTreg">Description:</h2>
              <p className="p-10 text-left text-2xl">
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
              <div className="flex justify-start px-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="py-3 font-MTreg px-5 rounded text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition-duration-900"
                >
                  -- Book Now --
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Room2;
