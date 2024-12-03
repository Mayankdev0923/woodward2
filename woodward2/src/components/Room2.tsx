import greenbg from "../assets/greenbg.jpg";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import getDocumentFieldValue from "./FirebaseFetch";
import superiorimage from "../assets/galleryimages/rooms/DSC02917.jpg";

import DSC02914 from "../assets/galleryimages/rooms/DSC02914.jpg";
import DSC02916 from "../assets/galleryimages/rooms/DSC02916.jpg";
import DSC02917 from "../assets/galleryimages/rooms/DSC02917.jpg";
import DSC02918 from "../assets/galleryimages/rooms/DSC02918.jpg";
import DSC02920 from "../assets/galleryimages/rooms/DSC02920.jpg";
import { useMediaQuery } from "react-responsive";


const imageSources = [ 
  DSC02914, DSC02916, DSC02917, DSC02918, DSC02920
];

function Room2() {
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
    <div key={index} className="w-full md:w-1/2 p-1 md:p-2">
      <img
        alt={`Gallery image ${index + 1}`}
        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
        src={src}
        onClick={() => !isMobile && setSelectedImage(index)} // Disable expanding view on mobile
      />
    </div>
  );

  const navigate = useNavigate();

  const [prices, setPrices] = useState({
    RoomPrice: null,
  });

  useEffect(() => {
    const fetchRoomPrices = async () => {
      const Price = await getDocumentFieldValue("rooms", "Superior_Room", "Price");

      // Update state with fetched prices
      setPrices({
        RoomPrice: Price,
      });
    };

    fetchRoomPrices();
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Superior Room</title>
        </Helmet>
        <div
          className="w-full flex justify-center items-center bg-repeat text-dkkbrown bg-ltgreen"
          style={{ backgroundImage: `url(${greenbg})` }}
        >
          <div className="flex justify-center flex-col items-center space-y-10 p-10 pb-40 md:pt-20 pt-40 w-full h-full">
            <div className="flex justify-center items-center text-3xl md:text-5xl rounded-3xl px-5 py-4 border-2 border-dkkbrown w-full max-w-6xl motion-safe:animate-slideIn">
              <div className="border-2 w-full text-center rounded-2xl border-dkkbrown px-4 py-5 font-MTreg">
                -- Superior Rooms with Panoramic Views --
              </div>
            </div>
            <div className="flex flex-col md:flex-row p-5 md:p-20 justify-between space-y-10 md:space-y-0 items-center w-full max-w-8xl">
              {/* Image div takes up the same height as the content container */}
              <div
                className="w-full md:w-[45%] h-[0px] md:h-[550px] bg-cover bg-center rounded-3xl motion-safe:animate-slideIn"
                style={{ backgroundImage: `url(${superiorimage})` }}
              ></div>
              {/* Content div */}
              <div className="flex-grow w-full md:w-[45%] flex flex-col justify-center p-5 md:p-10">
                <h2 className="text-3xl md:text-5xl font-MTreg motion-safe:animate-slideIn">
                  Description:
                </h2>
                <p className="p-5 text-lg md:text-2xl motion-safe:animate-slideIn">
                  The Superior Room is our most luxurious option, featuring
                  expansive windows for panoramic mountain and valley views. This
                  spacious Room offers a private living room, making it ideal for
                  those who want the ultimate relaxation experience in Kasol.
                  <br />
                  <br />
                  <b>Amenities:</b> King-sized bed, private living area with sofa,
                  large windows, private balcony, Wi-Fi, flat-screen TV, minibar,
                  coffee/tea maker, and a luxurious en-Room bathroom with Superior
                  toiletries and a rain shower.
                  <br />
                  <b>Ideal For:</b> Honeymooners, luxury travelers.
                  <br />
                  <b>Views:</b> Panaromic Valley view of Glacier and Mountains.
                  <br />
                  <b>Price :</b> ₹ {prices.RoomPrice} per night
                </p>
                <div className="flex justify-start px-5 md:px-10">
                  <motion.button
                    onClick={() => navigate(`/Book`)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="py-3 px-5 font-MTreg rounded text-xl text-dkkbrown outline outline-2 outline-dkkbrown hover:text-white hover:bg-dkkbrown transition duration-300 motion-safe:animate-slideIn"
                  >
                    -- Book Now --
                  </motion.button>
                </div>
              </div>
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
                    alt={`Expanded image ${selectedImage + 1}`}
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
        </div>
      </>
    </HelmetProvider>
  );
}

export default Room2;
