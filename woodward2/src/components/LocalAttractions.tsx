import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

function LocalAttractions() {
  return (
    <HelmetProvider>
      <div
        className="w-full py-10 min-h-screen flex flex-col justify-center items-center space-y-5 bg-ltgreen text-dkbrown bg-cover bg-center"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>Things to Do in Kasol - Top Attractions Near Woodward II</title>
          <meta
            name="description"
            content="Discover the best attractions near Kasol: Kheerganga Trek, Manikaran Sahib, Tosh Village, Chalal, Malana, and Parvati River. Plan your Himachal adventure from Woodward II."
          />
          <meta
            name="keywords"
            content="things to do in Kasol, Kheerganga trek, Manikaran Sahib, Tosh village, places near Kasol, Parvati Valley attractions, Kasol trekking, Chalal village"
          />
          <link rel="canonical" href="https://www.4wildflowerhospitality.com/LocalAttractions" />
          
          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Things to Do in Kasol - Top Attractions Near Woodward II" />
          <meta
            property="og:description"
            content="Explore Kheerganga Trek, Manikaran Sahib, Tosh, Chalal, and more attractions near Kasol. Your complete Parvati Valley travel guide."
          />
          <meta property="og:url" content="https://www.4wildflowerhospitality.com/LocalAttractions" />
          
          {/* Structured Data - ItemList for Attractions */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Top Attractions Near Kasol",
              "description": "Complete guide to tourist attractions and things to do near Woodward II hotel in Kasol, Himachal Pradesh",
              "itemListElement": [
                {
                  "@type": "TouristAttraction",
                  "position": 1,
                  "name": "Parvati River",
                  "description": "Scenic river perfect for riverside walks, photography, and picnics"
                },
                {
                  "@type": "TouristAttraction",
                  "position": 2,
                  "name": "Kheerganga Trek",
                  "description": "Popular 12 km trek with natural hot springs and mountain views",
                  "distance": "12 km from Kasol"
                },
                {
                  "@type": "TouristAttraction",
                  "position": 3,
                  "name": "Manikaran Sahib",
                  "description": "Sacred pilgrimage site with natural hot springs and historic gurdwara",
                  "distance": "5 km from Kasol"
                },
                {
                  "@type": "TouristAttraction",
                  "position": 4,
                  "name": "Tosh Village",
                  "description": "Traditional Himalayan village with cafes and stunning valley views",
                  "distance": "21 km from Kasol"
                },
                {
                  "@type": "TouristAttraction",
                  "position": 5,
                  "name": "Chalal Village",
                  "description": "Peaceful village across Parvati River, popular for yoga and nature walks",
                  "distance": "30-minute walk from Kasol"
                }
              ]
            })}
          </script>
          
          {/* FAQ Schema for Common Questions */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are the best things to do in Kasol?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Top activities in Kasol include Kheerganga trekking, visiting Manikaran Sahib hot springs, exploring Tosh and Chalal villages, riverside walks along Parvati River, and shopping at Kasol Flea Market."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How far is Kheerganga trek from Kasol?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kheerganga trek starts approximately 12 km from Kasol at Barshaini. The trek is moderate difficulty and takes about 4-5 hours to reach the hot springs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the distance from Kasol to Manikaran Sahib?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Manikaran Sahib is 5 km from Kasol and easily accessible by road. It takes about 10-15 minutes by car or local bus."
                  }
                }
              ]
            })}
          </script>
        </Helmet>

        <div className="w-[90%] lg:w-[80%] space-y-5 lg:space-y-1 px-4">
          {/* H1 with primary keywords */}
          <h1 className="w-full h-[20vh] font-MTreg flex justify-center items-center text-3xl md:text-6xl lg:text-7xl text-center motion-safe:animate-slideIn">
            Best Things to Do in Kasol & Nearby Attractions
          </h1>
          <div className="text-lg md:text-2xl text-dkbrown w-full lg:w-[70%] font-NBI text-center mx-auto px-4 motion-safe:animate-slideIn">
            <p>
              Kasol is a paradise for nature lovers, adventure seekers, and culture enthusiasts in 
              Himachal Pradesh. Located in the scenic Parvati Valley, Woodward 2 is surrounded by 
              breathtaking Himalayan landscapes, vibrant traditional villages, serene rivers, and 
              spiritual sites offering endless exploration opportunities. Whether you're planning treks, 
              temple visits, village walks, or riverside relaxation, here are the must-visit attractions 
              near Kasol to make your stay at Woodward II unforgettable.
            </p>
          </div>
        </div>

        {/* Introduction Section with Travel Tips */}
        <div className="w-full max-w-screen-xl px-6 py-8 motion-safe:animate-slideIn">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Your Complete Kasol Travel Guide
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border-2 border-darkgreen rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
              <p className="text-lg">
                March to June and September to November offer pleasant weather for trekking and sightseeing 
                in Kasol and Parvati Valley.
              </p>
            </div>
            <div className="p-4 border-2 border-darkgreen rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Getting Around</h3>
              <p className="text-lg">
                Local taxis, shared cabs, and bikes are available for hire. Woodward II staff can arrange 
                transport and guide services.
              </p>
            </div>
            <div className="p-4 border-2 border-darkgreen rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Trek Preparation</h3>
              <p className="text-lg">
                Carry comfortable trekking shoes, warm layers, water bottles, and sunscreen. Book trek 
                guides through our travel desk.
              </p>
            </div>
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
          {/* Attraction Cards with Enhanced SEO Content */}
          {[
            {
              title: "Parvati River – Kasol's Natural Gem",
              description:
                "Flowing gracefully through the heart of Kasol, the crystal-clear Parvati River is a serene spot perfect for quiet afternoons, riverside picnics, and nature photography. Its sparkling turquoise waters and soothing sound create an ideal place to relax, meditate, and immerse yourself in the natural beauty of Parvati Valley. The river is also famous among anglers for trout fishing in designated areas.",
              activities: "Riverside walks, landscape photography, bird watching, trout fishing (permitted zones), meditation, and picnics.",
              distance: "Runs through Kasol town, accessible within 5 minutes walk from Woodward II.",
              bestFor: "Families, couples, photographers, nature lovers",
            },
            {
              title: "Kheerganga Trek – Himalayan Hot Springs Adventure",
              description:
                "One of the most popular and rewarding treks in Himachal Pradesh, the Kheerganga Trek offers stunning panoramic views of snow-capped peaks, dense pine forests, gushing waterfalls, and an unforgettable journey through alpine meadows. The 12 km moderate trek culminates at natural hot springs (3,050 meters altitude) where trekkers can soak in warm, mineral-rich waters while enjoying breathtaking Himalayan vistas. The trek passes through scenic villages like Nakthan and Rudra Nag waterfall.",
              activities:
                "Trekking, camping, bathing in hot springs, photography, stargazing, and exploring mountain flora and fauna.",
              distance: "Trek starts at Barshaini village, 12 km from Kasol. 4-5 hours trekking duration one way.",
              difficulty: "Moderate difficulty, suitable for beginners with basic fitness and experienced trekkers.",
              bestFor: "Adventure seekers, trekkers, nature photographers, camping enthusiasts",
              tips: "Start early morning, carry sufficient water, wear trekking shoes, and book guides through Woodward II travel desk.",
            },
            {
              title: "Manikaran Sahib – Sacred Hot Springs Temple",
              description:
                "A revered pilgrimage site for both Sikhs and Hindus, Manikaran Sahib is famous for its geothermal hot springs and historic Sri Guru Nanak Dev Ji Gurdwara. According to legend, Guru Nanak Dev Ji visited this site and meditated here. Visitors can experience the unique tradition of Langar (free community meal served to thousands daily), witness steam rising from natural hot springs where rice is cooked, and bathe in the healing thermal waters believed to have purifying and therapeutic properties. The complex also houses ancient Hindu temples dedicated to Lord Shiva and Goddess Parvati.",
              activities: "Spiritual darshan, bathing in hot springs, enjoying Langar, temple visits, exploring local markets, and learning about Sikh and Hindu religious heritage.",
              distance: "5 km from Kasol, 10-15 minutes by road. Frequent buses and taxis available.",
              bestFor: "Pilgrims, families, spiritual seekers, cultural tourists",
              tips: "Dress modestly, cover head in Gurdwara, carry towels for hot spring bath, visit early to avoid crowds.",
            },
            {
              title: "Tosh Village – Himalayan Mountain Paradise",
              description:
                "Nestled high in the upper Parvati Valley at 2,400 meters, Tosh is a picturesque Himachali village known for its laid-back bohemian vibe, stunning mountain views, traditional wooden houses, artistic cafes, and friendly locals. The village offers spectacular views of snow-covered peaks, terraced fields, and waterfalls. Tosh is perfect for travelers seeking authentic Himalayan culture, peace, and escape from commercial tourism. The village has several cozy cafes serving Israeli, Italian, and local Himachali cuisine.",
              activities: "Short village treks, visiting local cafes and bakeries, interacting with villagers, photography, stargazing, waterfall visits, and experiencing traditional Himachali lifestyle.",
              distance: "21 km from Kasol, accessible by road and then a short 15-20 minute uphill hike from parking.",
              bestFor: "Backpackers, culture seekers, cafe hoppers, digital nomads, photographers",
              tips: "Stay overnight to experience sunset and sunrise views, try local Himachali dishes, carry warm clothes.",
            },
            {
              title: "Chalal Village – Riverside Art Village",
              description:
                "Located across the Parvati River from Kasol, Chalal is a small, peaceful village known for its untouched natural beauty, tranquil forest trails, vibrant artistic community, and bohemian atmosphere. The village is popular among yoga practitioners, meditation seekers, and artists. A scenic 30-minute walk through pine forests along the river leads to Chalal. The village offers stunning views of surrounding mountains, quiet cafes, guesthouses, and a relaxed vibe away from Kasol's bustle.",
              activities: "Village walks through pine forests, yoga and meditation sessions, nature photography, cafe hopping, riverside camping, and interacting with local artists.",
              distance: "30-minute scenic walk from Kasol via pedestrian bridge over Parvati River.",
              bestFor: "Yoga enthusiasts, solo travelers, artists, peace seekers, short trekkers",
              tips: "Wear comfortable walking shoes, visit during daytime for safe trail navigation, carry light backpack.",
            },
            {
              title: "Malana Village – Ancient Himalayan Heritage",
              description:
                "Recognized as one of the oldest democracies and villages in India, Malana offers a unique cultural and historical experience. The isolated village is famous for its ancient customs, distinct dialect (Kanashi), traditional governance system, and centuries-old temples. Villagers follow strict customs regarding physical contact and property, which visitors must respect. The village deity Jamlu Devta is worshipped, and the village maintains its distinct identity and traditions unchanged for thousands of years. Access requires a scenic trek through forests and valleys.",
              activities: "Cultural tours, visiting ancient Jamlu Devta temple, learning about Malana's unique democracy and heritage, photography (with permission), trekking, and observing traditional Himalayan architecture.",
              distance: "20 km from Kasol, accessible via road to village base followed by 1-2 hour trek.",
              bestFor: "Culture enthusiasts, history buffs, anthropology students, respectful travelers",
              tips: "Respect local customs strictly—do not touch villagers or their property without permission, hire local guides, carry cash, dress modestly.",
              note: "Photography may be restricted in certain areas; always ask permission from locals.",
            },
            {
              title: "Tirthan Valley – Great Himalayan National Park",
              description:
                "A hidden gem and UNESCO World Heritage Site, Tirthan Valley is a quieter destination renowned for its pristine natural beauty, crystal-clear Tirthan River, rich biodiversity, and being part of the Great Himalayan National Park (GHNP). The valley is ideal for nature lovers, wildlife enthusiasts, and adventure seekers looking to experience untouched Himalayan landscapes. The region offers excellent opportunities for trout fishing (catch and release), riverside camping, birdwatching (over 200 species), spotting Himalayan wildlife including musk deer and snow leopards, and multi-day treks into GHNP.",
              activities: "Wildlife spotting, riverside camping, trout fishing (permit required), trekking in GHNP, bird watching, nature walks, village homestays, and photography.",
              distance: "60 km from Kasol, ideal for full-day trip or overnight stay. 2-hour drive through scenic mountain roads.",
              bestFor: "Nature lovers, wildlife photographers, fishing enthusiasts, serious trekkers, eco-tourists",
              tips: "Carry binoculars for wildlife spotting, book GHNP permits in advance, hire local guides for treks.",
            },
            {
              title: "Rasol Village – High-Altitude Mountain Retreat",
              description:
                "Rasol is a peaceful, remote village situated high up in the Parvati Valley at approximately 3,000 meters altitude, accessible only via a scenic 3-4 hour trek from Kasol through dense forests and mountain trails. The village offers spectacular panoramic views of surrounding Himalayan peaks, traditional wooden houses, terraced fields, apple orchards, and warm local hospitality. Rasol provides an authentic experience of Himachali mountain village life, far from tourist crowds. The village is known for its tranquility and breathtaking sunrises and sunsets over snow-covered ranges.",
              activities: "Moderate trekking, village walks, interacting with locals, scenic photography, stargazing, experiencing traditional Himachali lifestyle, apple picking (seasonal), and camping.",
              distance: "3-4 hours trekking from Kasol, approximately 10 km trail distance. Altitude gain of ~1,500 meters.",
              difficulty: "Moderate to challenging trek requiring good fitness level.",
              bestFor: "Experienced trekkers, photographers, culture seekers, solitude lovers",
              tips: "Start trek early morning, carry sufficient water and snacks, wear proper trekking gear, consider staying overnight in village homestays.",
            },
            {
              title: "Nature Park Kasol – Family Picnic Spot",
              description:
                "This small but beautiful nature park in central Kasol is perfect for leisurely strolls, family outings, and relaxed afternoons. The park is shaded by towering deodar and pine trees and features well-maintained walking paths, wooden benches, play areas for children, picnic spots, and flower gardens. It's an ideal place for morning walks, evening relaxation, reading, or simply enjoying the fresh mountain air without venturing far from your hotel.",
              activities: "Walking trails, family picnics, bird watching, children's play area, morning yoga, reading, and relaxation.",
              distance: "Within Kasol town, 5-10 minutes walk from Woodward II.",
              bestFor: "Families with children, senior citizens, leisure travelers, morning walkers",
              tips: "Visit early morning for peaceful atmosphere, carry picnic mat and snacks, best during spring for blooming flowers.",
            },
            {
              title: "Kasol Flea Market – Shopping & Souvenirs",
              description:
                "For shopping enthusiasts, the vibrant Kasol Flea Market is a must-visit spot where you can find an eclectic mix of handcrafted jewelry, woolen clothing, Tibetan artifacts, hippie fashion, local handicrafts, shawls, bags, incense, souvenirs, and unique items inspired by Indian, Tibetan, and Israeli cultures. The market reflects Kasol's cosmopolitan character with vendors from different regions. Bargaining is encouraged and expected. The market also has several cafes and street food stalls.",
              activities: "Shopping for handicrafts, clothing, jewelry, souvenirs, antiques, trying street food, cafe hopping, and people watching.",
              distance: "In central Kasol, 5 minutes walk from Woodward II.",
              bestFor: "Shoppers, souvenir collectors, fashion lovers, bargain hunters",
              tips: "Carry cash (limited card acceptance), bargain prices, check quality before buying, best to visit in evening when market is most vibrant.",
            },
          ].map((attraction, index) => (
            <article
              key={index}
              className="w-full p-6 motion-safe:animate-slideIn"
            >
              <div className="border-4 border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl bg-white bg-opacity-80">
                <h2 className="text-2xl md:text-3xl font-bold text-left w-full">
                  {index + 1}. {attraction.title}
                </h2>
                <div className="text-lg md:text-xl text-left space-y-3">
                  <p>
                    <strong>About:</strong> {attraction.description}
                  </p>
                  {attraction.activities && (
                    <p>
                      <strong>Activities:</strong> {attraction.activities}
                    </p>
                  )}
                  {attraction.distance && (
                    <p>
                      <strong>Distance from Woodward II:</strong> {attraction.distance}
                    </p>
                  )}
                  {attraction.difficulty && (
                    <p>
                      <strong>Difficulty Level:</strong> {attraction.difficulty}
                    </p>
                  )}
                  {attraction.bestFor && (
                    <p>
                      <strong>Best For:</strong> {attraction.bestFor}
                    </p>
                  )}
                  {attraction.tips && (
                    <p>
                      <strong>Travel Tips:</strong> {attraction.tips}
                    </p>
                  )}
                  {attraction.note && (
                    <p className="text-red-700">
                      <strong>Important Note:</strong> {attraction.note}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Planning Section */}
        <div className="w-full max-w-screen-xl px-6 py-10 motion-safe:animate-slideIn">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Plan Your Kasol Itinerary
          </h2>
          <div className="space-y-6 text-lg md:text-xl">
            <div className="p-6 border-l-4 border-darkgreen">
              <h3 className="text-2xl font-semibold mb-3">2-Day Kasol Itinerary</h3>
              <p>
                <strong>Day 1:</strong> Arrive Kasol, check-in at Woodward II, explore Kasol Market and 
                Parvati River, visit Chalal Village, evening at riverside cafes.<br/>
                <strong>Day 2:</strong> Morning visit to Manikaran Sahib, afternoon Tosh Village exploration, 
                return to Kasol for shopping and departure.
              </p>
            </div>
            <div className="p-6 border-l-4 border-darkgreen">
              <h3 className="text-2xl font-semibold mb-3">3-4 Day Adventure Itinerary</h3>
              <p>
                <strong>Day 1:</strong> Arrival, Kasol town and Nature Park.<br/>
                <strong>Day 2:</strong> Full-day Kheerganga Trek with overnight camping at hot springs.<br/>
                <strong>Day 3:</strong> Return from Kheerganga, rest, visit Manikaran Sahib.<br/>
                <strong>Day 4:</strong> Tosh or Malana village trip, evening at Kasol Market.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-screen-xl px-6 py-10 text-center motion-safe:animate-slideIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Kasol?
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Book your stay at Woodward II and let our team help plan your perfect Parvati Valley adventure. 
            We arrange treks, transport, and local guides for all attractions.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="/Book"
              className="px-8 py-4 text-xl font-semibold text-white bg-dkkbrown rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Book Your Stay
            </a>
            <a 
              href="/Room"
              className="px-8 py-4 text-xl font-semibold text-dkkbrown border-2 border-dkkbrown rounded-lg hover:bg-dkkbrown hover:text-white transition duration-300"
            >
              View Our Rooms
            </a>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default LocalAttractions;
