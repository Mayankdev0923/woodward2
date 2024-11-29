import { Link } from "react-router-dom";
import backgroundImage from "../assets/footerbg.jpg";

function Footer() {
  return (
    <div
      className="w-full py-10 h-fit bg-dkkbrown flex flex-col justify-center items-center space-y-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Footer Title */}
      <div className="font-MTreg w-full text-center text-4xl md:text-5xl text-peachish p-5">
        WOODWARD II
      </div>

      {/* Footer Content */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start md:items-center text-white text-left text-lg md:text-xl font-semibold space-y-10 md:space-y-0 md:space-x-20 md:p-5 px-10">
        {/* Address Section */}
        <div className="flex flex-col space-y-5 w-[70%] md:w-[30%] px-0 md:px-5">
          <p>
            {"Hotel Woodward 2, near Narayan temple,"}
            <br />
            {"tehsil Kasol, Jari, Himachal Pradesh 175105"}
          </p>
          <p>
            {"Phone No: "}
            <a
              className="transition-all duration-300 ease-in-out hover:underline"
              href="tel:9317707539"
            >
              9317707539
            </a>
            ,&nbsp;
            <a
              className="transition-all duration-300 ease-in-out hover:underline"
              href="tel:8219391994"
            >
              8219391994
            </a>
            ,&nbsp;
            <br />
            <a
              className="transition-all duration-300 ease-in-out hover:underline"
              href="tel:9728020888"
            >
              9728020888
            </a>
            ,&nbsp;
            <a
              className="transition-all duration-300 ease-in-out hover:underline"
              href="tel:9215229400"
            >
              9215229400
            </a>
          </p>
          <p className="transition-all duration-300 ease-in-out hover:underline">
            Mail:{" "}
            <a href="mailto:4wildflowerhospitality@gmail.com">
              4wildflowerhospitality@gmail.com
            </a>
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-center items-start space-y-10 md:space-y-0 md:space-x-10 px-0 md:px-5 ">
          <ul className="flex flex-col space-y-3 w-full md:w-auto text-left border-t md:border-t-0 md:border-l-2 border-white pt-5 md:pt-0 md:px-5">
            <li>
              <Link to="/Room" className="hover:underline">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/LocalAttractions" className="hover:underline">
                Local Attractions
              </Link>
            </li>
            <li>
              <Link to="/location" className="hover:underline">
                Location
              </Link>
            </li>
            <li>
              <Link to="/Amenities" className="hover:underline">
                Amenities
              </Link>
            </li>
            <li>
              <Link to="/Book" className="hover:underline">
                Book Now
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-3 w-full md:w-auto text-left border-t md:border-t-0 md:border-l-2 border-white pt-5 md:pt-0 md:px-5">
            <li>
              <Link to="/TermsAndPolicies" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/BookingPolicies" className="hover:underline">
                Bookings & Reservations
              </Link>
            </li>
            <li>
              <Link to="/Login" className="hover:underline">
                Admin Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="font-MTreg w-full text-center text-sm md:text-base p-5 text-white filter brightness-75">
        WOODWARD II by 4WILDFLOWER
      </div>
    </div>
  );
}

export default Footer;
