import greenbg from "../assets/greenbg.jpg";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import getDocumentFieldValue from "./FirebaseFetch";
import superiorimage from "../assets/galleryimages/rooms/DSC02917.jpg";
import { useMediaQuery } from "react-responsive";

import DSC02914 from "../assets/galleryimages/rooms/DSC02914.jpg";
import DSC02916 from "../assets/galleryimages/rooms/DSC02916.jpg";
import DSC02917 from "../assets/galleryimages/rooms/DSC02917.jpg";
import DSC02918 from "../assets/galleryimages/rooms/DSC02918.jpg";
import DSC02920 from "../assets/galleryimages/rooms/DSC02920.jpg";

const imageSources = [
  DSC02914, DSC02916, DSC02917, DSC02918, DSC02920
];

// LazyImage Component with Intersection Observer
interface LazyImageProps {
  src: string;
  alt: string;
  index: number;
  onClick?: () => void;
}

function LazyImage({ src, alt, onClick }: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <div className="w-full md:w-1/2 p-1 md:p-2">
      <div className="relative overflow-hidden rounded-lg bg-gray-200">
        <div className="aspect-[4/3] w-full">
          <img
            ref={imgRef}
            src={imageSrc || undefined}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`block h-full w-full object-cover object-center cursor-pointer transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onClick={onClick}
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="animate-pulse text-gray-400">Loading...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Room2() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [prices, setPrices] = useState({
    RoomPrice: null,
  });

  useEffect(() => {
    const fetchRoomPrices = async () => {
      const Price = await getDocumentFieldValue("rooms", "Superior_Room", "Price");
      setPrices({
        RoomPrice: Price,
      });
    };

    fetchRoomPrices();
  }, []);

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < imageSources.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    if (selectedImage !== null && !isMobile) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedImage, isMobile]);

  return (
    <HelmetProvider>
      <>
        <div
          className="w-full flex justify-center items-center bg-repeat text-dkkbrown bg-ltgreen"
          style={{ backgroundImage: `url(${greenbg})` }}
        >
          {/* Enhanced SEO Meta Tags */}
          <Helmet>
            <title>Superior Room in Kasol - Luxury Mountain View Suite at Woodward II</title>
            <meta
              name="description"
              content="Book our luxurious Superior Room at Woodward II Kasol - panoramic valley views, king-sized bed, private balcony, living area. Perfect for honeymooners & families. ₹3500/night."
            />
            <meta
              name="keywords"
              content="Superior room Kasol, luxury hotel room Kasol, mountain view suite, Woodward 2 premium room, honeymoon room Parvati Valley, best room in Kasol"
            />
            <link rel="canonical" href="https://www.4wildflowerhospitality.com/Room2" />
            
            {/* Open Graph Tags */}
            <meta property="og:type" content="product" />
            <meta property="og:title" content="Superior Room in Kasol - Luxury Mountain View Suite at Woodward II" />
            <meta
              property="og:description"
              content="Spacious luxury Superior Room with panoramic Himalayan views, private living area, king bed, and premium amenities at Woodward II Kasol."
            />
            <meta property="og:url" content="https://www.4wildflowerhospitality.com/Room2" />
            <meta property="og:image" content={superiorimage} />
            
            {/* Product Schema for Room */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Superior Room - Woodward II Kasol",
                "description": "Luxurious spacious room with panoramic mountain and valley views, king-sized bed, private living area with sofa, large windows, private balcony, complimentary Wi-Fi, flat-screen TV, minibar, coffee/tea maker, and luxurious en-suite bathroom with premium toiletries and rain shower. Perfect for honeymooners and luxury travelers.",
                "image": [superiorimage, ...imageSources],
                "brand": {
                  "@type": "Brand",
                  "name": "4 Wildflower Hospitality"
                },
                "offers": {
                  "@type": "Offer",
                  "price": prices.RoomPrice || "3500",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "url": "https://www.4wildflowerhospitality.com/Room2",
                  "priceValidUntil": "2026-12-31"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "35"
                }
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
                    "name": "Rooms",
                    "item": "https://www.4wildflowerhospitality.com/Room"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Superior Room",
                    "item": "https://www.4wildflowerhospitality.com/Room2"
                  }
                ]
              })}
            </script>
          </Helmet>

          <div className="flex justify-center flex-col items-center space-y-10 p-10 pb-40 md:pt-20 pt-40 w-full h-full">
            {/* Room Title */}
            <div className="flex justify-center items-center text-3xl md:text-5xl rounded-3xl px-5 py-4 border-2 border-dkkbrown w-full max-w-6xl motion-safe:animate-slideIn">
              <h1 className="border-2 w-full text-center rounded-2xl border-dkkbrown px-4 py-5 font-MTreg">
                Superior Room - Panoramic Mountain Views
              </h1>
            </div>

            {/* Room Details Section */}
            <div className="flex flex-col md:flex-row p-5 md:p-20 justify-between space-y-10 md:space-y-0 items-center w-full max-w-8xl">
              {/* Hero Image */}
              {/* <div
                className="w-full md:w-[45%] h-[300px] md:h-[550px] bg-cover bg-center rounded-3xl motion-safe:animate-slideIn shadow-lg"
                style={{ backgroundImage: `url(${superiorimage})` }}
                role="img"
                aria-label="Superior Room at Woodward II Kasol with panoramic mountain and valley views"
              ></div> */}

              {/* Content */}
              <article className="flex-grow w-full md:w-[45%] flex flex-col justify-center p-5 md:p-10">
                <h2 className="text-3xl md:text-5xl font-MTreg motion-safe:animate-slideIn mb-4">
                  Premium Room Experience
                </h2>
                <div className="text-lg md:text-2xl space-y-4 motion-safe:animate-slideIn">
                  <p>
                    The Superior Room represents our most luxurious accommodation option, thoughtfully 
                    designed for discerning travelers seeking the ultimate Himalayan retreat experience. 
                    This spacious suite features expansive floor-to-ceiling windows offering breathtaking 
                    panoramic views of the Parvati Valley, snow-capped Himalayan peaks, and lush green 
                    mountains. The room's elegant design combines modern luxury with traditional Himachali 
                    aesthetics, creating a perfect sanctuary for relaxation and romance in the heart of Kasol.
                  </p>
                  
                  <div className="space-y-3 pt-4">
                    <div>
                      <strong className="text-dkbrown">Premium Room Amenities:</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Luxurious king-sized bed with premium mattress and high-thread-count linens</li>
                        <li>Separate private living area with comfortable sofa and coffee table</li>
                        <li>Expansive windows with unobstructed panoramic mountain and valley views</li>
                        <li>Private spacious balcony with seating for enjoying sunrise/sunset</li>
                        <li>Complimentary high-speed Wi-Fi for streaming and remote work</li>
                        <li>40-inch flat-screen Smart TV with cable and streaming options</li>
                        <li>Well-stocked minibar with beverages and snacks</li>
                        <li>Premium coffee and tea making facilities with selection of teas</li>
                        <li>Luxurious en-suite bathroom with rain shower and modern fixtures</li>
                        <li>Premium branded toiletries and bath amenities</li>
                        <li>Plush bathrobes and slippers</li>
                        <li>Large wardrobe with ample storage and safe</li>
                        <li>Work desk with ergonomic chair and multiple charging points</li>
                        <li>Air conditioning/heating for year-round comfort</li>
                        <li>24/7 room service and concierge assistance</li>
                      </ul>
                    </div>

                    <p>
                      <strong className="text-dkbrown">Ideal For:</strong> Honeymooners seeking romantic 
                      privacy, luxury travelers desiring premium comfort, families needing extra space, 
                      couples celebrating special occasions, and guests planning extended stays in Kasol.
                    </p>

                    <p>
                      <strong className="text-dkbrown">Views:</strong> Stunning 180-degree panoramic vistas 
                      of the Parvati Valley, glacier-covered Himalayan peaks, terraced fields, pine forests, 
                      and the serene Parvati River flowing below. Witness spectacular sunrises painting the 
                      mountains golden from your private balcony.
                    </p>

                    <p>
                      <strong className="text-dkbrown">Room Size:</strong> Approximately 400 sq ft of 
                      luxurious living space, perfect for 2-3 guests seeking premium comfort.
                    </p>

                    <p className="text-3xl font-bold text-dkbrown">
                      Price: ₹ {prices.RoomPrice || "3,500"} per night
                    </p>
                  </div>
                </div>

                <div className="flex justify-start mt-6">
                  <motion.button
                    onClick={() => navigate(`/Book`)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="py-3 px-8 font-MTreg rounded-lg text-xl text-white bg-dkkbrown hover:bg-opacity-90 transition duration-300 motion-safe:animate-slideIn"
                    aria-label="Book Superior Room at Woodward II Kasol"
                  >
                    Book This Premium Room
                  </motion.button>
                </div>
              </article>
            </div>

            {/* Additional Features Section */}
            <div className="w-full max-w-7xl px-6 py-10 bg-white bg-opacity-90 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-dkbrown">
                What Makes This Room Exceptional
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border-2 border-darkgreen rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-2 text-dkbrown">Panoramic Valley Views</h3>
                  <p>Floor-to-ceiling windows and private balcony offer 180-degree Himalayan vistas that take your breath away.</p>
                </div>
                <div className="p-4 border-2 border-darkgreen rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-2 text-dkbrown">Spacious Luxury</h3>
                  <p>Separate living area, king bed, and 400 sq ft of space provide comfort and privacy unmatched in Kasol.</p>
                </div>
                <div className="p-4 border-2 border-darkgreen rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-2 text-dkbrown">Premium Amenities</h3>
                  <p>Smart TV, minibar, rain shower, premium toiletries, and personalized service elevate your stay.</p>
                </div>
              </div>
            </div>

            {/* Room Gallery with Lazy Loading */}
            <div className="w-full ">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-dkbrown">
                Superior Room Photo Gallery
              </h2>
              <div className="container mx-auto px-5 lg:px-32">
                <div className="-m-1 flex flex-wrap md:-m-2">
                  {imageSources.map((src, index) => (
                    <LazyImage
                      key={index}
                      src={src}
                      alt={`Superior Room at Woodward II Kasol - ${
                        index === 0 ? 'panoramic mountain view from balcony' :
                        index === 1 ? 'spacious living area with sofa' :
                        index === 2 ? 'luxurious king-sized bed and furnishings' :
                        index === 3 ? 'premium en-suite bathroom with rain shower' :
                        'elegant room interior and amenities'
                      }`}
                      index={index}
                      onClick={() => !isMobile && setSelectedImage(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Why Book This Room */}
            <div className="w-full max-w-7xl px-6 py-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-dkbrown">
                Why Choose the Superior Room?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div className="p-4 border-l-4 border-dkbrown">
                  <h3 className="text-xl font-semibold mb-2">Perfect for Honeymooners</h3>
                  <p>
                    Romantic ambiance with panoramic views, private balcony for intimate moments, 
                    spacious layout for comfort, and luxurious amenities create the perfect 
                    honeymoon experience in the Himalayas.
                  </p>
                </div>
                <div className="p-4 border-l-4 border-dkbrown">
                  <h3 className="text-xl font-semibold mb-2">Unmatched Valley Views</h3>
                  <p>
                    Wake up to stunning Himalayan sunrises, watch clouds drift through valleys, 
                    spot snow-covered peaks from your bed, and enjoy sunset views painting 
                    mountains in golden hues.
                  </p>
                </div>
                <div className="p-4 border-l-4 border-dkbrown">
                  <h3 className="text-xl font-semibold mb-2">Ultimate Comfort & Space</h3>
                  <p>
                    Extra living area for relaxation, king-sized bed for luxurious sleep, ample 
                    storage, and separate zones for work and rest make this ideal for extended stays.
                  </p>
                </div>
                <div className="p-4 border-l-4 border-dkbrown">
                  <h3 className="text-xl font-semibold mb-2">Premium Service & Amenities</h3>
                  <p>
                    Smart TV for entertainment, minibar convenience, rain shower luxury, premium 
                    toiletries, and dedicated concierge service ensure a 5-star experience in Kasol.
                  </p>
                </div>
              </div>
            </div>

            {/* Guest Experience Section */}
            <div className="w-full max-w-7xl px-6 py-10 bg-white bg-opacity-90 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-dkbrown">
                Superior Room Guest Experience
              </h2>
              <div className="text-lg md:text-xl space-y-4 text-center">
                <p>
                  <strong>Romance & Celebration:</strong> Our Superior Room is Kasol's premier choice 
                  for honeymoons, anniversaries, and special celebrations. We can arrange romantic 
                  room decorations, flower arrangements, private candlelight dinners on your balcony, 
                  and special surprises to make your occasion unforgettable.
                </p>
                <p>
                  <strong>Best Views in Kasol:</strong> Positioned strategically to capture the most 
                  spectacular Parvati Valley panoramas, this room offers views that rival any luxury 
                  resort in Himachal Pradesh. The private balcony becomes your personal viewing 
                  platform for nature's daily spectacle.
                </p>
                <p>
                  <strong>Work & Leisure Balance:</strong> For digital nomads and remote workers, the 
                  separate living area with work desk, high-speed Wi-Fi, and inspiring mountain views 
                  creates an ideal productive environment while maintaining vacation ambiance.
                </p>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="text-center space-y-4 py-10">
              <h2 className="text-3xl md:text-4xl font-bold text-dkbrown">
                Ready for a Luxury Mountain Escape?
              </h2>
              <p className="text-xl md:text-2xl text-dkbrown">
                Book the Superior Room and experience Kasol's finest accommodation with panoramic Himalayan views.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => navigate('/Book')}
                  className="px-10 py-4 text-xl font-semibold text-white bg-dkkbrown rounded-lg hover:bg-opacity-90 transition duration-300"
                >
                  Book Superior Room
                </button>
                <button
                  onClick={() => navigate('/Room')}
                  className="px-10 py-4 text-xl font-semibold text-dkkbrown border-2 border-dkkbrown rounded-lg hover:bg-dkkbrown hover:text-white transition duration-300"
                >
                  Compare All Rooms
                </button>
              </div>
            </div>

            {/* Modal for Expanded View (Desktop Only) */}
            {!isMobile && selectedImage !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                <div
                  ref={modalRef}
                  className="bg-white p-4 rounded-lg shadow-lg w-[60rem] relative"
                >
                  <img
                    src={imageSources[selectedImage]}
                    alt={`Expanded Superior Room view ${selectedImage + 1}`}
                    className="rounded-lg h-full w-full object-contain"
                    loading="eager"
                  />
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={handlePrevious}
                      disabled={selectedImage === 0}
                      className={`px-4 py-2 rounded-lg ${
                        selectedImage === 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-dkkbrown text-white"
                      }`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={selectedImage === imageSources.length - 1}
                      className={`px-4 py-2 rounded-lg ${
                        selectedImage === imageSources.length - 1
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-dkkbrown text-white"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    </HelmetProvider>
  );
}

export default Room2;
