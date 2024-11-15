import backgroundImage from "../assets/valley.jpg";
import { useNavigate } from "react-router-dom";
import greenbg from "../assets/greenbg.jpg";

function RoomNSuites() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="w-full text-lg text-center bg-ltgreen py-10 bg-hwite flex flex-col justify-center items-center space-y-10"
        style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
      >
        {/* Increased height of the header section */}
        <div className="w-full h-[40vh] flex flex-col justify-center items-center space-y-5 px-4 md:px-10">
          <span className="text-5xl md:text-7xl font-MTreg text-dkbrown">
            Rooms & Suites
          </span>
          <span className="text-xl md:text-2xl text-dkbrown w-[80%] md:w-[60%] font-NBI">
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

        {/* Added gap and ensured proper alignment for the room blocks */}
        <div className="w-full flex flex-wrap justify-center items-center gap-10 px-10">
          {[1, 2, 3, 4, 5].map((roomNumber) => (
            <div
              key={roomNumber}
              className="w-full md:w-[40%] h-auto bg-greenish border-[10px] border-darkgreen rounded-3xl flex flex-col py-10 justify-start items-center space-y-7"
            >
              <div
                className="w-[80%] h-[300px] bg-brownish rounded-2xl" // Set fixed height to ensure visibility
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover", // Ensures the image fully covers the div
                  backgroundPosition: "center", // Keeps the image centered
                  backgroundRepeat: "no-repeat", // Prevents tiling of the image
                  borderRadius: "16px", // Ensures it maintains rounded corners
                }}
              ></div>

              <div className="w-[80%] h-[20%] space-y-3 flex flex-col justify-center items-center">
                <span>
                  <p className="text-3xl font-MTreg">
                    --{" "}
                    {roomNumber === 1
                      ? "Eco Room"
                      : roomNumber === 2
                      ? "Premium Suite"
                      : roomNumber === 3
                      ? "Family Suite"
                      : roomNumber === 4
                      ? "Superior Room with Balcony"
                      : "Deluxe Mountain View Room"}
                    --
                  </p>
                </span>
                <span>
                  <p>
                    {roomNumber === 1
                      ? "Our Eco-Lodge Room provides an eco-friendly stay."
                      : roomNumber === 2
                      ? "The Premium Suite offers luxurious space."
                      : roomNumber === 3
                      ? "The Family Suite is ideal for families."
                      : roomNumber === 4
                      ? "The Superior Room provides an expansive living space."
                      : "It is perfect for couples or solo travelers."}
                  </p>
                </span>
              </div>
              <div className="w-[80%] flex flex-col justify-between items-center space-y-5">
                <button
                  onClick={() => navigate(`/Room${roomNumber}`)}
                  className="w-full md:w-[48%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center py-2 px-2"
                >
                  <div className="w-full h-full border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen text-center flex justify-center items-center text-xl md:text-2xl text-dkkbrown">
                    View Details
                  </div>
                </button>
                <button className="w-full md:w-[48%] h-[10%] hover:bg-dkbrown hover:text-ltgreen text-dkkbrown font-MTreg bg-brownish rounded-xl flex justify-center items-center py-2 px-2">
                  <div className="w-full h-full border-2 border-ltgreen hover:bg-dkbrown rounded hover:text-ltgreen text-center flex justify-center items-center text-xl md:text-2xl text-dkkbrown">
                    Book Now
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RoomNSuites;
