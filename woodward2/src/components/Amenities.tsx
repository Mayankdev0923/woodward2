import greenbg from "../assets/greenbg.jpg";

function Amenities() {
  return (
    <>
      <div className="w-full h-[120vh] flex flex-col justify-center items-center space-y-5 bg-ltgreen text-dkbrown"
      style={{ backgroundImage: `url(${greenbg})` }}>
        <div className="w-[80%] space-y-1">
          <div className="w-full h-[20vh] font-MTreg flex justify-center items-center text-7xl ">
            Services & Amenities
          </div>
          <span className="text-2xl text-dkbrown w-[70%] font-NBI text-center">
            <p>
              At Woodward 2, our rooms are designed to be a serene retreat, each
              blending cozy interiors with breathtaking mountain views. We offer
              various room categories to suit the needs of solo travelers,
              couples, families, and adventure groups alike. Each room is
              tastefully decorated with local art, wooden furnishings, and
              thoughtful amenities, ensuring a restful and memorable stay in
              Kasol.
            </p>
          </span>
        </div>
        <div className="w-full h-[80vh] flex-col justify-center items-center p-10 ">
          <div className="w-full h-[50%] p-10  flex justify-center items-center space-x-10">
            <div className="w-[40%]  border-[calc(10px)] bg-greenish border-darkgreen flex-col justify-center items-center p-10 space-y-10 rounded-3xl">
              <span className="text-4xl text-center flex justify-center items-center">
                • Complimentary Wi-Fi
              </span>
              <p className="text-xl text-center flex justify-center items-center ">
                Stay connected with free high-speed internet throughout your
                stay.
              </p>
            </div>
            <div className="w-[40%]  border-[calc(10px)] bg-greenish border-darkgreen flex-col justify-center items-center p-10 space-y-10 rounded-3xl">
              <span className="text-4xl text-center flex justify-center items-center">
                • 24/7 Room Service
              </span>
              <p className="text-xl text-center flex justify-center items-center ">
                Savor our menu anytime, day or night, with round-the-clock room
                service.
              </p>
            </div>
          </div>
          <div className="w-full h-[50%] p-10  flex justify-center items-center space-x-10">
            <div className="w-[40%]  border-[calc(10px)] bg-greenish border-darkgreen flex-col justify-center items-center p-10 space-y-10 rounded-3xl">
              <span className="text-4xl text-center flex justify-center items-center">
                • Tea and Coffee Maker
              </span>
              <p className="text-xl text-center flex justify-center items-center ">
                Refreshments are available in-room for a cozy start to your day.
              </p>
            </div>
            <div className="w-[40%]  border-[calc(10px)] bg-greenish border-darkgreen flex-col justify-center items-center p-10 space-y-10 rounded-3xl">
              <span className="text-4xl text-center flex justify-center items-center">
                • Housekeeping Services
              </span>
              <p className="text-xl text-center flex justify-center items-center ">
                Daily housekeeping ensures your room stays fresh and
                comfortable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Amenities;
