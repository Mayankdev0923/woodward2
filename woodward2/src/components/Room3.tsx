import img1 from "../assets/Heroimg.jpg";
import { motion } from "framer-motion";
import greenbg from "../assets/greenbg.jpg";

function Room3() {
  return (
    <>
      <div
        className="w-full h-[120vh] flex justify-center items-center text-dkkbrown bg-ltgreen"
        style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
      >
        <div className="flex justify-center flex-col items-center space-y-10 p-10 pb-40 md:pt-20 pt-40 md:p-20 w-full h-full">
          <div className="flex justify-center items-center text-3xl md:text-5xl rounded-3xl px-5 py-4 border-2 border-dkkbrown w-full max-w-4xl">
            <div className="border-2  w-full text-center  rounded-2xl border-dkkbrown px-7 py-5 font-MTreg">
              -- Family Suite --
            </div>
          </div>
          <div className="flex flex-col md:flex-row p-5 md:p-20 justify-between space-y-10 md:space-y-0 items-center w-full max-w-8xl">
            <div
              className="w-full md:w-[45%] h-[80%] bg-cover bg-center rounded-3xl"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="flex-grow w-full md:w-[45%] flex flex-col justify-center p-5 md:p-10">
              <h2 className="text-3xl md:text-5xl font-MTreg">Description:</h2>
              <p className="p-5 text-lg md:text-2xl">
                Our Family Suite offers the perfect getaway for families or
                small groups. With two separate sleeping areas, a shared living
                space, and mountain views, it provides privacy and convenience
                for everyone.
                <br />
                <br />
                <b>Amenities:</b> Queen-sized bed and twin beds, lounge area,
                two TVs, complimentary Wi-Fi, coffee/tea maker, and a large
                bathroom with a shower and bath amenities.
                <br />
                <b>Ideal For:</b> Families or groups.
                <br />
                <b>Capacity:</b> 4 guests.
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
  );
}

export default Room3;
