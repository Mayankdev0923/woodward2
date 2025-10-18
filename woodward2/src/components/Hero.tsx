import backgroundImage from "../assets/Heroimg.jpg";

function Hero() {
  return (
    <section 
      className="w-full h-screen"
      aria-label="Hero section - Woodward II Kasol hotel introduction"
    >
      <div
        className="w-full h-full flex justify-center items-center rounded bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label="Scenic view of Woodward II hotel nestled in Kasol mountains, Himachal Pradesh"
      >
        {/* Text Container with SEO-optimized content */}
        <div className="relative z-10 text-center px-5 sm:px-20 lg:px-40">
          {/* H1 optimized for primary keyword */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold text-shadow-md">
            Best Hotel in Kasol – Woodward II, Your Himalayan Retreat
          </h1>
          
          {/* Enhanced description with keywords */}
          <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-white font-medium text-shadow-md">
            Nestled amidst the pristine mountains and lush greenery of Kasol, Himachal Pradesh, 
            Woodward 2 offers more than accommodation—experience nature, adventure, and serenity 
            in the heart of Parvati Valley. Your perfect mountain getaway awaits.
          </p>
          
          {/* Optional CTA button */}
          <div className="mt-8 flex justify-center gap-4">
            <a 
              href="/Book"
              className="px-8 py-3 bg-white text-dkkbrown font-semibold rounded-lg hover:bg-opacity-90 transition duration-300 shadow-lg"
              aria-label="Book your stay at Woodward II Kasol"
            >
              Book Your Stay
            </a>
            <a 
              href="/Room"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dkkbrown transition duration-300"
              aria-label="Explore available rooms at Woodward II"
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
