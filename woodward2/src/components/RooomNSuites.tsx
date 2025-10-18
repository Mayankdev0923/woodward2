import { useNavigate } from "react-router-dom";
import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import getDocumentFieldValue from "./FirebaseFetch";
import { useEffect, useState } from "react";
import superiorimage from "../assets/galleryimages/rooms/DSC02917.jpg";
import executiveimage from "../assets/galleryimages/rooms/DSC02936.jpg";

function RoomNSuites() {
  const navigate = useNavigate();
  // State to store prices
  const [prices, setPrices] = useState({
    Executive: null,
    Superior: null,
  });

  useEffect(() => {
    const fetchRoomPrices = async () => {
      const Executive_Price = await getDocumentFieldValue(
        "rooms",
        "Executive_Room",
        "Price"
      );
      const Superior_Price = await getDocumentFieldValue(
        "rooms",
        "Superior_Room",
        "Price"
      );

      // Update state with fetched prices
      setPrices({
        Executive: Executive_Price,
        Superior: Superior_Price,
      });
    };

    fetchRoomPrices();
  }, []);

  return (
    <HelmetProvider>
      <>
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>Hotel Rooms in Kasol - Executive & Superior Rooms at Woodward II</title>
          <meta
            name="description"
            content="Book comfortable rooms at Woodward II Kasol. Executive rooms near garden, Superior rooms with mountain views. Starting from ₹2500/night. Modern amenities & cozy interiors."
          />
          <meta
            name="keywords"
            content="rooms in Kasol, Woodward 2 rooms, Executive room Kasol, Superior room Kasol, hotel rooms Parvati Valley, budget rooms Kasol, mountain view rooms"
          />
          <link rel="canonical" href="https://www.4wildflowerhospitality.com/Room" />
          
          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hotel Rooms in Kasol - Executive & Superior Rooms at Woodward II" />
          <meta
            property="og:description"
            content="Comfortable rooms with modern amenities at Woodward II Kasol. Executive and Superior categories available with mountain views."
          />
          <meta property="og:url" content="https://www.4wildflowerhospitality.com/Room" />
          <meta property="og:image" content={superiorimage} />
          
          {/* Product Schema for Rooms */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Hotel Rooms at Woodward II Kasol",
              "description": "Available room types at Woodward 2 hotel in Kasol, Himachal Pradesh",
              "itemListElement": [
                {
                  "@type": "Product",
                  "position": 1,
                  "name": "Executive Room - Woodward II Kasol",
                  "description": "Eco-friendly room with garden view, wooden furnishings, modern amenities, and cozy mountain ambiance",
                  "image": executiveimage,
                  "offers": {
                    "@type": "Offer",
                    "price": prices.Executive || "2500",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://www.4wildflowerhospitality.com/Room1"
                  }
                },
                {
                  "@type": "Product",
                  "position": 2,
                  "name": "Superior Room - Woodward II Kasol",
                  "description": "Luxurious spacious room with stunning mountain views, premium amenities, and modern comfort",
                  "image": superiorimage,
                  "offers": {
                    "@type": "Offer",
                    "price": prices.Superior || "3000",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://www.4wildflowerhospitality.com/Room2"
                  }
                }
              ]
            })}
          </script>
          
          {/* Breadcrumb Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.4wildflowerhospitality.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Rooms & Suites",
                  "item": "https://www.4wildflowerhospitality.com/Room"
                }
              ]
            })}
          </script>
        </Helmet>

        <div
          className="w-full text-lg text-center bg-ltgreen py-10 bg-repeat bg-hwite flex flex-col justify-center items-center space-y-10 overflow-hidden"
          style={{
            backgroundImage: `url(${greenbg})`,
          }}
        >
          {/* Header section with SEO-optimized content */}
          <div className="w-full flex flex-col justify-center items-center space-y-5 px-4 md:px-10">
            <h1 className="text-5xl md:text-7xl font-MTreg text-dkbrown motion-safe:animate-slideIn">
              Comfortable Rooms in Kasol
            </h1>
            <div className="text-xl md:text-2xl text-dkbrown w-[80%] md:w-[60%] font-NBI motion-safe:animate-slideIn">
              <p>
                At Woodward 2 in Kasol, our thoughtfully designed rooms serve as serene retreats 
                combining cozy Himalayan interiors with breathtaking mountain and valley views. 
                We offer two premium room categories—Executive and Superior—to perfectly suit the 
                needs of solo travelers, romantic couples, families exploring the Parvati Valley, 
                and adventure groups planning treks. Each room features tasteful local Himachali 
                art, handcrafted wooden furnishings, comfortable bedding, modern bathrooms with 
                24/7 hot water, complimentary Wi-Fi, and thoughtful amenities ensuring a restful, 
                memorable stay in the heart of Kasol's pristine natural beauty.
              </p>
            </div>
          </div>

          {/* Additional Features Section */}
          <div className="w-[80%] md:w-[60%] text-center space-y-4 motion-safe:animate-slideIn">
            <h2 className="text-3xl md:text-4xl font-bold text-dkbrown">
              What Makes Our Rooms Special
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-lg">
              <div className="p-4 bg-white bg-opacity-80 rounded-xl">
                <p className="font-semibold">Mountain Views</p>
                <p>Stunning Himalayan vistas from every room</p>
              </div>
              <div className="p-4 bg-white bg-opacity-80 rounded-xl">
                <p className="font-semibold">Modern Amenities</p>
                <p>Wi-Fi, hot water, tea/coffee maker included</p>
              </div>
              <div className="p-4 bg-white bg-opacity-80 rounded-xl">
                <p className="font-semibold">Local Design</p>
                <p>Authentic Himachali wooden interiors</p>
              </div>
            </div>
          </div>

          {/* Room Cards */}
          <div className="w-full flex flex-wrap justify-center items-center gap-10 px-10">
            {[
              {
                id: 1,
                name: "Executive Room",
                shortDesc: "Eco-friendly garden view room with modern amenities and traditional Himachali decor.",
                fullDesc: "Our Executive Room provides an eco-friendly, comfortable stay with a peaceful garden view. Perfect for solo travelers and couples seeking a cozy mountain retreat near Kasol's attractions.",
                image: executiveimage,
                price: prices.Executive,
                features: ["Garden View", "Queen/King Bed", "Wooden Interiors", "Free Wi-Fi", "24/7 Hot Water"],
              },
              {
                id: 2,
                name: "Superior Room",
                shortDesc: "Spacious luxury room with panoramic mountain views and premium furnishings.",
                fullDesc: "The Superior Room offers luxurious space with breathtaking panoramic views of the Parvati Valley and Himalayan peaks. Ideal for families and groups seeking extra comfort and stunning scenery.",
                image: superiorimage,
                price: prices.Superior,
                features: ["Mountain View", "Large Bed", "Premium Amenities", "Balcony", "Tea/Coffee Maker"],
              },
            ].map((room) => (
              <article
                key={room.id}
                className="max-w-[90%] md:w-[40%] h-auto border-[5px] border-brownish rounded-[3rem] md:rounded-[5rem] flex flex-col py-20 px-5 justify-start items-center space-y-7 motion-safe:animate-slideIn bg-white bg-opacity-90"
                itemScope
                itemType="https://schema.org/Product"
              >
                {/* Room Image */}
                <div
                  className="w-[80%] lg:h-[400px] rounded-2xl shadow-lg"
                  style={{
                    backgroundImage: `url(${room.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "3rem",
                  }}
                  role="img"
                  aria-label={`${room.name} at Woodward II Kasol with ${room.id === 1 ? 'garden' : 'mountain'} view`}
                  itemProp="image"
                ></div>

                {/* Room Details */}
                <div className="w-[80%] space-y-4 flex flex-col justify-center items-center">
                  <h2 className="text-3xl font-MTreg" itemProp="name">
                    {room.name}
                  </h2>
                  
                  <p className="text-lg text-center" itemProp="description">
                    {room.fullDesc}
                  </p>

                  {/* Features List */}
                  <div className="w-full text-center">
                    <p className="font-semibold mb-2">Room Features:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {room.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dkbrown text-white rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price with Schema */}
                  <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="INR" />
                    <meta itemProp="price" content={room.price || "0"} />
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                    <p className="text-4xl font-NBI text-dkbrown font-bold">
                      ₹ {room.price || "Loading..."} / night
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="w-[80%] flex flex-col justify-between items-center space-y-5">
                  <button
                    onClick={() => navigate(`/Room${room.id}`)}
                    className="w-full h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center py-2 px-2 motion-safe:animate-slideIn transition-colors duration-300"
                    aria-label={`View detailed information about ${room.name}`}
                  >
                    <div className="w-full h-full border-2 border-ltgreen rounded text-center flex justify-center items-center text-xl md:text-2xl py-2">
                      View Full Details
                    </div>
                  </button>
                  <button
                    onClick={() => navigate(`/Book`)}
                    className="w-full h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center py-2 px-2 motion-safe:animate-slideIn transition-colors duration-300"
                    aria-label={`Book ${room.name} at Woodward II Kasol`}
                  >
                    <div className="w-full h-full border-2 border-ltgreen rounded text-center flex justify-center items-center text-xl md:text-2xl py-2">
                      Book This Room Now
                    </div>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Additional Information Section */}
          <div className="w-full max-w-screen-xl px-6 py-10 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dkbrown">
              Room Amenities & Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <div className="p-6 border-4 border-darkgreen rounded-2xl bg-white bg-opacity-80">
                <h3 className="text-2xl font-semibold mb-3 text-dkbrown">In-Room Amenities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comfortable beds with premium mattresses and fresh linens</li>
                  <li>Complimentary high-speed Wi-Fi throughout your stay</li>
                  <li>24/7 hot water supply in modern attached bathrooms</li>
                  <li>Tea and coffee making facilities with complimentary refreshments</li>
                  <li>Wardrobe with hangers and luggage storage space</li>
                  <li>Reading lamps and charging points near bed</li>
                  <li>Mountain or garden views from windows/balconies</li>
                  <li>Eco-friendly toiletries and fresh towels</li>
                </ul>
              </div>

              <div className="p-6 border-4 border-darkgreen rounded-2xl bg-white bg-opacity-80">
                <h3 className="text-2xl font-semibold mb-3 text-dkbrown">Room Services</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Daily housekeeping with room tidying and linen change</li>
                  <li>24/7 room service for meals and beverages</li>
                  <li>Laundry and dry cleaning services available</li>
                  <li>Extra bedding and pillows upon request</li>
                  <li>In-room dining with extensive menu options</li>
                  <li>Travel desk assistance for trek bookings and transport</li>
                  <li>Luggage storage before check-in and after check-out</li>
                  <li>Wake-up call service for early morning treks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Our Rooms */}
          <div className="w-full max-w-screen-xl px-6 py-10 bg-white bg-opacity-90 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-dkbrown">
              Why Choose Woodward II Rooms?
            </h2>
            <div className="text-lg md:text-xl space-y-4 text-center">
              <p>
                <strong>Perfect Location:</strong> All rooms are centrally located in Kasol, within 
                walking distance to Parvati River, main market, cafes, and just 10 meters from 
                Bhagwan Narayan Temple.
              </p>
              <p>
                <strong>Authentic Experience:</strong> Enjoy traditional Himachali architecture and 
                design combined with modern comfort and amenities for the best of both worlds.
              </p>
              <p>
                <strong>Value for Money:</strong> Competitive pricing with transparent rates, no hidden 
                charges, and excellent value compared to other Kasol accommodations.
              </p>
              <p>
                <strong>Personalized Service:</strong> Our attentive staff ensures every guest feels 
                at home, assisting with special requests, trek planning, and local recommendations.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-4 py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-dkbrown">
              Ready to Book Your Mountain Retreat?
            </h2>
            <p className="text-xl md:text-2xl text-dkbrown">
              Choose your perfect room at Woodward II and experience the best of Kasol hospitality.
            </p>
            <button
              onClick={() => navigate('/Book')}
              className="px-10 py-4 text-xl font-semibold text-white bg-dkkbrown rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Book Your Stay Now
            </button>
          </div>
        </div>
      </>
    </HelmetProvider>
  );
}

export default RoomNSuites;
