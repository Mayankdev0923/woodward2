import { useState } from "react";
import Hvr from "./Hvr";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`py-5 px-5 md:px-20 fixed right-0 left-0 top-0 z-50 backdrop-blur-lg transition duration-300 ${
        isOpen ? "bg-transparent bg-white bg-opacity-40" : "bg-greenish bg-opacity-60"
      }`}
    >
      <div className="flex justify-between items-center w-full ">
        {/* Logo Section */}
        <div className="text-2xl font-MTreg text-dkkbrown px-3 py-2">
          <Link to="/">4WILDFLOWER</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex text-2xl text-dkkbrown">
          <ul className="font-MTreg flex  px-5 space-x-8 lg:space-x-16 items-center">
            <li className="hover:text-dkbrown transition duration-400">
              <Link to="/">
                <Hvr text="Home" />
              </Link>
            </li>
            <li className="hover:text-dkbrown transition duration-400">
              <Link to="/Gallery">
                <Hvr text="Gallery" />
              </Link>
            </li>
            <li className="hover:text-dkbrown transition duration-400">
              <Link to="/Room">
                <Hvr text="Rooms" />
              </Link>
            </li>
            <li className="hover:text-dkbrown transition duration-400">
              <Link to="/Amenities">
                <Hvr text="Amenities" />
              </Link>
            </li>
            <li className="hover:text-dkbrown transition duration-400">
              <Link to="/location">
                <Hvr text="Contact" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex font-MTreg items-center">
          <button
            onClick={toggleMenu}
            className="text-dkkbrown focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Burger Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Book Now Button */}
        <div className="hidden md:flex font-MTreg text-xl px-5 py-3 rounded-lg bg-dkkbrown text-ltgreen hover:bg-brownish hover:text-dkkbrown transition duration-400">
          <Link to="/Book">Book Now</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 font-MTreg">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block px-3 py-2 text-lg text-dkkbrown hover:text-dkbrown transition duration-300"
          >
            <Hvr text="Home" />
          </Link>
          <Link
            to="/Gallery"
            onClick={toggleMenu}
            className="block px-3 py-2 text-lg text-dkkbrown hover:text-dkbrown transition duration-300"
          >
            <Hvr text="Gallery" />
          </Link>
          <Link
            to="/Room"
            onClick={toggleMenu}
            className="block px-3 py-2 text-lg text-dkkbrown hover:text-dkbrown transition duration-300"
          >
            <Hvr text="Rooms & Suites" />
          </Link>
          <Link
            to="/Amenities"
            onClick={toggleMenu}
            className="block px-3 py-2 text-lg text-dkkbrown hover:text-dkbrown transition duration-300"
          >
            <Hvr text="Amenities" />
          </Link>
          <Link
            to="/location"
            onClick={toggleMenu}
            className="block px-3 py-2 text-lg text-dkkbrown hover:text-dkbrown transition duration-300"
          >
            <Hvr text="Location & Contact" />
          </Link>
          <Link
            to="/Book"
            className="block px-3 py-2 mt-2 rounded-lg bg-dkkbrown text-ltgreen hover:bg-brownish hover:text-dkkbrown transition duration-300 text-center"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
