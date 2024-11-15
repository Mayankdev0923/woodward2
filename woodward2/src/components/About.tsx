import img1 from "../assets/Heroimg.jpg";
import Gallerybento from "./Gallerybento";
import { motion } from "framer-motion";
import backgroundImage from "../assets/river.jpg";
import greenbg from "../assets/greenbg.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet,HelmetProvider } from "react-helmet-async";

function About() {
  const navigate = useNavigate();
  const BookNow = () => navigate("/");
  const Room = () => navigate("/Room");
  const Gallery = () => navigate("/Gallery");
  const Bookings = () => navigate("/");


  return (
    <HelmetProvider>
      <section
        className={
          "text-base sm:text-lg items-center ease-in-out bg-ltgreen text-dkkbrown font-MTreg"
        }
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Home - Woodward2</title>
        </Helmet>
        {/* Hero Section */}
        <div
          className="flex justify-center rounded bg-cover bg-bottom filter brightness-100 text-white"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="w-full h-full backdrop-blur-xl sm:backdrop-blur-sm lg:backdrop-blur-none flex justify-center items-center">
            {/* Add a dark overlay behind the text */}
            <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
            {/* Dark overlay */}
            <div className="relative py-20 sm:py-40 w-full max-w-screen-lg px-5 text-center z-10">
              {" "}
              {/* z-10 to ensure text is on top of overlay */}
              <h1 className="font-NBI py-10 px-5 text-3xl sm:text-5xl lg:text-7xl text-shadow-md">
                Welcome to Woodward-2, Your Himalayan Retreat in Kasol
              </h1>
              <p className="font-NBI p-5 text-xl sm:text-2xl">
                Nestled amidst the pristine mountains and lush greenery of Kasol,
                Himachal Pradesh, Woodward 2 is more than just a place to
                stay—it's an experience designed to connect you with nature,
                adventure, and serenity. Our boutique hotel offers a blend of
                rustic charm and modern comforts, making it a sanctuary for
                travelers seeking tranquility and inspiration in the heart of the
                Himalayas.
              </p>
              <div className="flex justify-center p-5" onClick={BookNow}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="px-6 py-3 rounded text-lg sm:text-xl text-white outline outline-2 outline-white hover:outline-none hover:text-ltgreen hover:bg-dkbrown transition duration-300"
                >
                  -- Book Now --
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        {/* Rooms & Amenities Section */}
        <div className="p-10 sm:p-20 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div
            className="flex-grow rounded-3xl bg-cover bg-center w-full h-60 sm:h-80 lg:w-[45vw] lg:h-[calc(70vh)]"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div className="flex-grow w-full lg:w-[45vw] flex flex-col justify-center px-5 sm:px-10">
            <h2 className="text-left text-3xl sm:text-4xl lg:text-5xl">
              Rooms & Amenities:
              <br />
              Comfort with a Touch of Nature
            </h2>
            <p className="pt-5 text-left text-lg sm:text-xl lg:text-2xl">
              At Woodward 2, our rooms are designed to be a serene retreat, each
              blending cozy interiors with breathtaking mountain views. We offer
              various room categories to suit the needs of solo travelers,
              couples, families, and adventure groups alike.
            </p>
            <div className="flex justify-start mt-5" onClick={Room}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="py-2 px-5 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300"
              >
                -- Know More --
              </motion.button>
            </div>
          </div>
        </div>
        {/* Gallery Section */}
        <div className="px-5 sm:px-20 py-20 text-center">
          <h2 className="p-5 text-3xl sm:text-4xl">Visit Our Gallery</h2>
          <Gallerybento />
          <div className="flex justify-center p-5 py-10" onClick={Gallery}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-3 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300"
            >
              -- View More --
            </motion.button>
          </div>
        </div>
        {/* Bookings & Policies Section */}
        <div className="px-5 sm:px-20 py-10 sm:py-20 flex flex-col lg:flex-row-reverse items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div
            className="flex-grow rounded-3xl bg-cover bg-center w-full h-60 sm:h-80 lg:w-[45vw] lg:h-[calc(70vh)]"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div className="flex-grow w-full lg:w-[45vw] flex flex-col justify-center px-5 sm:px-10">
            <h2 className="text-right text-3xl sm:text-4xl lg:text-5xl">
              Bookings & Policies
            </h2>
            <p className="pt-5 text-right text-lg sm:text-xl lg:text-2xl">
              Our flexible booking options and guest-centered policies ensure a
              smooth and reliable experience for the customers.
            </p>
            <div className="flex justify-end mt-5" onClick={Bookings}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="py-2 px-5 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300"
              >
                -- View More --
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default About;
