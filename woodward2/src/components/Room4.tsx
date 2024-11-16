import img1 from "../assets/Heroimg.jpg";
import { motion } from "framer-motion";
import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function Room4() {
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <>
        <div
          className="w-full flex justify-center items-center text-dkkbrown bg-ltgreen"
          style={{
            backgroundImage: `url(${greenbg})`,
            backgroundSize: "cover",
          }}
        >
          <Helmet>
            <title>Superior Room with Balcony</title>
          </Helmet>
          <div className="flex justify-center flex-col items-center space-y-10 p-10 md:p-20 w-full h-full">
            <div className="flex justify-center items-center text-3xl md:text-5xl rounded-3xl px-5 py-4 border-2 border-dkkbrown w-full max-w-4xl motion-safe:animate-slideIn">
              <div className="border-2 w-full text-center rounded-2xl border-dkkbrown px-7 py-5 font-MTreg">
                -- Superior Room with Balcony --
              </div>
            </div>
            <div className="flex flex-col md:flex-row p-5 h-[0px] md:h-[550px] md:p-20 justify-between space-y-10 md:space-y-0 items-center w-full max-w-8xl">
              <div
                className="w-full md:w-[45%] h-[0px] md:h-[550px] bg-cover bg-center rounded-3xl motion-safe:animate-slideIn"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div className="flex-grow w-full md:w-[45%] flex flex-col justify-center p-5 md:p-10">
                <h2 className="text-3xl md:text-5xl font-MTreg motion-safe:animate-slideIn">
                  Description:
                </h2>
                <p className="p-5 text-lg md:text-2xl motion-safe:animate-slideIn">
                  The Superior Room provides an expansive living space with a
                  private balcony to enjoy the crisp mountain air and sweeping
                  views. With its cozy seating area, it’s an excellent choice
                  for guests who enjoy extra space to relax.
                  <br />
                  <br />
                  <b>Amenities:</b> King-sized bed or twin beds, balcony
                  seating, complimentary high-speed Wi-Fi, flat-screen TV,
                  minibar, coffee/tea maker, and a spacious en-suite bathroom
                  with luxury bath amenities.
                  <br />
                  <b>Ideal For:</b> Couples, small families.
                  <br />
                  <b>Capacity:</b> 2-3 guests (extra bed available upon
                  request).
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

export default Room4;
