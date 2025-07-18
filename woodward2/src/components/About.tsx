import { useEffect, useRef } from "react";
import Gallerybento from "./Gallerybento";
import backgroundImage from "../assets/waterfall.jpg";
import greenbg from "../assets/greenbg.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Room1 from "../assets/landingpage/DSC02935.jpg"
import BookingBanner from "../assets/landingpage/DSC02961.jpg"
import templeinmg from "../assets/galleryimages/property/temple.jpg"

function About() {
  const navigate = useNavigate();
  const BookNow = () => navigate("/Book");
  const Room = () => navigate("/Room");
  const LA = () => navigate("/LocalAttractions");
  const Gallery = () => navigate("/Gallery");
  const Bookings = () => navigate("/BookingPolicies");

  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <HelmetProvider>
      <section
        className="text-base sm:text-lg items-center bg-ltgreen text-dkkbrown font-MTreg"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Home - 4WIldflower</title>
        </Helmet>

        {/* Hero Section */}
        <div
          className="flex justify-center rounded bg-cover bg-center filter brightness-100 text-white"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="w-full h-full backdrop-blur-sm sm:backdrop-blur-sm lg:backdrop-blur-sm flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-0"></div>
            <div
              className="relative py-20 sm:py-40 w-full max-w-screen-lg px-5 text-center z-10 opacity-0"
              ref={addToRefs}
            >
              <h1 className="font-NBI py-10 px-5 text-3xl sm:text-5xl lg:text-7xl text-shadow-md">
                Welcome to 4Wildflower Hospitality, Your Himalayan Retreat in Kasol
              </h1>
              <p className="font-NBI p-5 text-xl sm:text-2xl">
                Nestled amidst the pristine mountains and lush greenery of
                Kasol, Himachal Pradesh, Woodward 2 is more than just a place to
                stay—it's an experience designed to connect you with nature,
                adventure, and serenity.
              </p>
              <div className="flex justify-center p-5" onClick={BookNow}>
                <button className="px-6 py-3 rounded text-lg sm:text-xl text-white outline outline-2 outline-white hover:outline-none hover:text-ltgreen hover:bg-dkbrown transition duration-300">
                  -- Book Now --
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms & Amenities Section */}
        <div className="p-5 sm:p-20 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div
            className="flex-grow rounded-3xl bg-cover bg-center w-full h-60 sm:h-80 lg:w-[45vw] lg:h-[calc(70vh)]"
            style={{ backgroundImage: `url(${Room1})` }}
            ref={addToRefs}
          ></div>
          <div
            className="flex-grow w-full lg:w-[45vw] flex flex-col justify-center px-5 sm:px-10 opacity-0"
            ref={addToRefs}
          >
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
              <button className="py-2 px-5 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300">
                -- Know More --
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div
          className="px-5 sm:px-20 py-10 text-center opacity-0"
          ref={addToRefs}
        >
          <h2 className="p-5 text-3xl sm:text-4xl">----Visit Our Gallery----</h2>
          <Gallerybento />
          <div className="flex justify-center p-5 py-10" onClick={Gallery}>
            <button className="px-6 py-3 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300">
              -- View More --
            </button>
          </div>
        </div>

        {/*Local Attractions*/}
        <div className="p-5 sm:p-20 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div
            className="flex-grow rounded-3xl bg-cover bg-center w-full h-60 sm:h-80 lg:w-[45vw] lg:h-[calc(70vh)]"
            style={{ backgroundImage: `url(${templeinmg})` }}
            ref={addToRefs}
          ></div>
          <div
            className="flex-grow w-full lg:w-[45vw] flex flex-col justify-center px-5 sm:px-10 opacity-0"
            ref={addToRefs}
          >
            <h2 className="text-left text-3xl sm:text-4xl lg:text-5xl">
              Local Attractions:
              <br />
              Attractions near woodward 2
            </h2>
            <p className="pt-5 text-left text-lg sm:text-xl lg:text-2xl">
              Woodward 2 is located near various visiting spots. Like Bhagwan Narayana Temple Located just 10 metres away from Woodward2.
            </p>
            <div className="flex justify-start mt-5" onClick={LA}>
              <button className="py-2 px-5 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300">
                -- Know More --
              </button>
            </div>
          </div>
        </div>

        {/* Bookings & Policies Section */}
        <div className="px-5 sm:px-20 py-10 sm:py-20 flex flex-col lg:flex-row-reverse items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div
            className="flex-grow rounded-3xl bg-cover bg-center w-full h-60 sm:h-80 lg:w-[45vw] lg:h-[calc(70vh)]"
            style={{ backgroundImage: `url(${BookingBanner})` }}
            ref={addToRefs}
          ></div>
          <div
            className="flex-grow w-full lg:w-[45vw] flex flex-col justify-center px-5 sm:px-10 opacity-0"
            ref={addToRefs}
          >
            <h2 className="text-right text-3xl sm:text-4xl lg:text-5xl">
              Bookings & Policies
            </h2>
            <p className="pt-5 text-right text-lg sm:text-xl lg:text-2xl">
              Our flexible booking options and guest-centered policies ensure a
              smooth and reliable experience for the customers.
            </p>
            <div className="flex justify-end mt-5" onClick={Bookings}>
              <button className="py-2 px-5 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300">
                -- View More --
              </button>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default About;
