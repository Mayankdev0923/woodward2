import Hvr from "./Hvr";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-5 px-20 text-lg fixed right-0 left-0 top-0 z-50 bg-white">
      <div className="flex justify-between w-full items-center">
        <div className="px-5 py-3 text-xl">
          <Link to="/">WOODWARD II</Link>
        </div>
        <div className="text-xl">
          <ul className="flex justify-space-between items-center px-5 space-x-10  ext-gray-400">
          <li className=" hover:text-black  ease-in-out transition duration-400">
              <Link to="/">
                <Hvr text="Home" />
              </Link>
            </li>
            <li className=" hover:text-black  ease-in-out transition duration-400">
              <Link to="/Gallery">
                <Hvr text="Gallery" />
              </Link>
            </li>

            <li className=" hover:text-black  ease-in-out transition duration-400">
              <Link to="/Room">
                <Hvr text="Rooms & Suites" />
              </Link>
            </li>

            <li className=" hover:text-black  ease-in-out transition duration-400">
              <Link to="/Amenities">
                <Hvr text="Amenities" />
              </Link>
            </li>

            <li className=" hover:text-black  ease-in-out transition duration-400">
              <Link to="/location">
                <Hvr text="Location & Contact" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-600 hover:text-white ease-in-out transition duration-400">
          <Link to="">Book Now</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
