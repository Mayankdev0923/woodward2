import { useState, useRef, useEffect } from "react";
import Image1 from "../assets/bentogrid/DSC02920.jpg";
import Image2 from "../assets/bentogrid/DSC02960.jpg";
import Image3 from "../assets/bentogrid/DSC02970.jpg";
import Image4 from "../assets/bentogrid/DSC02922.jpg";

function Gallerybento() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleImageClick = (imageId: string) => {
    // Disable expanded view for mobile devices (viewport width < 768px)
    if (window.innerWidth >= 768) {
      setHoveredImage(imageId);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setHoveredImage(null); // Close the expanded view if clicked outside
    }
  };

  useEffect(() => {
    if (hoveredImage) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [hoveredImage]);

  const renderImage = (imageId: string, className: string) => (
    <div
      className={`relative ${className}`}
      onClick={() => handleImageClick(imageId)}
    >
      <div className="absolute inset-px rounded-lg bg-white"></div>
      <div
        className={`bg-cover bg-center relative flex h-full flex-col overflow-hidden min-h-[20rem] rounded-[calc(theme(borderRadius.lg)+1px)] ${
          hoveredImage === imageId ? "scale-110 z-10" : ""
        } transition-transform duration-300 cursor-pointer`}
        style={{
          backgroundImage: `url(${
            imageId == "image1"
              ? Image1
              : imageId == "image2"
              ? Image2
              : imageId == "image3"
              ? Image3
              : Image4
          })`,
        }}
      ></div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
    </div>
  );

  return (
    <div>
      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        {renderImage("image1", "lg:row-span-2")}
        {renderImage("image2", "max-lg:row-start-1")}
        {renderImage(
          "image3",
          "max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
        )}
        {renderImage("image4", "lg:row-span-2")}
      </div>

      {hoveredImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div
            ref={modalRef}
            className="bg-white p-4 rounded-lg shadow-lg max-w-4xl"
          >
            <img
              src={
                hoveredImage == "image1"
                  ? Image1
                  : hoveredImage == "image2"
                  ? Image2
                  : hoveredImage == "image3"
                  ? Image3
                  : Image4}
              alt="Expanded"
              className="rounded-lg max-h-[90vh] max-w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallerybento;
