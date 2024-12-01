import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const imageSources = [
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
];

function Gallery() {
  const [inView, setInView] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Detect screen size for disabling modal on mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
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
      setSelectedImage(null); // Close modal when clicked outside
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

  const renderImage = (src: string, index: number) => (
    <div
      key={index}
      className={`w-full md:w-1/2 p-1 md:p-2 transition-transform duration-700 delay-${
        index * 200
      } ${inView ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
    >
      <img
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
        src={src}
        onClick={() => !isMobile && setSelectedImage(index)} // Disable expanding view on mobile
      />
    </div>
  );

  return (
    <HelmetProvider>
      <div
        className="bg-ltgreen"
        style={{ backgroundImage: `url(${greenbg})` }}
        ref={sectionRef}
      >
        <Helmet>
          <title>Gallery</title>
        </Helmet>

        {/* Header */}
        <div
          className={`w-full h-[20vh] p-10 flex justify-center items-center text-4xl md:text-7xl font-MTreg text-dkbrown transition-transform duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Our Gallery
        </div>

        {/* Description */}
        <div
          className={`text-xl md:text-2xl text-dkbrown w-[80%] md:w-[70%] mx-auto text-center font-NBI px-4 transition-transform duration-700 delay-200 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p>
            Our hotel’s gallery showcases the charm and elegance that await you,
            offering a glimpse into our beautifully designed spaces and
            top-notch amenities.
          </p>
        </div>

        {/* Gallery Images */}
        <div className="container mx-auto px-5 py-20 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {imageSources.map((src, index) => renderImage(src, index))}
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
                alt="Expanded"
                className="rounded-lg h-full w-full object-contain"
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
