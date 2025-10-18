import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

// Import all images statically
// Rooms
import DSC02941 from "../assets/galleryimages/rooms/DSC02941.jpg";
import DSC02942 from "../assets/galleryimages/rooms/DSC02942.jpg";
import DSC02944 from "../assets/galleryimages/rooms/DSC02944.jpg";
import DSC02945 from "../assets/galleryimages/rooms/DSC02945.jpg";
import DSC02946 from "../assets/galleryimages/rooms/DSC02946.jpg";
import DSC02914 from "../assets/galleryimages/rooms/DSC02914.jpg";
import DSC02916 from "../assets/galleryimages/rooms/DSC02916.jpg";
import DSC02917 from "../assets/galleryimages/rooms/DSC02917.jpg";
import DSC02918 from "../assets/galleryimages/rooms/DSC02918.jpg";
import DSC02920 from "../assets/galleryimages/rooms/DSC02920.jpg";
import DSC02936 from "../assets/galleryimages/rooms/DSC02936.jpg";
import DSC02937 from "../assets/galleryimages/rooms/DSC02937.jpg";
import DSC02939 from "../assets/galleryimages/rooms/DSC02939.jpg";
import DSC02940 from "../assets/galleryimages/rooms/DSC02940.jpg";

// Restaurant
import DSC02929 from "../assets/galleryimages/restraunt/DSC02929.jpg";
import DSC02932 from "../assets/galleryimages/restraunt/DSC02932.jpg";
import DSC02928 from "../assets/galleryimages/restraunt/DSC02928.jpg";

// Reception
import DSC02949 from "../assets/galleryimages/reception/DSC02949.jpg";
import DSC02950 from "../assets/galleryimages/reception/DSC02950.jpg";
import IMG_9757 from "../assets/galleryimages/reception/IMG_9757.jpg";
import DSC02948 from "../assets/galleryimages/reception/DSC02948.jpg";

// Property
import IMG_9782 from "../assets/galleryimages/property/IMG_9782.jpg";
import IMG_9784 from "../assets/galleryimages/property/IMG_9784.jpg";
import IMG_9785 from "../assets/galleryimages/property/IMG_9785.jpg";
import IMG_9787 from "../assets/galleryimages/property/IMG_9787.jpg";
import IMG_9790 from "../assets/galleryimages/property/IMG_9790.jpg";
import IMG_9791 from "../assets/galleryimages/property/IMG_9791.jpg";
import IMG_9793 from "../assets/galleryimages/property/IMG_9793.jpg";
import IMG_9796 from "../assets/galleryimages/property/IMG_9796.jpg";
import IMG_9800 from "../assets/galleryimages/property/IMG_9800.jpg";
import DSC02955 from "../assets/galleryimages/property/DSC02955.jpg";
import DSC02960 from "../assets/galleryimages/property/DSC02960.jpg";
import DSC02962 from "../assets/galleryimages/property/DSC02962.jpg";
import DSC02965 from "../assets/galleryimages/property/DSC02965.jpg";
import DSC02967 from "../assets/galleryimages/property/DSC02967.jpg";
import DSC02969 from "../assets/galleryimages/property/DSC02969.jpg";

// More property images...
import IMG_9731 from "../assets/galleryimages/property/IMG_9731.jpg";
import IMG_9732 from "../assets/galleryimages/property/IMG_9732.jpg";
import IMG_9733 from "../assets/galleryimages/property/IMG_9733.jpg";
import IMG_9734 from "../assets/galleryimages/property/IMG_9734.jpg";
import IMG_9738 from "../assets/galleryimages/property/IMG_9738.jpg";
import IMG_9739 from "../assets/galleryimages/property/IMG_9739.jpg";
import IMG_9741 from "../assets/galleryimages/property/IMG_9741.jpg";
import IMG_9746a from "../assets/galleryimages/property/IMG_9746a.jpg";
import IMG_9750 from "../assets/galleryimages/property/IMG_9750.jpg";
import IMG_9751 from "../assets/galleryimages/property/IMG_9751.jpg";
import IMG_9752 from "../assets/galleryimages/property/IMG_9752.jpg";
import IMG_9758 from "../assets/galleryimages/property/IMG_9758.jpg";
import IMG_9760 from "../assets/galleryimages/property/IMG_9760.jpg";
import IMG_9761 from "../assets/galleryimages/property/IMG_9761.jpg";
import IMG_9763 from "../assets/galleryimages/property/IMG_9763.jpg";
import IMG_9764 from "../assets/galleryimages/property/IMG_9764.jpg";
import IMG_9765 from "../assets/galleryimages/property/IMG_9765.jpg";
import IMG_9766 from "../assets/galleryimages/property/IMG_9766.jpg";
import IMG_9767 from "../assets/galleryimages/property/IMG_9767.jpg";
import IMG_9768 from "../assets/galleryimages/property/IMG_9768.jpg";
import IMG_9772 from "../assets/galleryimages/property/IMG_9772.jpg";
import IMG_9776 from "../assets/galleryimages/property/IMG_9776.jpg";
import IMG_9778 from "../assets/galleryimages/property/IMG_9778.jpg";
import IMG_9780 from "../assets/galleryimages/property/IMG_9780.jpg";
import IMG_9781 from "../assets/galleryimages/property/IMG_9781.jpg";

// Consolidated array of imported images
const imageSources = [
  IMG_9739, IMG_9741, IMG_9746a, IMG_9750, IMG_9751,
  IMG_9752, IMG_9758, IMG_9760, IMG_9761, IMG_9763,
  IMG_9764, IMG_9765, IMG_9766, IMG_9767, IMG_9768,
  IMG_9772, IMG_9776, IMG_9778, IMG_9780, IMG_9781,
  DSC02949, DSC02950, IMG_9757, DSC02948,
  IMG_9782, IMG_9784, IMG_9785, IMG_9787, IMG_9790,
  IMG_9791, IMG_9793, IMG_9796, IMG_9800, DSC02955,
  DSC02960, DSC02962, DSC02965, DSC02967, DSC02969,
  IMG_9731, IMG_9732, IMG_9733, IMG_9734, IMG_9738,
  DSC02941, DSC02942, DSC02944, DSC02945, DSC02946,
  DSC02914, DSC02916, DSC02917, DSC02918, DSC02920,
  DSC02936, DSC02937, DSC02939, DSC02940,
  DSC02929, DSC02932, DSC02928
];

// LazyImage Component with Intersection Observer
interface LazyImageProps {
  src: string;
  alt: string;
  index: number;
  onClick?: () => void;
}

function LazyImage({ src, alt, index, onClick }: LazyImageProps) {
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
        rootMargin: "50px", // Start loading 50px before entering viewport
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
        {/* Placeholder with aspect ratio */}
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
          {/* Loading spinner/placeholder */}
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

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Detect screen size for disabling modal on mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
      <div
        className="bg-ltgreen"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Gallery - 4 Wildflower Hospitality</title>
          <meta
            name="description"
            content="Explore our gallery showcasing beautifully designed rooms, amenities, and property views at Woodward II, Kasol."
          />
        </Helmet>

        {/* Header */}
        <div className="w-full h-[20vh] p-10 flex justify-center items-center text-4xl md:text-7xl font-MTreg text-dkbrown animate-slideIn">
          Our Gallery
        </div>

        {/* Description */}
        <div className="text-xl md:text-2xl text-dkbrown w-[80%] md:w-[70%] mx-auto text-center font-NBI px-4 animate-slideIn">
          <p>
            Our hotel's gallery showcases the charm and elegance that await you,
            offering a glimpse into our beautifully designed spaces and
            top-notch amenities.
          </p>
        </div>

        {/* Gallery Images with Lazy Loading */}
        <div className="container mx-auto px-5 py-20 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {imageSources.map((src, index) => (
              <LazyImage
                key={index}
                src={src}
                alt={`Gallery image ${index + 1} - 4 Wildflower Hospitality`}
                index={index}
                onClick={() => !isMobile && setSelectedImage(index)}
              />
            ))}
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
                alt={`Expanded image ${selectedImage + 1}`}
                className="rounded-lg h-full w-full object-contain"
                loading="eager"
              />
              <div className="flex justify-between mt-4">
                {/* Previous Button */}
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

                {/* Next Button */}
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
    </HelmetProvider>
  );
}

export default Gallery;
