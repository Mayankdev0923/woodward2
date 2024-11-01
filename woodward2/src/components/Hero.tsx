import backgroundImage from "../assets/Heroimg.jpg";

function Hero() {
  return (
    <section className="w-full h-screen">
      <div
        className="w-full h-full flex justify-center items-center rounded bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      </div>
      
    </section>
  );
}

export default Hero;
