import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";

function Gallery() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
        }
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
          Woodward's Gallery
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
            top-notch amenities. See the spaces where our guests gather, from
            the vibrant lobby to scenic outdoor areas, perfect for unwinding or
            taking in the views. Browse through to get a feel for the ambiance
            and luxury that make our hotel a memorable destination.
          </p>
        </div>

        {/* Gallery Images */}
        <div className="container mx-auto px-5 py-20 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {/* First Row */}
            <div className="flex w-full md:w-1/2 flex-wrap">
              <div
                className={`w-full md:w-1/2 p-1 md:p-2 transition-transform duration-700 delay-200 ${
                  inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div
                className={`w-full md:w-1/2 p-1 md:p-2 transition-transform duration-700 delay-400 ${
                  inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div
                className={`w-full p-1 md:p-2 transition-transform duration-700 delay-600 ${
                  inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex w-full md:w-1/2 flex-wrap">
              <div
                className={`w-full p-1 md:p-2 transition-transform duration-700 delay-200 ${
                  inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div
                className={`w-full md:w-1/2 p-1 md:p-2 transition-transform duration-700 delay-400 ${
                  inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div
                className={`w-full md:w-1/2 p-1 md:p-2 transition-transform duration-700 delay-600 ${
                  inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Gallery;
