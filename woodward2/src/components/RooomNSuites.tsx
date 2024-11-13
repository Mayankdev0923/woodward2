import { Link } from "react-router-dom";

function RoomNSuites() {
  return (
    <>
      <div className="w-full text-lg text-center py-5 bg-lime-200 flex flex-col justify-center items-center space-y-5">
        <div className="w-full h-[30vh] bg-red-400 flex flex-col justify-center items-center space-y-5">
          <span className="text-7xl">Rooms & Suites</span>
          <span className="text-xl w-[70%]">
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

        <div className="w-full h-[300vh] bg-blue-400 flex flex-col justify-center items-center space-y-20">
          <div className="w-[90%] h-[30%] flex justify-center items-center space-x-10">
            <div className="w-[40%] h-full bg-lime-900 flex flex-col py-20 justify-start items-center space-y-5">
              <div className="w-[80%] h-[50%] bg-yellow-300"></div>
              <div className="w-[80%] h-[20%] bg-yellow-300 space-y-2 flex flex-col justify-center items-center">
                <span>
                  <p className="text-2xl">Eco Room</p>
                </span>
                <span>
                  <p>the room that is for ecology enthusiasts.</p>
                </span>
              </div>
              <button className="w-[80%] h-[10%] bg-yellow-300 flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-green-800 hover:border-0 text-center flex justify-center items-center text-xl text-gray-900">
                  <Link to="/Room1">View Details</Link>
                </div>
              </button>
              <button className="w-[80%] h-[10%] bg-yellow-300 flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-green-800 hover:border-0 text-center flex justify-center items-center text-xl text-gray-900">
                  <Link to="/">Book Now</Link>
                </div>
              </button>
            </div>

            <div className="w-[40%] h-full bg-lime-900 flex flex-col py-20 justify-start items-center space-y-5">
              <div className="w-[80%] h-[50%] bg-yellow-300"></div>
              <div className="w-[80%] h-[20%] bg-yellow-300 space-y-2 flex flex-col justify-center items-center">
                <span>
                  <p className="text-2xl">Eco Room</p>
                </span>
                <span>
                  <p>the room that is for ecology enthusiasts.</p>
                </span>
              </div>
              <button className="w-[80%] h-[10%] bg-yellow-300 flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-green-800 hover:border-0 text-center flex justify-center items-center text-xl text-gray-900">
                  <Link to="/Room2">View Details</Link>
                </div>
              </button>
              <button className="w-[80%] h-[10%] bg-yellow-300 flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-green-800 hover:border-0 text-center flex justify-center items-center text-xl text-gray-900">
                  <Link to="/">Book Now</Link>
                </div>
              </button>
            </div>
          </div>

          <div className="w-[90%] h-[30%] flex justify-center items-center space-x-10">
            <div className="w-[40%] h-full bg-lime-900 flex flex-col py-20 justify-start items-center space-y-5">
              <div className="w-[80%] h-[50%] bg-yellow-300"></div>
              <div className="w-[80%] h-[20%] bg-yellow-300 space-y-2 flex flex-col justify-center items-center">
                <span>
                  <p className="text-2xl">Eco Room</p>
                </span>
                <span>
                  <p>the room that is for ecology enthusiasts.</p>
                </span>
              </div>
              <button className="w-[80%] h-[10%] bg-yellow-300 flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-green-800 hover:border-0 text-center flex justify-center items-center text-xl text-gray-900">
                  <Link to="/Room3">View Details</Link>
                </div>
              </button>
              <button className="w-[80%] h-[10%] bg-yellow-300 flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-green-800 hover:border-0 text-center flex justify-center items-center text-xl text-gray-900">
                  <Link to="/">Book Now</Link>
                </div>
              </button>
            </div>

            <div className="w-[40%] h-full bg-lime-900 flex flex-col py-20 justify-start items-center space-y-5">
              <div className="w-[80%] h-[50%] bg-yellow-300"></div>
              <div className="w-[80%] h-[20%] bg-yellow-300 space-y-2 flex flex-col justify-center items-center">
                <span>
                  <p className="text-2xl">Eco Room</p>
                </span>
                <span>
                  <p>the room that is for ecology enthusiasts.</p>
                </span>
              </div>
              <button className="w-[80%] h-[10%] bg-yellow-300 flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-green-800 hover:border-0 text-center flex justify-center items-center text-xl text-gray-900">
                  <Link to="/Room4">View Details</Link>
                </div>
              </button>
              <button className="w-[80%] h-[10%] bg-yellow-300 flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-green-800 hover:border-0 text-center flex justify-center items-center text-xl text-gray-900">
                  <Link to="/">Book Now</Link>
                </div>
              </button>
            </div>
          </div>

          <div className="w-[90%] h-[30%] flex justify-center items-center space-x-10">
            <div className="w-[40%] h-full bg-lime-900 flex flex-col py-20 justify-start items-center space-y-5">
              <div className="w-[80%] h-[50%] bg-yellow-300"></div>
              <div className="w-[80%] h-[20%] bg-yellow-300 space-y-2 flex flex-col justify-center items-center">
                <span>
                  <p className="text-2xl">Eco Room</p>
                </span>
                <span>
                  <p>the room that is for ecology enthusiasts.</p>
                </span>
              </div>
              <button className="w-[80%] h-[10%] bg-yellow-300 flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-green-800 hover:border-0 text-center flex justify-center items-center text-xl text-gray-900">
                  <Link to="/Room5">View Details</Link>
                </div>
              </button>
              <button className="w-[80%] h-[10%] bg-yellow-300 flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-green-800 hover:border-0 text-center flex justify-center items-center text-xl text-gray-900">
                  <Link to="/">Book Now</Link>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomNSuites;
