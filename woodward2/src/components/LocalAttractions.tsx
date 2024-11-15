import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

function LocalAttractions() {
  return (
    <HelmetProvider>
      <div
        className="w-full py-10 min-h-screen flex flex-col justify-center items-center space-y-5 bg-ltgreen text-dkbrown bg-cover bg-center"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Local Attractions</title>
        </Helmet>
        <div className="w-[90%] lg:w-[80%] space-y-5 lg:space-y-1 px-4">
          <div className="w-full h-[20vh] font-MTreg flex justify-center items-center text-5xl md:text-6xl lg:text-7xl text-center">
            Explore the Best of Kasol: Local Attractions Near Woodward 2
          </div>
          <span className="text-lg md:text-2xl text-dkbrown w-full lg:w-[70%] font-NBI text-center mx-auto px-4">
            <p>
              Kasol is a paradise for nature lovers, adventurers, and those who
              seek cultural immersion in the unique charm of Himachal Pradesh.
              Located in the scenic Parvati Valley, Woodward 2 is surrounded by
              breathtaking landscapes, vibrant villages, and serene spots that
              offer endless opportunities for exploration. Here are some
              must-visit attractions near Kasol to make your stay unforgettable:
            </p>
          </span>
        </div>
        {/* Attractions List */}
        <div className="w-full flex flex-col items-center px-4 space-y-10 lg:space-y-0 lg:flex-row lg:flex-wrap justify-center">
          {/* Parvati River */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="border-4 border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                1. Parvati River
              </h3>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Description:</strong> Flowing gracefully through the
                heart of Kasol, the Parvati River is a serene spot perfect for a
                quiet afternoon or a riverside picnic. Its clear, sparkling
                waters and soothing sound make it an ideal place to relax,
                reflect, and enjoy the natural beauty of the valley.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Activities:</strong> Riverside walks, photography, and
                trout fishing (in designated areas).
              </p>
            </div>
          </div>
          {/* Kheerganga Trek */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="border-4 border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                2. Kheerganga Trek
              </h3>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Description:</strong> One of the most popular treks in
                Himachal, the Kheerganga Trek offers stunning views of the
                mountains and an unforgettable journey through dense forests and
                scenic waterfalls. The trek culminates at natural hot springs,
                where trekkers can relax in warm, mineral-rich waters amidst
                breathtaking views.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Difficulty Level:</strong> Moderate, suitable for
                beginners and experienced trekkers alike.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Distance from Woodward 2:</strong> Approximately 12 km
                from Kasol (starting point at Barshaini).
              </p>
            </div>
          </div>
          {/* Manikaran Sahib */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="border-4 border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                3. Manikaran Sahib
              </h3>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Description:</strong> A revered pilgrimage site for both
                Sikhs and Hindus, Manikaran Sahib is famous for its natural hot
                springs and historic gurdwara. Visitors can experience the
                unique Langar (community meal) and witness the hot springs,
                where devotees believe bathing in the water is purifying.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Distance from Woodward 2:</strong> 5 km from Kasol,
                easily accessible by road.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center px-4 space-y-10 lg:space-y-0 lg:flex-row lg:flex-wrap justify-center">
          {/* Tosh Village */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="border-4 border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                4. Tosh Village
              </h3>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Description:</strong> Nestled high in the Parvati
                Valley, Tosh is a quaint village known for its laid-back vibe,
                stunning views, and artistic cafes. It’s a perfect escape for
                travelers looking to experience traditional Himachali culture
                while enjoying peaceful surroundings.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Activities:</strong> Short treks, visiting local cafes,
                and interacting with friendly villagers.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Distance from Woodward 2:</strong> 21 km, accessible by
                road and then a short hike.
              </p>
            </div>
          </div>
          {/* Chalal Village */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="border-4 border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                5. Chalal Village
              </h3>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Description:</strong> Located across the Parvati River
                from Kasol, Chalal is a small village known for its untouched
                beauty, peaceful trails, and vibrant artsy vibe. It’s a popular
                spot for yoga retreats and tranquil walks along forested paths
                lined with pine trees.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Activities:</strong> Village walks, yoga sessions, and
                nature photography.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Distance from Woodward 2:</strong> A short 30-minute
                walk from Kasol.
              </p>
            </div>
          </div>
          {/* Malana Village */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="border-4 border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                6. Malana Village
              </h3>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Description:</strong> Known as one of the oldest
                villages in India, Malana offers a unique cultural experience.
                The village is famous for its ancient customs and traditional
                lifestyle, and visitors are encouraged to observe local customs
                and traditions with respect.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Activities:</strong> Cultural tours, visiting ancient
                temples, and learning about Malana’s unique heritage.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Distance from Woodward 2:</strong> Approximately 20 km,
                accessible via a short trek from the road.
              </p>
            </div>
          </div>
        </div>
        {/* Tirthan Valley */}
        <div className="w-full flex flex-col items-center px-4 space-y-10 lg:space-y-0 lg:flex-row lg:flex-wrap justify-center">
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="border-4 border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                7. Tirthan Valley
              </h3>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Description:</strong> A hidden gem in Himachal, Tirthan
                Valley is a quieter destination renowned for its pristine beauty
                and is part of the Great Himalayan National Park. It’s ideal for
                those looking to experience nature, wildlife, and adventure
                activities like trekking and fishing in an untouched landscape.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Activities:</strong> Wildlife spotting, camping,
                fishing, and trekking.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Distance from Woodward 2:</strong> 60 km, ideal for a
                day trip.
              </p>
            </div>
          </div>
          {/* Rasol Village */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="border-4 border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                8. Rasol Village
              </h3>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Description:</strong> Rasol is a peaceful village high
                up in the Parvati Valley and is accessible via a scenic trek
                from Kasol. The village offers spectacular views of the
                surrounding mountains and is a great destination for travelers
                looking to experience Himachali village life and local
                hospitality.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Activities:</strong> Trekking, village walks, and scenic
                photography.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Distance from Woodward 2:</strong> Approximately 3-4
                hours trekking from Kasol.
              </p>
            </div>
          </div>
        </div>
        {/* Nature Park Kasol */}
        <div className="w-full flex flex-col items-center px-4 space-y-10 lg:space-y-0 lg:flex-row lg:flex-wrap justify-center">
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="border-4 border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                9. Nature Park Kasol
              </h3>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Description:</strong> This small but beautiful nature
                park in Kasol is perfect for leisurely strolls and family
                outings. The park is shaded by towering pine trees and has
                well-maintained walking paths, benches, and play areas where
                families can enjoy a relaxed day out.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Activities:</strong> Walking trails, family picnics, and
                bird watching.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Distance from Woodward 2:</strong> Within Kasol, just a
                short walk away.
              </p>
            </div>
          </div>
          {/* Kasol Flea Market */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div className="border-4 border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                10. Kasol Flea Market
              </h3>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Description:</strong> For those who enjoy shopping, the
                Kasol Flea Market is a vibrant spot where you can find
                handcrafted jewelry, woolen clothing, souvenirs, and unique
                items inspired by both Indian and Tibetan cultures.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Activities:</strong> Shopping for local handicrafts,
                clothing, jewelry, and souvenirs.
              </p>
              <p className="text-lg md:text-xl font-NBI">
                <strong>Distance from Woodward 2:</strong> A few minutes’ walk
                from the hotel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default LocalAttractions;
