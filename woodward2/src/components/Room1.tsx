import { motion } from "framer-motion";
import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import getDocumentFieldValue from "./FirebaseFetch";
import executiveimage from "../assets/galleryimages/rooms/DSC02936.jpg";
import { useMediaQuery } from "react-responsive";

import DSC02941 from "../assets/galleryimages/rooms/DSC02941.jpg";
import DSC02942 from "../assets/galleryimages/rooms/DSC02942.jpg";
import DSC02944 from "../assets/galleryimages/rooms/DSC02944.jpg";
import DSC02945 from "../assets/galleryimages/rooms/DSC02945.jpg";
import DSC02946 from "../assets/galleryimages/rooms/DSC02946.jpg";
import DSC02936 from "../assets/galleryimages/rooms/DSC02936.jpg";
import DSC02937 from "../assets/galleryimages/rooms/DSC02937.jpg";
import DSC02939 from "../assets/galleryimages/rooms/DSC02939.jpg";
import DSC02940 from "../assets/galleryimages/rooms/DSC02940.jpg";

const imageSources = [
  DSC02942, DSC02944, DSC02945, DSC02946, DSC02936,
  DSC02937, DSC02939, DSC02941, DSC02940,
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

function Room1() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [prices, setPrices] = useState({
    RoomPrice: null,
  });

  useEffect(() => {
    const fetchRoomPrices = async () => {
      const Price = await getDocumentFieldValue(
        "rooms",
        "Executive_Room",
        "Price"
      );
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
          className="w-full flex justify-center items-center text-dkkbrown bg-ltgreen"
          style={{
            backgroundImage: `url(${greenbg})`,
            backgroundSize: "cover",
          }}
        >
          {/* Enhanced SEO Meta Tags */}
          <Helmet>
            <title>Executive Room in Kasol - Garden View Room at Woodward II</title>
            <meta
              name="description"
              content="Book our Executive Room at Woodward II Kasol - eco-friendly room with garden view, mountain vista, double bed, Wi-Fi, balcony. Perfect for couples & solo travelers. ₹2500/night."
            />
            <meta
              name="keywords"
              content="Executive room Kasol, eco-friendly hotel room, garden view room Kasol, Woodward 2 Executive, budget room Parvati Valley, sustainable accommodation"
            />
            <link rel="canonical" href="https://www.4wildflowerhospitality.com/Room1" />
            
            {/* Open Graph Tags */}
            <meta property="og:type" content="product" />
            <meta property="og:title" content="Executive Room in Kasol - Garden View Room at Woodward II" />
            <meta
              property="og:description"
              content="Eco-friendly Executive Room with garden and mountain views at Woodward II Kasol. Modern amenities, sustainable design, perfect for eco-conscious travelers."
            />
            <meta property="og:url" content="https://www.4wildflowerhospitality.com/Room1" />
            <meta property="og:image" content={executiveimage} />
            
            {/* Product Schema for Room */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Executive Room - Woodward II Kasol",
                "description": "Eco-friendly room with garden view, mountain vista, double bed, natural ventilation, complimentary Wi-Fi, sustainable toiletries, recycled furnishings, and private balcony. Perfect for solo travelers and couples seeking sustainable accommodation in Kasol.",
                "image": [executiveimage, ...imageSources],
                "brand": {
                  "@type": "Brand",
                  "name": "4 Wildflower Hospitality"
                },
                "offers": {
                  "@type": "Offer",
                  "price": prices.RoomPrice || "2500",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "url": "https://www.4wildflowerhospitality.com/Room1",
                  "priceValidUntil": "2026-12-31"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.5",
                  "reviewCount": "28"
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
                    "name": "Executive Room",
                    "item": "https://www.4wildflowerhospitality.com/Room1"
                  }
                ]
              })}
            </script>
          </Helmet>

          <div className="flex justify-center flex-col items-center space-y-10 p-10 pb-40 md:pt-20 pt-40 w-full h-full">
            {/* Room Title */}
            <div className="flex justify-center items-center text-3xl md:text-5xl rounded-3xl px-5 py-4 border-2 border-dkkbrown w-full max-w-6xl motion-safe:animate-slideIn">
              <h1 className="border-2 w-full text-center rounded-2xl border-dkkbrown px-4 py-5 font-MTreg">
                Executive Room - Eco-Friendly Garden View
              </h1>
            </div>

            {/* Room Details Section */}
            <div className="flex flex-col md:flex-row p-5 md:p-20 justify-between space-y-10 md:space-y-0 items-center w-full max-w-8xl">
              {/* Hero Image */}
              {/* <div
                className="w-full md:w-[45%] h-[300px] md:h-[550px] bg-cover bg-center rounded-3xl motion-safe:animate-slideIn shadow-lg"
                style={{ backgroundImage: `url(${executiveimage})` }}
                role="img"
                aria-label="Executive Room at Woodward II Kasol with garden and mountain view"
              ></div> */}

              {/* Content */}
              <article className="flex-grow w-full  md:w-[45%] flex flex-col justify-center p-5 md:p-10">
                <h2 className="text-3xl md:text-5xl font-MTreg motion-safe:animate-slideIn mb-4">
                  Room Overview
                </h2>
                <div className="text-lg  md:text-2xl space-y-4 motion-safe:animate-slideIn">
                  <p>
                    Our Executive Room is thoughtfully designed for eco-conscious travelers seeking 
                    a sustainable, comfortable stay in the heart of Kasol. This room features 
                    environmentally responsible materials, abundant natural light, and minimal 
                    environmental impact design. The decor draws inspiration from the natural beauty 
                    of Himachal Pradesh, incorporating local wooden elements and traditional patterns 
                    while maintaining modern comfort standards.
                  </p>
                  
                  <div className="space-y-3 pt-4">
                    <div>
                      <strong className="text-dkbrown">Room Amenities:</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Comfortable double bed with premium mattress and fresh linens</li>
                        <li>Large windows with natural ventilation and garden views</li>
                        <li>Complimentary high-speed Wi-Fi throughout your stay</li>
                        <li>Eco-friendly, biodegradable toiletries and bath products</li>
                        <li>Recycled and upcycled wooden furnishings</li>
                        <li>Private balcony overlooking garden and mountains</li>
                        <li>24/7 hot water in attached modern bathroom</li>
                        <li>Tea and coffee making facilities</li>
                        <li>Wardrobe with hangers and storage space</li>
                        <li>Reading lamp and multiple charging points</li>
                      </ul>
                    </div>

                    <p>
                      <strong className="text-dkbrown">Ideal For:</strong> Solo travelers, couples, 
                      eco-conscious guests, digital nomads, and anyone seeking a sustainable mountain 
                      retreat experience.
                    </p>

                    <p>
                      <strong className="text-dkbrown">Views:</strong> Immersive glacier and mountain 
                      panoramas combined with peaceful garden views. Wake up to stunning Himalayan 
                      sunrise vistas from your private balcony.
                    </p>

                    <p>
                      <strong className="text-dkbrown">Room Size:</strong> Approximately 250 sq ft, 
                      perfect for 1-2 guests.
                    </p>

                    <p className="text-3xl font-bold text-dkbrown">
                      Price: ₹ {prices.RoomPrice || "2,500"} per night
                    </p>
                  </div>
                </div>

                <div className="flex justify-start mt-6">
                  <motion.button
                    onClick={() => navigate(`/Book`)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="py-3 px-8 font-MTreg rounded-lg text-xl text-white bg-dkkbrown hover:bg-opacity-90 transition duration-300 motion-safe:animate-slideIn"
                    aria-label="Book Executive Room at Woodward II Kasol"
                  >
                    Book This Room Now
                  </motion.button>
                </div>
              </article>
            </div>

            {/* Additional Features Section */}
            <div className="w-full max-w-7xl px-6 py-10 bg-white bg-opacity-90 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-dkbrown">
                What Makes This Room Special
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border-2 border-darkgreen rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-2 text-dkbrown">Eco-Friendly Design</h3>
                  <p>Sustainable materials, recycled furnishings, and minimal environmental footprint.</p>
                </div>
                <div className="p-4 border-2 border-darkgreen rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-2 text-dkbrown">Natural Light & Views</h3>
                  <p>Large windows and balcony provide abundant natural light and mountain panoramas.</p>
                </div>
                <div className="p-4 border-2 border-darkgreen rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-2 text-dkbrown">Perfect Location</h3>
                  <p>Ground floor with easy garden access, close to reception and dining area.</p>
                </div>
              </div>
            </div>

            {/* Room Gallery with Lazy Loading */}
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-dkbrown">
                Executive Room Photo Gallery
              </h2>
              <div className="container mx-auto px-5 lg:px-32">
                <div className="-m-1 flex flex-wrap md:-m-2">
                  {imageSources.map((src, index) => (
                    <LazyImage
                      key={index}
                      src={src}
                      alt={`Executive Room at Woodward II Kasol - view ${index + 1} showing ${
                        index < 3 ? 'interior' : index < 6 ? 'balcony and mountain view' : 'amenities and furnishings'
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
                Why Book the Executive Room?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div className="p-4 border-l-4 border-dkbrown">
                  <h3 className="text-xl font-semibold mb-2">Best Value for Money</h3>
                  <p>
                    Affordable pricing without compromising on comfort, cleanliness, or amenities. 
                    Perfect for budget-conscious travelers who appreciate quality.
                  </p>
                </div>
                <div className="p-4 border-l-4 border-dkbrown">
                  <h3 className="text-xl font-semibold mb-2">Sustainable Travel Choice</h3>
                  <p>
                    Make an environmentally responsible choice with our eco-friendly room featuring 
                    sustainable materials and practices.
                  </p>
                </div>
                <div className="p-4 border-l-4 border-dkbrown">
                  <h3 className="text-xl font-semibold mb-2">Quiet & Peaceful</h3>
                  <p>
                    Garden-facing position ensures tranquility away from street noise while still 
                    being steps away from Kasol's attractions.
                  </p>
                </div>
                <div className="p-4 border-l-4 border-dkbrown">
                  <h3 className="text-xl font-semibold mb-2">Perfect for Long Stays</h3>
                  <p>
                    Comfortable workspace, ample storage, and homely atmosphere make this ideal 
                    for extended Kasol visits and workations.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="text-center space-y-4 py-10">
              <h2 className="text-3xl md:text-4xl font-bold text-dkbrown">
                Ready to Experience Sustainable Comfort?
              </h2>
              <p className="text-xl md:text-2xl text-dkbrown">
                Book your Executive Room today and enjoy eco-friendly hospitality in the heart of Kasol.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => navigate('/Book')}
                  className="px-10 py-4 text-xl font-semibold text-white bg-dkkbrown rounded-lg hover:bg-opacity-90 transition duration-300"
                >
                  Book Now
                </button>
                <button
                  onClick={() => navigate('/Room')}
                  className="px-10 py-4 text-xl font-semibold text-dkkbrown border-2 border-dkkbrown rounded-lg hover:bg-dkkbrown hover:text-white transition duration-300"
                >
                  View All Rooms
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
                    alt={`Expanded Executive Room view ${selectedImage + 1}`}
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

export default Room1;
