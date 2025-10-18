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
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>Location & How to Reach Woodward II Kasol - Contact Us</title>
          <meta
            name="description"
            content="Find Woodward II near Narayan Temple, Kasol. Get directions, contact numbers, and travel guide. Call 9317707539. Located in Parvati Valley, Himachal Pradesh."
          />
          <meta
            name="keywords"
            content="Woodward 2 location, how to reach Kasol, hotel near Narayan temple Kasol, Kasol hotel address, contact Woodward II, directions to Kasol"
          />
          <link rel="canonical" href="https://www.4wildflowerhospitality.com/location" />
          
          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Location & How to Reach Woodward II Kasol - Contact Us" />
          <meta
            property="og:description"
            content="Find us near Narayan Temple, Kasol. Complete travel guide with directions from Delhi, Chandigarh, Manali. Contact: 9317707539"
          />
          <meta property="og:url" content="https://www.4wildflowerhospitality.com/location" />
          
          {/* Local Business Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "name": "Woodward II by 4 Wildflower Hospitality",
              "image": "https://www.4wildflowerhospitality.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hotel Woodward 2, near Narayan temple, tehsil Kasol, Jari",
                "addressLocality": "Kasol",
                "addressRegion": "Himachal Pradesh",
                "postalCode": "175105",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.0092886",
                "longitude": "77.3125674"
              },
              "telephone": "+91-9317707539",
              "email": "info@4wildflowerhospitality.com",
              "url": "https://www.4wildflowerhospitality.com/",
              "priceRange": "$$",
              "openingHours": "Mo-Su 00:00-23:59",
              "sameAs": [
                "https://www.google.com/maps/place/Woodward+2+by+4wildflower/@32.0092829,77.3125712,19.04z"
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
                  "name": "Location & Contact",
                  "item": "https://www.4wildflowerhospitality.com/location"
                }
              ]
            })}
          </script>
        </Helmet>

        {/* Title Section */}
        <div
          ref={titleRef}
          className={`w-full h-[10%] py-10 flex flex-col justify-center text-dkbrown items-center space-y-5 transition-transform duration-700 ${
            titleInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-7xl font-MTreg">
            Find Us in Kasol
          </h1>
        </div>

        {/* Paragraph Section */}
        <div
          ref={paraRef}
          className={`font-NBI w-[80%] md:w-[70%] p-5 md:p-10 text-center text-xl md:text-2xl mx-auto transition-transform duration-700 delay-200 ${
            paraInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p>
            Nestled amidst the pristine mountains and lush greenery of Kasol in the beautiful 
            Parvati Valley, Himachal Pradesh, Woodward 2 is more than just accommodation—it's an 
            experience designed to connect you with nature, adventure, and serenity. Located just 
            10 meters from the historic Bhagwan Narayan Temple, our boutique hotel offers a perfect 
            blend of rustic Himalayan charm and modern comforts, making it an ideal sanctuary for 
            travelers seeking tranquility, inspiration, and easy access to Kasol's best attractions 
            in the heart of the Himalayas.
          </p>
        </div>

        {/* Contact Section */}
        <div
          ref={infoRef}
          className={`flex flex-col md:flex-row justify-center items-center space-y-10 md:space-x-10 md:space-y-0 p-10 md:p-20 transition-transform duration-700 delay-400 gap-10 ${
            infoInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Address Box */}
          <div className="flex flex-col justify-center items-center w-full md:w-[40vw] h-fit gap-2 p-5 md:p-10 rounded-3xl space-y-5">
            <div className="bg-greenish border-4 rounded-2xl w-full md:w-[80%] h-[50%] p-5 md:p-10 flex flex-col justify-center text-lg md:text-xl font-NBI text-dkkbrown">
              <img 
                src="logo.png" 
                alt="Woodward II by 4 Wildflower Hospitality logo"
                className="md:h-44 md:w-44 h-24 w-24 m-5 ml-0"
              />
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-4">
                <strong>Address:</strong><br />
                Hotel Woodward 2, Near Bhagwan Narayan Temple,<br />
                Tehsil Kasol, Jari, Himachal Pradesh 175105<br />
                (Parvati Valley, Kullu District)
              </p>
              <p className="mb-4">
                <strong>Phone Numbers:</strong><br />
                <a
                  className="transition-all duration-300 ease-in-out hover:underline hover:text-dkbrown"
                  href="tel:+919317707539"
                  aria-label="Call Woodward II at 9317707539"
                >
                  +91-9317707539
                </a>
                {" | "}
                <a
                  className="transition-all duration-300 ease-in-out hover:underline hover:text-dkbrown"
                  href="tel:+918168235008"
                  aria-label="Call Woodward II at 8168235008"
                >
                  +91-8168235008
                </a>
                <br />
                <a
                  className="transition-all duration-300 ease-in-out hover:underline hover:text-dkbrown"
                  href="tel:+919215229400"
                  aria-label="Call Woodward II at 9215229400"
                >
                  +91-9215229400
                </a>
              </p>
              <p className="mb-4">
                <strong>Email:</strong><br />
                <a 
                  href="mailto:info@4wildflowerhospitality.com"
                  className="transition-all duration-300 ease-in-out hover:underline hover:text-dkbrown"
                >
                  info@4wildflowerhospitality.com
                </a>
              </p>
              <p>
                <strong>Check-in:</strong> 12:00 PM | <strong>Check-out:</strong> 11:00 AM
              </p>
            </div>

            <a 
              href="https://www.google.com/maps/place/Woodward+2+by+4wildflower/@32.0092829,77.3125712,19.04z/data=!4m6!3m5!1s0x39045d777849c18f:0x4def134125e0432c!8m2!3d32.0092886!4d77.3125674!16s%2Fg%2F11ltnny40b?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dkbrown hover:bg-dkkbrown text-lg md:text-xl rounded-lg w-full md:w-[80%] h-[10%] p-4 text-center flex justify-center items-center text-white transition-colors duration-300"
              aria-label="Get directions to Woodward II on Google Maps"
            >
              Get Directions on Google Maps
            </a>

            <a
              href="https://www.google.com/travel/hotels/s/H63v37QgZa5jQ8XC6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dkbrown hover:bg-dkkbrown text-lg md:text-xl rounded-lg w-full md:w-[80%] h-[10%] p-4 text-center flex justify-center items-center text-white transition-colors duration-300"
              aria-label="Find Woodward II on Google Travel"
            >
              Find Us on Google Travel
            </a>

            <a
              href="/Book"
              className="bg-dkkbrown hover:bg-opacity-90 text-lg md:text-xl rounded-lg w-full md:w-[80%] h-[10%] p-4 text-center flex justify-center items-center text-white transition-colors duration-300 font-semibold"
              aria-label="Book your stay at Woodward II Kasol"
            >
              Book Your Stay Now
            </a>
          </div>

          {/* Map Section */}
          <div
            className="w-full md:w-[40vw] m-0 h-[70vh] p-5 rounded-3xl"
            style={{
              backgroundImage: `url(${greenbg})`,
              backgroundSize: "cover",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845.8038053720056!2d77.31149056946418!3d32.0092833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39045d777849c18f%3A0x4def134125e0432c!2sWoodward%202%20by%204wildflower!5e0!3m2!1sen!2sin!4v1730879556172!5m2!1sen!2sin"
              className="w-full h-full rounded-3xl border-4 border-darkgreen"
              title="Woodward II location map in Kasol near Narayan Temple"
              loading="lazy"
              allowFullScreen
              aria-label="Interactive map showing Woodward II hotel location in Kasol"
            ></iframe>
          </div>
        </div>

        {/* How to Reach Section */}
        <div className="w-full max-w-screen-xl mx-auto px-6 py-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-dkkbrown">
            How to Reach Woodward II Kasol
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* By Air */}
            <div className="p-6 border-4 border-darkgreen rounded-2xl bg-white bg-opacity-80">
              <h3 className="text-2xl font-bold mb-4 text-dkkbrown">By Air</h3>
              <p className="text-lg mb-3">
                <strong>Nearest Airport:</strong> Bhuntar Airport (Kullu-Manali Airport)
              </p>
              <p className="text-lg mb-3">
                <strong>Distance:</strong> 31 km from Kasol (approximately 1 hour drive)
              </p>
              <p className="text-lg">
                Regular flights connect Bhuntar with Delhi. From the airport, hire a taxi or take 
                a bus to Kasol. Pre-paid taxis are available at the airport. Woodward II can arrange 
                airport pickup on request.
              </p>
            </div>

            {/* By Road */}
            <div className="p-6 border-4 border-darkgreen rounded-2xl bg-white bg-opacity-80">
              <h3 className="text-2xl font-bold mb-4 text-dkkbrown">By Road</h3>
              <p className="text-lg mb-3">
                <strong>From Delhi:</strong> 530 km (12-14 hours drive)<br />
                Take NH44 via Chandigarh, Bilaspur, Mandi, and Bhuntar to Kasol.
              </p>
              <p className="text-lg mb-3">
                <strong>From Chandigarh:</strong> 305 km (8-9 hours drive)<br />
                Via Bilaspur, Mandi, Kullu, and Bhuntar.
              </p>
              <p className="text-lg">
                <strong>From Manali:</strong> 75 km (3-4 hours)<br />
                Via Kullu and Bhuntar. State-run HRTC buses and private buses operate daily.
              </p>
            </div>

            {/* By Bus */}
            <div className="p-6 border-4 border-darkgreen rounded-2xl bg-white bg-opacity-80">
              <h3 className="text-2xl font-bold mb-4 text-dkkbrown">By Bus</h3>
              <p className="text-lg mb-3">
                <strong>From Delhi:</strong> Regular Volvo and semi-sleeper buses from ISBT Kashmere Gate 
                to Bhuntar (overnight journey, 12-14 hours). From Bhuntar, take local bus or taxi to Kasol (1 hour).
              </p>
              <p className="text-lg">
                <strong>From Chandigarh:</strong> Frequent HRTC buses to Bhuntar (8-9 hours). Private operators 
                also run daily services. Book tickets online or at bus stands.
              </p>
            </div>

            {/* Local Transport */}
            <div className="p-6 border-4 border-darkgreen rounded-2xl bg-white bg-opacity-80">
              <h3 className="text-2xl font-bold mb-4 text-dkkbrown">Local Transport in Kasol</h3>
              <p className="text-lg mb-3">
                <strong>From Bhuntar to Kasol:</strong> Shared taxis (₹50-100 per person), private taxis 
                (₹800-1200), or local buses (₹30-50).
              </p>
              <p className="text-lg">
                <strong>Within Kasol:</strong> Woodward II is centrally located, walking distance to main 
                market, cafes, and Parvati River. Taxis and bikes available for nearby village visits.
              </p>
            </div>
          </div>

          {/* Travel Tips */}
          <div className="mt-10 p-6 border-l-4 border-dkkbrown bg-white bg-opacity-80 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-dkkbrown">Travel Tips</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Best time to visit: March to June (spring/summer) and September to November (autumn)</li>
              <li>Roads may be closed in heavy winter snowfall (December-February); check weather before traveling</li>
              <li>Carry warm clothing even in summer as evenings are cool in mountains</li>
              <li>Book transport in advance during peak season (May-June, October-November)</li>
              <li>Mobile network: Jio and Airtel have good coverage in Kasol</li>
              <li>ATMs available in Kasol; carry sufficient cash for remote villages</li>
              <li>Contact us for airport/bus stand pickup arrangements</li>
            </ul>
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="w-full max-w-screen-xl mx-auto px-6 py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-dkkbrown">
            Distances from Woodward II
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border-2 border-darkgreen rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Bhagwan Narayan Temple</h3>
              <p className="text-lg">10 meters (1-minute walk)</p>
            </div>
            <div className="p-4 border-2 border-darkgreen rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Kasol Market</h3>
              <p className="text-lg">500 meters (5-minute walk)</p>
            </div>
            <div className="p-4 border-2 border-darkgreen rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Parvati River</h3>
              <p className="text-lg">300 meters (3-minute walk)</p>
            </div>
            <div className="p-4 border-2 border-darkgreen rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Manikaran Sahib</h3>
              <p className="text-lg">5 km (10-minute drive)</p>
            </div>
            <div className="p-4 border-2 border-darkgreen rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Kheerganga Trek Start</h3>
              <p className="text-lg">12 km (30-minute drive)</p>
            </div>
            <div className="p-4 border-2 border-darkgreen rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Tosh Village</h3>
              <p className="text-lg">21 km (1-hour drive)</p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Location;
