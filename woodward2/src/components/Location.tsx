import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useInView } from "react-intersection-observer";

function Location() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [paraRef, paraInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <HelmetProvider>
      <div
        className="bg-ltgreen"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Reach Us</title>
        </Helmet>
        {/* Title Section */}
        <div
          ref={titleRef}
          className={`w-full h-[10%] py-10 flex flex-col justify-center text-dkbrown items-center space-y-5 transition-transform duration-700 ${
            titleInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-4xl md:text-7xl font-MTreg">Reach us</span>
        </div>

        {/* Paragraph Section */}
        <div
          ref={paraRef}
          className={`font-NBI w-[80%] md:w-[70%] p-5 md:p-10 text-center text-xl md:text-2xl mx-auto transition-transform duration-700 delay-200 ${
            paraInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
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

        {/* Contact Section */}
        <div
          ref={infoRef}
          className={`flex flex-col md:flex-row justify-center items-center space-y-10 md:space-x-10 md:space-y-0 p-10 md:p-20 transition-transform duration-700 delay-400 ${
            infoInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Address Box */}
          <div className="flex flex-col justify-center items-center w-full md:w-[40vw] h-[70vh] p-5 md:p-10 rounded-3xl space-y-5">
            <div className="bg-greenish border-4 rounded-2xl w-full md:w-[80%] h-[50%] p-5 md:p-10 flex flex-col justify-center text-lg md:text-xl font-NBI text-dkkbrown">
              <p>
                Hotel Woodward 2, near Narayan temple,
                <br />
                tehsil Kasol, Jari, Himachal Pradesh 175105
              </p>
              <p>
                Phone No:
                <br />
                <a
                  className="transition-all duration-300 ease-in-out hover:underline"
                  href="tel:9317707539"
                >
                  9317707539
                </a>
                ,&nbsp;
                <a
                  className="transition-all duration-300 ease-in-out hover:underline"
                  href="tel:8219391994"
                >
                  8219391994
                </a>
                ,&nbsp;
                <br />
                <a
                  className="transition-all duration-300 ease-in-out hover:underline"
                  href="tel:9728020888"
                >
                  9728020888
                </a>
                ,&nbsp;
                <a
                  className="transition-all duration-300 ease-in-out hover:underline"
                  href="tel:9215229400"
                >
                  9215229400
                </a>
              </p>
            </div>
            <div className="bg-dkbrown hover:bg-dkkbrown text-lg md:text-xl rounded-lg w-full md:w-[80%] h-[10%] text-center flex justify-center items-center text-white">
              <a
                href="https://www.google.com/maps/place/Woodward+2+by+4wildflower/@32.0092829,77.3125712,19.04z/data=!4m6!3m5!1s0x39045d777849c18f:0x4def134125e0432c!8m2!3d32.0092886!4d77.3125674!16s%2Fg%2F11ltnny40b?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                Get Directions on Google Maps
              </a>
            </div>
            <div className="bg-dkbrown hover:bg-dkkbrown text-lg md:text-xl rounded-lg w-full md:w-[80%] h-[10%] text-center flex justify-center items-center text-white">
              <a
                href="https://www.google.com/travel/hotels/s/H63v37QgZa5jQ8XC6"
                target="_blank"
              >
                Find Us on Google Travel
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div
            className="w-full md:w-[40vw] h-[70vh] p-5 md:p-10 bg-greenish border-4 border-darkgreen rounded-3xl filter"
            style={{
              backgroundImage: `url(${greenbg})`,
              backgroundSize: "cover",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845.8038053720056!2d77.31149056946418!3d32.0092833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39045d777849c18f%3A0x4def134125e0432c!2sWoodward%202%20by%204wildflower!5e0!3m2!1sen!2sin!4v1730879556172!5m2!1sen!2sin"
              className="w-full h-full rounded-3xl"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Location;
