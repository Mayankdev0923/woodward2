import { Link } from "react-router-dom";
import backgroundImage from "../assets/valley.jpg";
import { useNavigate } from "react-router-dom";
import greenbg from "../assets/greenbg.jpg";

function RoomNSuites() {
  const navigate = useNavigate();
  const Room1 = () => {
    navigate("/Room1");
  };
  const Room2 = () => {
    navigate("/Room2");
  };
  const Room3 = () => {
    navigate("/Room3");
  };
  const Room4 = () => {
    navigate("/Room4");
  };
  const Room5 = () => {
    navigate("/Room5");
  };

  return (
    <>
      <div className="w-full text-lg text-center bg-ltgreen py-5 bg-hwite flex flex-col justify-center items-center space-y-5 "
      style={{ backgroundImage: `url(${greenbg})` }}>
        <div className="w-full h-[30vh]  flex flex-col justify-center items-center space-y-5">
          <span className="text-7xl font-MTreg text-dkbrown">
            Rooms & Suites
          </span>
          <span className="text-2xl text-dkbrown w-[70%] font-NBI">
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

        <div className="w-full h-[300vh] flex flex-col justify-center items-center space-y-20">
          <div className="w-[90%] h-[30%] flex justify-center items-center space-x-10">
            <div className="w-[40%]  h-full bg-greenish border-[calc(10px)] border-darkgreen rounded-3xl flex flex-col py-20 justify-start items-center space-y-5">
              <div
                className="w-[80%] h-[50%] bg-brownish  rounded-2xl"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              <div className="w-[80%] h-[20%]  space-y-2 flex flex-col justify-center items-center">
                <span>
                  <p className="text-3xl font-MTreg">-- Eco Room --</p>
                </span>
                <span>
                  <p>
                    Our Eco-Lodge Room provides an eco-friendly stay .
                  </p>
                </span>
              </div>
              <button
                onClick={Room1}
                className="w-[80%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center"
              >
                <div className="w-[95%] h-[70%] border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen  text-center flex justify-center items-center text-2xl text-dkkbrown">
                  <Link to="/Room1">View Details</Link>
                </div>
              </button>
              <button className="w-[80%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen  text-center flex justify-center items-center text-2xl text-dkkbrown">
                  <Link to="/">Book Now</Link>
                </div>
              </button>
            </div>

            <div className="w-[40%] h-full bg-greenish border-[calc(10px)] border-darkgreen rounded-3xl flex flex-col py-20 justify-start items-center space-y-5">
              <div
                className="w-[80%] h-[50%] bg-brownish rounded-2xl"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              <div className="w-[80%] h-[20%]  space-y-2 flex flex-col justify-center items-center">
                <span>
                  <p className="text-3xl font-MTreg">
                    -- Premium Suite --
                  </p>
                </span>
                <span>
                  <p>
                    The Premium Suite offers luxurious space.
                  </p>
                </span>
              </div>
              <button
                onClick={Room2}
                className="w-[80%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center"
              >
                <div className="w-[95%] h-[70%] border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen  text-center flex justify-center items-center text-2xl text-dkkbrown">
                  <Link to="/Room2">View Details</Link>
                </div>
              </button>
              <button className="w-[80%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen  text-center flex justify-center items-center text-2xl text-dkkbrown">
                  <Link to="/">Book Now</Link>
                </div>
              </button>
            </div>
          </div>

          <div className="w-[90%] h-[30%] flex justify-center items-center space-x-10">
            <div className="w-[40%] h-full bg-greenish border-[calc(10px)] border-darkgreen rounded-3xl flex flex-col py-20 justify-start items-center space-y-5">
              <div
                className="w-[80%] h-[50%] bg-brownish rounded-2xl"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              <div className="w-[80%] h-[20%]  space-y-2 flex flex-col justify-center items-center">
                <span>
                  <p className="text-3xl font-MTreg">-- Family Suite --</p>
                </span>
                <span>
                  <p>
                    The Family Suite is ideal for families.
                  </p>
                </span>
              </div>
              <button
                onClick={Room3}
                className="w-[80%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center"
              >
                <div className="w-[95%] h-[70%] border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen  text-center flex justify-center items-center text-2xl text-dkkbrown">
                  <Link to="/Room3">View Details</Link>
                </div>
              </button>
              <button className="w-[80%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen  text-center flex justify-center items-center text-2xl text-dkkbrown">
                  <Link to="/">Book Now</Link>
                </div>
              </button>
            </div>

            <div className="w-[40%] h-full bg-greenish border-[calc(10px)] border-darkgreen rounded-3xl flex flex-col py-20 justify-start items-center space-y-5">
              <div
                className="w-[80%] h-[50%] bg-brownish rounded-2xl"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              <div className="w-[80%] h-[20%]  space-y-2 flex flex-col justify-center items-center">
                <span>
                  <p className="text-3xl font-MTreg">-- Superior Room with Balcony --</p>
                </span>
                <span>
                  <p>The Superior Room provides an expansive living space.</p>
                </span>
              </div>
              <button
                onClick={Room4}
                className="w-[80%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center"
              >
                <div className="w-[95%] h-[70%] border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen  text-center flex justify-center items-center text-2xl text-dkkbrown">
                  <Link to="/Room4">View Details</Link>
                </div>
              </button>
              <button className="w-[80%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen  text-center flex justify-center items-center text-2xl text-dkkbrown">
                  <Link to="/">Book Now</Link>
                </div>
              </button>
            </div>
          </div>

          <div className="w-[90%] h-[30%] flex justify-center items-center space-x-10">
            <div className="w-[40%] h-full bg-greenish border-[calc(10px)] border-darkgreen rounded-3xl flex flex-col py-20 justify-start items-center space-y-5">
              <div
                className="w-[80%] h-[50%] bg-brownish  rounded-2xl"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              <div className="w-[80%] h-[20%]  space-y-2 flex flex-col justify-center items-center">
                <span>
                  <p className="text-3xl font-MTreg">-- Deluxe Mountain View Room --</p>
                </span>
                <span>
                  <p>It is perfect for couples or solo travelers.</p>
                </span>
              </div>
              <button
                onClick={Room5}
                className="w-[80%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center"
              >
                <div className="w-[95%] h-[70%] border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen  text-center flex justify-center items-center text-2xl text-dkkbrown">
                  <Link to="/Room5">View Details</Link>
                </div>
              </button>
              <button className="w-[80%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center">
                <div className="w-[95%] h-[70%] border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen  text-center flex justify-center items-center text-2xl text-dkkbrown">
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
