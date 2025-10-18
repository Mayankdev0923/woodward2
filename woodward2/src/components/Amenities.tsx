import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Amenities() {
  return (
    <HelmetProvider>
      <div
        className="w-full min-h-screen flex flex-col justify-center items-center space-y-2 bg-ltgreen text-dkbrown bg-cover bg-center lg:pt-4"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>Hotel Amenities in Kasol - Woodward II Facilities & Services</title>
          <meta
            name="description"
            content="Discover premium amenities at Woodward II Kasol: complimentary Wi-Fi, 24/7 room service, housekeeping, tea & coffee makers, mountain views, and personalized guest services."
          />
          <meta
            name="keywords"
            content="hotel amenities Kasol, Woodward 2 facilities, services in Kasol hotel, Wi-Fi hotel Kasol, room service Kasol, hotel booking options"
          />
          <link rel="canonical" href="https://www.4wildflowerhospitality.com/Amenities" />
          
          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hotel Amenities in Kasol - Woodward II Facilities & Services" />
          <meta
            property="og:description"
            content="Discover premium amenities at Woodward II Kasol: complimentary Wi-Fi, 24/7 room service, housekeeping, and personalized guest services."
          />
          <meta property="og:url" content="https://www.4wildflowerhospitality.com/Amenities" />
          
          {/* Structured Data - ItemList for Amenities */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Hotel Amenities at Woodward II Kasol",
              "description": "Complete list of services and facilities available at Woodward 2 hotel in Kasol",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Complimentary Wi-Fi",
                  "description": "Free high-speed internet throughout the property"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "24/7 Room Service",
                  "description": "Round-the-clock dining and room service"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Tea and Coffee Maker",
                  "description": "In-room refreshment facilities"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Daily Housekeeping",
                  "description": "Professional cleaning services every day"
                }
              ]
            })}
          </script>
        </Helmet>
        
        <div className="w-[90%] lg:w-[80%] space-y-0 lg:space-y-1 px-4 animate-slideIn">
          {/* H1 with primary keywords */}
          <h1 className="w-full h-[20vh] font-MTreg flex justify-center items-center text-5xl md:text-6xl lg:text-7xl text-center animate-slideIn">
            Hotel Amenities & Services in Kasol
          </h1>
          <div className="text-lg md:text-2xl text-dkbrown w-full lg:w-[70%] font-NBI text-center mx-auto px-4 animate-slideIn">
            <p>
              At Woodward 2 in Kasol, we provide thoughtfully curated amenities designed for your comfort 
              and convenience. Each room blends cozy interiors with breathtaking mountain views of the 
              Parvati Valley. Whether you're a solo traveler seeking tranquility, a couple on a romantic 
              getaway, a family exploring Himachal Pradesh, or an adventure group planning treks, our 
              facilities cater to all. Every room features tasteful local art, wooden furnishings, modern 
              bathrooms with 24/7 hot water, and premium amenities ensuring a restful and memorable stay 
              in the heart of Kasol.
            </p>
          </div>
        </div>

        {/* Amenities Grid Section */}
        <div className="w-full py-10 lg:py-20 px-10 lg:px-20 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 justify-center animate-slideIn">
          <div className="w-full p-4 animate-slideIn">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold">Complimentary High-Speed Wi-Fi</h3>
              <p className="text-lg md:text-xl">
                Stay connected during your Kasol adventure with free high-speed internet access throughout 
                the property. Stream, work remotely, or share your mountain experiences seamlessly from 
                your room, restaurant, or common areas.
              </p>
            </div>
          </div>

          <div className="w-full p-4 animate-slideIn">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold">24/7 Room Service</h3>
              <p className="text-lg md:text-xl">
                Enjoy delicious meals anytime, day or night, with our round-the-clock room service. 
                Choose from a diverse menu featuring local Himachali cuisine, continental favorites, 
                and special dietary options. Perfect for late-night cravings after trekking or early 
                morning breakfast before your Kheerganga adventure.
              </p>
            </div>
          </div>

          <div className="w-full p-4 animate-slideIn">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold">In-Room Tea & Coffee Maker</h3>
              <p className="text-lg md:text-xl">
                Start your day with fresh beverages prepared in the comfort of your room. Complimentary 
                tea and coffee supplies are refreshed daily, perfect for enjoying with stunning Himalayan 
                sunrise views from your balcony or window.
              </p>
            </div>
          </div>

          <div className="w-full p-4 animate-slideIn">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold">Daily Housekeeping Services</h3>
              <p className="text-lg md:text-xl">
                Our professional housekeeping team ensures your room stays fresh, clean, and comfortable 
                throughout your stay. Daily cleaning, fresh linens, towel changes, and room tidying are 
                included. Extra services available upon request.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Amenities Section */}
        <div className="w-full max-w-screen-xl px-6 py-10 animate-slideIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dkkbrown text-center mb-8">
            More Facilities at Woodward II Kasol
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg md:text-xl">
            <div className="p-6 border-2 border-darkgreen rounded-2xl">
              <h3 className="text-2xl font-semibold mb-3">Hot Water 24/7</h3>
              <p>
                Enjoy uninterrupted hot water supply around the clock, essential after cold mountain 
                treks and chilly Kasol evenings.
              </p>
            </div>
            <div className="p-6 border-2 border-darkgreen rounded-2xl">
              <h3 className="text-2xl font-semibold mb-3">Secure Parking</h3>
              <p>
                Complimentary parking space available for guests traveling by car or bike to Kasol 
                and Parvati Valley.
              </p>
            </div>
            <div className="p-6 border-2 border-darkgreen rounded-2xl">
              <h3 className="text-2xl font-semibold mb-3">Laundry Services</h3>
              <p>
                Professional laundry and dry cleaning services available for extended stays or after 
                multi-day treks.
              </p>
            </div>
            <div className="p-6 border-2 border-darkgreen rounded-2xl">
              <h3 className="text-2xl font-semibold mb-3">Travel Desk Assistance</h3>
              <p>
                Our knowledgeable staff helps plan treks, arrange local transport, book taxis to 
                Manikaran or Tosh, and provide insider tips for exploring Kasol.
              </p>
            </div>
            <div className="p-6 border-2 border-darkgreen rounded-2xl">
              <h3 className="text-2xl font-semibold mb-3">Mountain View Balconies</h3>
              <p>
                Select rooms feature private balconies with panoramic views of the Himalayas and 
                Parvati Valley, perfect for morning chai or evening relaxation.
              </p>
            </div>
            <div className="p-6 border-2 border-darkgreen rounded-2xl">
              <h3 className="text-2xl font-semibold mb-3">On-Site Restaurant</h3>
              <p>
                Dine at our in-house restaurant serving authentic Himachali dishes, continental cuisine, 
                and special vegetarian options in a cozy mountain ambiance.
              </p>
            </div>
          </div>
        </div>

        {/* Special Requests Section */}
        <div className="w-full max-w-screen-xl px-4 pb-4 md:pb-8 font-MTreg space-y-10 animate-slideIn">
          <div className="w-full px-6 animate-slideIn">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dkkbrown text-center mb-6">
              Personalized Guest Services
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-dkkbrown text-center mb-6">
              Every guest at Woodward 2 is unique, and we're committed to making your Kasol stay 
              exceptional. Our team happily accommodates special requests including extra bedding, 
              romantic room decorations for honeymoons or anniversaries, mountain-view breakfast setups 
              on your balcony, early check-in or late check-out, packed lunches for treks, vegetarian 
              or vegan meal preparations, and birthday or celebration arrangements.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-dkkbrown text-center">
              At Woodward 2, we offer more than accommodation—we provide a home in the mountains where 
              every detail reflects our dedication to comfort, hospitality, and immersing you in the 
              natural beauty of Kasol and Parvati Valley.
            </p>
          </div>

          {/* Booking Options Section */}
          <div className="w-full px-6 py-4 animate-slideIn">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dkkbrown text-center mb-8">
              Flexible Booking Options
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-dkkbrown text-center mb-8">
              At Woodward 2, we make booking your Kasol getaway convenient and hassle-free. Whether you 
              prefer direct reservations for exclusive deals or booking through trusted travel platforms, 
              we offer multiple options to secure your mountain retreat:
            </p>

            {/* Booking Options List */}
            <div className="space-y-8 animate-slideIn">
              <div className="p-6 border-l-4 border-darkgreen">
                <h3 className="text-2xl sm:text-3xl font-semibold text-dkkbrown mb-4">
                  Direct Website Booking
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-lg sm:text-xl text-dkkbrown">
                  <li>
                    <strong>Exclusive Offers:</strong> Book directly through our website for the best 
                    rates, special promotions, and member-only discounts on extended stays or group bookings.
                  </li>
                  <li>
                    <strong>Instant Confirmation:</strong> Our secure online booking system lets you select 
                    room types, dates, and add-ons like breakfast or adventure packages. Receive immediate 
                    email confirmation with booking details.
                  </li>
                  <li>
                    <strong>Multiple Payment Methods:</strong> Pay conveniently via credit/debit cards, 
                    UPI, bank transfers, or digital wallets with secure payment gateway protection.
                  </li>
                </ul>
              </div>

              <div className="p-6 border-l-4 border-darkgreen">
                <h3 className="text-2xl sm:text-3xl font-semibold text-dkkbrown mb-4">
                  Phone & WhatsApp Booking
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-lg sm:text-xl text-dkkbrown">
                  <li>
                    <strong>Personal Assistance:</strong> Prefer talking to someone? Call or WhatsApp our 
                    booking team for personalized recommendations, custom packages, and answers to all 
                    your questions about Kasol and our property.
                  </li>
                  <li>
                    <strong>Custom Packages:</strong> We can create tailored packages combining accommodation, 
                    meals, trek arrangements, and local sightseeing based on your interests and budget.
                  </li>
                  <li>
                    <strong>Group Bookings:</strong> Planning a trip with friends or family? Get special 
                    group rates and customized itineraries for 5+ guests.
                  </li>
                </ul>
              </div>

              <div className="p-6 border-l-4 border-darkgreen">
                <h3 className="text-2xl sm:text-3xl font-semibold text-dkkbrown mb-4">
                  Online Travel Platforms
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-lg sm:text-xl text-dkkbrown">
                  <li>
                    <strong>Booking.com, MakeMyTrip, Goibibo:</strong> Find us on major travel booking 
                    platforms with verified reviews, photos, and easy comparison tools. Read authentic 
                    guest experiences before booking.
                  </li>
                  <li>
                    <strong>Flexible Cancellation:</strong> Many OTA bookings offer flexible cancellation 
                    policies, giving you peace of mind when planning Kasol trips months in advance.
                  </li>
                  <li>
                    <strong>Loyalty Benefits:</strong> Earn travel rewards and loyalty points through 
                    your preferred booking platform.
                  </li>
                </ul>
              </div>

              <div className="p-6 border-l-4 border-darkgreen">
                <h3 className="text-2xl sm:text-3xl font-semibold text-dkkbrown mb-4">
                  Walk-In Reservations
                </h3>
                <p className="text-lg sm:text-xl text-dkkbrown mb-3">
                  Already in Kasol? Walk into our reception for same-day bookings based on availability. 
                  Our friendly staff will show you room options and provide immediate check-in for 
                  spontaneous travelers exploring the Parvati Valley.
                </p>
                <p className="text-lg sm:text-xl text-dkkbrown">
                  <strong>Note:</strong> During peak seasons (April-June, September-November), advance 
                  booking is highly recommended as rooms fill up quickly due to high tourist demand in Kasol.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-8">
            <p className="text-xl md:text-2xl text-dkkbrown mb-6">
              Experience the perfect blend of comfort and nature at Woodward II. Book your Kasol stay today!
            </p>
            <a 
              href="/Book" 
              className="inline-block px-8 py-4 text-xl font-semibold text-white bg-dkkbrown rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Book Your Stay Now
            </a>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Amenities;
