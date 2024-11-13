import img1 from "../assets/Heroimg.jpg";
import Gallerybento from "./Gallerybento";
import { motion } from "framer-motion";
import backgroundImage from "../assets/valley.jpg";
import greenbg from "../assets/greenbg.jpg";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const BookNow = () => {
    navigate("/");
  };
  const Room = () => {
    navigate("/Room");
  };
  const Gallery = () => {
    navigate("/Gallery");
  };
  const Bookings = () => {
    navigate("/");
  };

  return (
    <section
      className="text-lg  items-center  ease-in-out bg-ltgreen text-dkkbrown font-MTreg"
      style={{ backgroundImage: `url(${greenbg})` }}
    >
      <div
        className="flex justify-center rounded bg-cover bg-center filter brightness-75 text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="py-40 justify-center items-center w-[90vh]">
          <div className="font-NBI py-10 px-10 text-center text-7xl">
            Welcome to Woodward-2, Your Himalayan Retreat in Kasol
          </div>
          <div className="font-NBI p-10 text-center text-2xl">
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
          <div
            className="flex justify-center items-center p-5 "
            onClick={BookNow}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 rounded text-xl text-white outline outline-2 outline-white hover:outline-none hover:text-white hover:bg-brownish transition-duration-900"
            >
              -- Book Now --
            </motion.button>
          </div>
        </div>
      </div>

      <div className=" p-20 flex justify-between space-x-10 items-center">
        <div
          className="flex-grow rounded-3xl bg-cover bg-center p-10 w-[calc(70vw)] h-[calc(70vh)]"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        <div className="flex-grow w-[70vw] h-[70vh] flex flex-col justify-center p-10">
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
          <div className="flex justify-start px-20" onClick={Room}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="py-3 px-5 rounded text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition-duration-900"
            >
              -- Know More --
            </motion.button>
          </div>
        </div>
      </div>

      <div className="px-20 py-40 justify-center items-start">
        <h2 className="p-5 text-center text-4xl">Visit Our Gallery</h2>
        <Gallerybento />
        <div
          className="flex justify-center items-center p-5 py-10 "
          onClick={Gallery}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-5 rounded text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition-duration-900"
          >
            -- View More --
          </motion.button>
        </div>
      </div>

      <div className=" py-40 px-20 flex justify-between space-x-10 items-center ">
        <div className="flex-grow w-[70vw] h-[70vh] p-10 flex flex-col justify-center">
          <h2 className="p-10 text-right text-5xl">Bookings & Policies</h2>
          <p className="p-10 text-right text-2xl">
            Our flexible booking options and guest-centered policies ensure a
            smooth and reliable experience for the customers.
          </p>
          <div className="flex justify-end px-20" onClick={Bookings}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 rounded text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition-duration-900"
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
