import Hvr from "./Hvr";

function Navbar() {
  return (
    <nav className="py-5 px-20 text-lg fixed right-0 left-0 top-0 z-50 bg-white">
      <div className="flex justify-between w-full items-center">
        <div className="px-5 py-3 text-xl">WOODWARD II</div>
        <div>
          <ul className="flex justify-space-between items-center px-5 space-x-10 text-gray-400">
            <a href="">
              <li className=" hover:text-black  ease-in-out transition-duration-400">
                <Hvr text="Gallery" />
              </li>
            </a>
            <a href="">
              <li className=" hover:text-black  ease-in-out transition-duration-400">
              <Hvr text="Rooms"/>
              </li>
            </a>
            <a href="">
              <li className=" hover:text-black  ease-in-out transition-duration-400">
              <Hvr text="Contact Us"/>
              </li>
            </a>
            <a href="">
              <li className=" hover:text-black  ease-in-out transition-duration-400">
              <Hvr text="Location"/>
              </li>
            </a>
          </ul>
        </div>
        <div className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-600 hover:text-white ease-in-out transition-duration-400">
          <a href="">Book Now</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;