import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Amenities() {
  return (
    <HelmetProvider>
      <div
        className="w-full min-h-screen flex flex-col justify-center items-center space-y-2 bg-ltgreen text-dkbrown bg-cover bg-center lg:pt-4"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Amenities</title>
        </Helmet>
        
        <div className="w-[90%] lg:w-[80%] space-y-0 lg:space-y-1 px-4 animate-slideIn">
          <div className="w-full h-[20vh] font-MTreg flex justify-center items-center text-5xl md:text-6xl lg:text-7xl text-center animate-slideIn">
            Services & Amenities
          </div>
          <span className="text-lg md:text-2xl text-dkbrown w-full lg:w-[70%] font-NBI text-center mx-auto px-4 animate-slideIn">
            <p>
              At Woodward 2, our rooms are designed to be a serene retreat, each
              blending cozy interiors with breathtaking mountain views. We offer
              various room categories to suit the needs of solo travelers,
              couples, families, and adventure groups alike. Each room is
              tastefully decorated with local art, wooden furnishings, and
              thoughtful amenities, ensuring a restful and memorable stay in
              Kasol.
            </p>
          </span>
        </div>

        {/* Amenities Section */}
        <div className="w-full py-10 lg:py-20 px-10 lg:px-20 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 justify-center animate-slideIn">
          <div className="w-full p-4 animate-slideIn">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <span className="text-2xl md:text-3xl xl:text-4xl">• Complimentary Wi-Fi</span>
              <p className="text-lg md:text-xl">
                Stay connected with free high-speed internet throughout your stay.
              </p>
            </div>
          </div>
          <div className="w-full p-4 animate-slideIn">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <span className="text-2xl md:text-3xl xl:text-4xl">• 24/7 Room Service</span>
              <p className="text-lg md:text-xl">
                Savor our menu anytime, day or night, with round-the-clock room service.
              </p>
            </div>
          </div>
          <div className="w-full p-4 animate-slideIn">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <span className="text-2xl md:text-3xl xl:text-4xl">• Tea and Coffee Maker</span>
              <p className="text-lg md:text-xl">
                Refreshments are available in-room for a cozy start to your day.
              </p>
            </div>
          </div>
          <div className="w-full p-4 animate-slideIn">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <span className="text-2xl md:text-3xl xl:text-4xl">• Housekeeping Services</span>
              <p className="text-lg md:text-xl">
                Daily housekeeping ensures your room stays fresh and comfortable.
              </p>
            </div>
          </div>
        </div>

        {/* Special Requests and Booking Options Section */}
        <div className="w-full max-w-screen-xl px-4 pb-4 md:pb-8 font-MTreg space-y-10 lg:space-y-0 lg:flex-row lg:flex-wrap justify-center animate-slideIn">
          <div className="w-full px-6 animate-slideIn">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dkkbrown text-center mb-4">
              Special Requests and Personal Touches
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-dkkbrown text-center mb-6">
              We understand that every guest is unique. Our team is happy to accommodate special requests, whether it’s arranging for an extra bed, creating a romantic setup, or organizing a mountain-view breakfast on your balcony.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-dkkbrown text-center">
              With our rooms at Woodward 2, we aim to offer not just a place to stay but a home in the mountains, where every detail reflects our dedication to comfort and nature.
            </p>
          </div>
          <div className="w-full px-6 py-4 animate-slideIn">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dkkbrown text-center mb-8">
              Booking Options at Woodward 2
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-dkkbrown text-center mb-8">
              At Woodward 2, we aim to make the booking process as convenient and flexible as possible, whether you prefer to reserve your stay directly through us or use your favorite travel platforms. Explore our range of booking options to secure your place in the heart of Kasol:
            </p>
            {/* Booking Options List */}
            <div className="space-y-8 animate-slideIn">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-dkkbrown mb-4">
                  1. Direct Booking Through Our Website
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-lg sm:text-xl lg:text-2xl text-dkkbrown">
                  <li><strong>Exclusive Offers:</strong> Booking directly through our website gives you access to exclusive offers, promotions, and the best available rates, making your stay even more rewarding.</li>
                  <li><strong>Seamless Online Booking:</strong> Use our secure online booking system to choose your preferred room type, dates, and any additional options like breakfast or in-room amenities. A confirmation email will be sent to you as soon as your booking is complete.</li>
                  <li><strong>Flexible Payment Options:</strong> We offer various payment options to ensure a smooth transaction experience, including credit/debit cards, bank transfers, and digital wallet payments.</li>
                </ul>
              </div>
              {/* Additional sections follow the same pattern */}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Amenities;
