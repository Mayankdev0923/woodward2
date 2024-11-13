import Hvr from "./Hvr";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-5 px-20 text-lg fixed right-0 left-0 top-0 z-50 bg-greenish backdrop-blur-lg bg-opacity-60">
      <div className="flex justify-between w-full items-center">
        <div className="px-5 py-3 text-2xl font-MTreg text-dkkbrown">
          <Link to="/">WOODWARD II</Link>
        </div>
        <div className="text-2xl text-dkkbrown">
          <ul className="font-MTreg flex justify-space-between items-center px-5 space-x-16  ext-gray-400">
          <li className=" hover:text-dkbrown  ease-in-out transition duration-400">
              <Link to="/">
                <Hvr text="Home" />
              </Link>
            </li>
            <li className=" hover:text-dkbrown  ease-in-out transition duration-400">
              <Link to="/Gallery">
                <Hvr text="Gallery" />
              </Link>
            </li>

            <li className=" hover:text-dkbrown  ease-in-out transition duration-400">
              <Link to="/Room">
                <Hvr text="Rooms & Suites" />
              </Link>
            </li>

            <li className=" hover:text-dkbrown  ease-in-out transition duration-400">
              <Link to="/Amenities">
                <Hvr text="Amenities" />
              </Link>
            </li>

            <li className=" hover:text-dkbrown  ease-in-out transition duration-400">
              <Link to="/location">
                <Hvr text="Location & Contact" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="font-MTreg text-xl px-5 py-3 rounded-lg bg-dkkbrown text-ltgreen hover:bg-brownish hover:text-dkkbrown ease-in-out transition duration-400">
          <Link to="">Book Now</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
