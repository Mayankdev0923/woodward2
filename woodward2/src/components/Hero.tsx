import backgroundImage from "../assets/Heroimg.jpg";

function Hero() {
  return (
    <section className="w-full h-screen">
      <div
        className="w-full h-full flex justify-center items-center rounded bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

        {/* Text Container */}
        <div className="relative z-10 text-center px-5 sm:px-20 lg:px-40">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold text-shadow-md">
            Welcome to Woodward-2, Your Himalayan Retreat in Kasol
          </h1>
          <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-white font-medium text-shadow-md">
            Nestled amidst the pristine mountains and lush greenery of Kasol,
            Himachal Pradesh, Woodward 2 is more than just a place to stay—it's an experience designed to connect you with nature, adventure, and serenity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
