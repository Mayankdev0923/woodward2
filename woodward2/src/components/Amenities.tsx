function Amenities() {
  return (
    <>
      <div className="w-full h-[120vh] flex flex-col justify-center items-center space-y-5 bg-lime-50">
        <div className="w-full h-[20vh] bg-lime-300 flex justify-center items-center text-6xl">
          Services & Amenities
        </div>
        <div className="w-full h-[80vh] bg-lime-400 flex-col justify-center items-center p-10 ">
          <div className="w-full h-[50%] p-10 bg-blue-700 flex justify-center items-center space-x-10">
            <div className="w-[40%] h-[80%] flex-col justify-center items-center p-10 bg-white space-y-10 rounded-xl">
              <span className="text-4xl text-center flex justify-center items-center">
                • Complimentary Wi-Fi
              </span>
              <p className="text-xl text-center flex justify-center items-center ">
                Stay connected with free high-speed internet throughout your
                stay.
              </p>
            </div>
            <div className="w-[40%] h-[80%] flex-col justify-center items-center p-10 bg-white space-y-10 rounded-xl">
              <span className="text-4xl text-center flex justify-center items-center">
                • 24/7 Room Service
              </span>
              <p className="text-xl text-center flex justify-center items-center ">
                Savor our menu anytime, day or night, with round-the-clock room
                service.
              </p>
            </div>
          </div>
          <div className="w-full h-[50%] p-10 bg-blue-700 flex justify-center items-center space-x-10">
            <div className="w-[40%] h-[80%] flex-col justify-center items-center p-10 bg-white space-y-10 rounded-xl">
              <span className="text-4xl text-center flex justify-center items-center">
                • Tea and Coffee Maker
              </span>
              <p className="text-xl text-center flex justify-center items-center ">
                Refreshments are available in-room for a cozy start to your day.
              </p>
            </div>
            <div className="w-[40%] h-[80%] flex-col justify-center items-center p-10 bg-white space-y-10 rounded-xl">
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
