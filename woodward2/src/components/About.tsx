import { useEffect, useRef } from "react";
import Gallerybento from "./Gallerybento";
import backgroundImage from "../assets/waterfall.jpg";
import greenbg from "../assets/greenbg.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Room1 from "../assets/landingpage/DSC02935.jpg";
import BookingBanner from "../assets/landingpage/DSC02961.jpg";
import templeinmg from "../assets/galleryimages/property/temple.jpg";

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
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>Hotel in Kasol - Woodward II by 4 Wildflower Hospitality</title>
          <meta
            name="description"
            content="Experience the best budget hotel in Kasol at Woodward II. Mountain view rooms, modern amenities, near Parvati Valley. Book your Himalayan retreat today!"
          />
          <meta
            name="keywords"
            content="hotel in Kasol, Woodward 2 Kasol, budget hotel Kasol, hotels near Parvati Valley, Kasol accommodation, Himachal Pradesh hotels"
          />
          <link rel="canonical" href="https://www.4wildflowerhospitality.com/" />
          
          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hotel in Kasol - Woodward II by 4 Wildflower Hospitality" />
          <meta
            property="og:description"
            content="Experience the best budget hotel in Kasol at Woodward II. Mountain view rooms, modern amenities, near Parvati Valley."
          />
          <meta property="og:url" content="https://www.4wildflowerhospitality.com/" />
          <meta property="og:image" content={backgroundImage} />
          
          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Hotel in Kasol - Woodward II by 4 Wildflower Hospitality" />
          <meta
            name="twitter:description"
            content="Experience the best budget hotel in Kasol at Woodward II. Mountain view rooms, modern amenities, near Parvati Valley."
          />
          
          {/* Structured Data - Hotel Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Woodward II by 4 Wildflower Hospitality",
              "description": "A cozy Himalayan retreat in Kasol offering mountain view rooms, modern amenities, and proximity to Parvati Valley attractions.",
              "url": "https://www.4wildflowerhospitality.com/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kasol",
                "addressRegion": "Himachal Pradesh",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.0103",
                "longitude": "77.3145"
              },
              "image": backgroundImage,
              "priceRange": "$$",
              "starRating": {
                "@type": "Rating",
                "ratingValue": "4"
              }
            })}
          </script>
        </Helmet>

        {/* Hero Section - Optimized H1 */}
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
              {/* SEO-optimized H1 with primary keywords */}
              <h1 className="font-NBI py-10 px-5 text-3xl sm:text-5xl lg:text-7xl text-shadow-md">
                Best Hotel in Kasol – Woodward II by 4 Wildflower Hospitality
              </h1>
              <p className="font-NBI p-5 text-xl sm:text-2xl">
                Experience a budget-friendly Himalayan retreat in the heart of Kasol, Himachal Pradesh. 
                Nestled in the scenic Parvati Valley with mountain views, modern amenities, and easy access 
                to trekking trails, temples, and local attractions. Your perfect escape awaits at Woodward 2.
              </p>
              <div className="flex justify-center p-5" onClick={BookNow}>
                <button 
                  className="px-6 py-3 rounded text-lg sm:text-xl text-white outline outline-2 outline-white hover:outline-none hover:text-ltgreen hover:bg-dkbrown transition duration-300"
                  aria-label="Book your stay at Woodward II Kasol"
                >
                  Book Your Stay Now
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
            role="img"
            aria-label="Deluxe room with mountain view at Woodward II Kasol"
          ></div>
          <div
            className="flex-grow w-full lg:w-[45vw] flex flex-col justify-center px-5 sm:px-10 opacity-0"
            ref={addToRefs}
          >
            {/* H2 with keywords */}
            <h2 className="text-left text-3xl sm:text-4xl lg:text-5xl">
              Comfortable Rooms in Kasol with Mountain Views
            </h2>
            <p className="pt-5 text-left text-lg sm:text-xl lg:text-2xl">
              Our thoughtfully designed rooms at Woodward 2 offer the perfect blend of comfort and nature. 
              Each room features cozy interiors, clean modern bathrooms, comfortable bedding, and stunning 
              Himalayan mountain views. Whether you're a solo traveler seeking peace, a couple on a romantic 
              getaway, a family exploring the valley, or an adventure group planning treks, we have the 
              perfect accommodation for you. Enjoy complimentary Wi-Fi, 24/7 hot water, room service, and 
              easy access to Kasol's cafes, markets, and trekking routes.
            </p>
            <div className="flex justify-start mt-5">
              <button 
                onClick={Room}
                className="py-2 px-5 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300"
                aria-label="Explore room types and amenities"
              >
                Explore Our Rooms
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div
          className="px-5 sm:px-20 py-10 text-center opacity-0"
          ref={addToRefs}
        >
          <h2 className="p-5 text-3xl sm:text-4xl">
            Photo Gallery – See Woodward II Kasol
          </h2>
          <p className="text-lg sm:text-xl pb-5">
            Browse through our collection of property photos featuring cozy rooms, scenic mountain views, 
            our inviting restaurant, reception area, and the beautiful surroundings of Kasol.
          </p>
          <Gallerybento />
          <div className="flex justify-center p-5 py-10">
            <button 
              onClick={Gallery}
              className="px-6 py-3 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300"
              aria-label="View complete photo gallery"
            >
              View Complete Gallery
            </button>
          </div>
        </div>

        {/* Local Attractions Section */}
        <div className="p-5 sm:p-20 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
          <div
            className="flex-grow rounded-3xl bg-cover bg-center w-full h-60 sm:h-80 lg:w-[45vw] lg:h-[calc(70vh)]"
            style={{ backgroundImage: `url(${templeinmg})` }}
            ref={addToRefs}
            role="img"
            aria-label="Bhagwan Narayana Temple near Woodward II Kasol"
          ></div>
          <div
            className="flex-grow w-full lg:w-[45vw] flex flex-col justify-center px-5 sm:px-10 opacity-0"
            ref={addToRefs}
          >
            <h2 className="text-left text-3xl sm:text-4xl lg:text-5xl">
              Top Attractions Near Woodward II Kasol
            </h2>
            <p className="pt-5 text-left text-lg sm:text-xl lg:text-2xl">
              Woodward 2 is perfectly located for exploring Kasol's best attractions. The historic 
              Bhagwan Narayana Temple is just 10 meters away, offering a spiritual start to your day. 
              Enjoy easy access to popular trekking routes including Kheerganga Trek, Tosh Village, 
              Malana, and Chalal. Explore the vibrant Kasol Market, riverside cafes along the Parvati River, 
              and scenic nature walks. The famous Manikaran Sahib is only 4 km away, while Tosh and 
              Malana villages offer authentic Himalayan culture within short drives.
            </p>
            <div className="flex justify-start mt-5">
              <button 
                onClick={LA}
                className="py-2 px-5 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300"
                aria-label="Discover nearby attractions and things to do"
              >
                Discover Nearby Attractions
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
            role="img"
            aria-label="Woodward II hotel property in Kasol"
          ></div>
          <div
            className="flex-grow w-full lg:w-[45vw] flex flex-col justify-center px-5 sm:px-10 opacity-0"
            ref={addToRefs}
          >
            <h2 className="text-right text-3xl sm:text-4xl lg:text-5xl">
              Easy Booking & Guest Policies
            </h2>
            <p className="pt-5 text-right text-lg sm:text-xl lg:text-2xl">
              Book your stay at Woodward 2 with confidence. We offer flexible check-in and check-out 
              times, transparent pricing with no hidden charges, advance booking discounts, and 
              guest-friendly cancellation policies. Our team is available 24/7 to assist with bookings, 
              special requests, local travel arrangements, and trek planning. Whether you're booking for 
              a weekend getaway or an extended Himalayan adventure, we ensure a smooth and hassle-free 
              reservation experience.
            </p>
            <div className="flex justify-end mt-5">
              <button 
                onClick={Bookings}
                className="py-2 px-5 rounded text-lg sm:text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300"
                aria-label="View booking policies and terms"
              >
                View Booking Policies
              </button>
            </div>
          </div>
        </div>

        {/* Additional SEO Content Section */}
        <div className="px-5 sm:px-20 py-10 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center pb-5">
            Why Choose Woodward II for Your Kasol Stay?
          </h2>
          <div className="text-lg sm:text-xl space-y-4">
            <p>
              <strong>Prime Location:</strong> Situated in the heart of Kasol, Woodward 2 offers unbeatable 
              access to the town's best cafes, markets, and the serene Parvati River. Step outside and 
              immerse yourself in the vibrant culture and natural beauty of Himachal Pradesh.
            </p>
            <p>
              <strong>Budget-Friendly Comfort:</strong> Experience quality accommodation without breaking 
              the bank. Our competitive rates include modern amenities, complimentary breakfast options, 
              and exceptional hospitality that makes every guest feel at home.
            </p>
            <p>
              <strong>Adventure Hub:</strong> Whether you're planning treks to Kheerganga, exploring nearby 
              villages like Tosh and Malana, or simply relaxing by the river, Woodward 2 serves as your 
              perfect base camp for Himalayan adventures.
            </p>
            <p>
              <strong>Local Expertise:</strong> Our knowledgeable staff can help you plan itineraries, 
              arrange local transport, recommend hidden gems, and ensure you experience the authentic 
              Kasol that travelers love.
            </p>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default About;
