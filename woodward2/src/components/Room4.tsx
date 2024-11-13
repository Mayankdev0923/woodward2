import img1 from "../assets/Heroimg.jpg";
import { motion } from "framer-motion";
import greenbg from "../assets/greenbg.jpg";

function Room4() {
  return (
    <>
      <div className="w-full h-[120vh] flex  justify-center items-center text-dkkbrown bg-ltgreen"
      style={{ backgroundImage: `url(${greenbg})` }}>
        <div className="flex justify-center flex-col items-center space-y-10 p-20  w-full h-[100vh]">
          <div className="flex justify-center items-center text-5xl rounded-3xl px-5 py-4 border-2 border-dkkbrown">
            <div className="border-2 border-dkkbrown rounded-2xl  font-MTreg px-7 py-5">
              -- Superior Room with Balcony --
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
                The Superior Room provides an expansive living space with a
                private balcony to enjoy the crisp mountain air and sweeping
                views. With its cozy seating area, it’s an excellent choice for
                guests who enjoy extra space to relax.
                <br />
                <br />
                <b>Amenities:</b> King-sized bed or twin beds, balcony seating,
                complimentary high-speed Wi-Fi, flat-screen TV, minibar,
                coffee/tea maker, and a spacious en-suite bathroom with luxury
                bath amenities.
                <br />
                <b>Ideal For:</b>Couples, small families.
                <br />
                <b>Capacity:</b> 2-3 guests (extra bed available upon request).
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

export default Room4;
