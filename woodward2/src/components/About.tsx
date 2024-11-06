import img1 from "../assets/Heroimg.jpg";
import Gallery from "./Gallery";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="text-lg  items-center  ease-in-out">
      <div className="flex justify-center ">
        <div className="py-40 justify-center items-center w-[90vh]">
          <div
          className="py-10 px-20 text-center text-5xl">
            Welcome to Woodward 2, Your Himalayan Retreat in Kasol
          </div>
          <div className="p-10 text-center text-2xl">
            <p>
              Nestled amidst the pristine mountains and lush greenery of Kasol,
              Himachal Pradesh, Woodward 2 is more than just a place to
              stay—it's an experience designed to connect you with nature,
              adventure, and serenity. Our boutique hotel offers a blend of
              rustic charm and modern comforts, making it a sanctuary for
              travelers seeking tranquility and inspiration in the heart of the
              Himalayas.
            </p>
          </div>
          <div className="flex justify-center items-center p-5 ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 rounded text-xl text-gray-900 outline outline-2 outline-gray-900 hover:text-white hover:bg-gray-900 transition-duration-900"
            >
              -- Know More --
            </motion.button>
          </div>
        </div>
      </div>

      <div className=" p-20 flex justify-between space-x-10 items-center">
        <div
          className="flex-grow rounded-3xl bg-cover bg-center p-10 w-[calc(70vw)] h-[calc(70vh)]"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        <div className="flex-grow w-[70vw] h-[70vh] p-10">
          <h2 className="p-10 text-left text-5xl">
            Rooms & Amenities:
            <br />
            Comfort with a Touch of Nature
          </h2>
          <p className="p-10 text-left text-2xl">
            At Woodward 2, our rooms are designed to be a serene retreat, each
            blending cozy interiors with breathtaking mountain views. We offer
            various room categories to suit the needs of solo travelers,
            couples, families, and adventure groups alike.
          </p>
          <div className="flex justify-start px-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="py-3 px-5 rounded text-xl text-gray-900 outline outline-2 outline-gray-900 hover:text-white hover:bg-gray-900 transition-duration-900"
            >
              -- Know More --
            </motion.button>
          </div>
        </div>
      </div>

      <div className="px-20 py-40 justify-center items-start">
        <h2 className="p-5 text-center text-4xl">Visit Our Gallery</h2>
        <Gallery />
        <div className="flex justify-center items-center p-5 py-10 ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-5 rounded text-xl text-gray-900 outline outline-2 outline-gray-900 hover:text-white hover:bg-gray-900 transition-duration-900"
          >
            -- View More --
          </motion.button>
        </div>
      </div>

      <div className=" py-40 px-20 flex justify-between space-x-10 items-center ">
        <div className="flex-grow w-[70vw] h-[70vh] p-10 ">
          <h2 className="p-10 text-right text-5xl">Bookings & Policies</h2>
          <p className="p-10 text-right text-2xl">
            Our flexible booking options and guest-centered policies ensure a
            smooth and reliable experience for the customers.
          </p>
          <div className="flex justify-end px-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 rounded text-xl text-gray-900 outline outline-2 outline-gray-900 hover:text-white hover:bg-gray-900 transition-duration-900"
            >
              -- View More --
            </motion.button>
          </div>
        </div>
        <div
          className="flex-grow rounded-3xl bg-cover bg-center p-10 w-[calc(70vw)] h-[calc(70vh)]"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
      </div>
    </section>
  );
}

export default About;
