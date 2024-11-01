function footer() {
  return (
    <div className="w-full h-[70vh] bg-zinc-700 space-y-10 flex flex-col justify-center items-center p-10">
      <div className="w-full text-center p-10 text-5xl text-white">
        WOODWARD II
      </div>

      <div className="w-full text-center text-white text-lg p-5 flex justify-center space-x-20 items-center">
        <div className="flex flex-col space-y-5 w-[20vw] text-left flex-wrap">
          <p>
            {"Hotel Woodward 2, near Narayan temple,"}
            <br />
            {"tehsil Kasol, Jari, Himachal Pradesh 175105"}
          </p>
          <p>
            {"Phone No: "}
            &nbsp;&nbsp;
            <a className=" transition-all duration-300 ease-in-out hover:underline " href="tel:9317707539">
              9317707539
            </a>
            ,&nbsp;
            <a className=" transition-all duration-300 ease-in-out hover:underline " href="tel:8219391994">
              8219391994
            </a>
            ,&nbsp;
            <br />
            <a className=" transition-all duration-300 ease-in-out hover:underline " href="tel:9728020888">
              9728020888
            </a>
            ,&nbsp;
            <a className=" transition-all duration-300 ease-in-out hover:underline " href="tel:9215229400">
              9215229400
            </a>
          </p>
          <p className=" transition-all duration-300 ease-in-out hover:underline ">
            Mail:{" "}
            <a href="mailto:4wildflowerhospitality@gmail.com">
              4wildflowerhospitality@gmail.com
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-20">
          <ul className="flex flex-col space-y-5 w-[10vw] text-left flex-wrap border-l-2 border-gray-400 px-10">
            <li>
              <a href="" className="hover:underline">Rooms</a>
            </li>
            <li>
              <a href="" className="hover:underline">Location</a>
            </li>
            <li>
              <a href="" className="hover:underline">Amenities</a>
            </li>
            <li>
              <a href="" className="hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="" className="hover:underline">Book Now</a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-5 w-[10vw] text-left flex-wrap border-l-2 border-gray-400 px-10">
            <li>
              <a href="" className="hover:underline">Terms & Conditions</a>
            </li>
            <li>
              <a href="" className="hover:underline">Refund Policy</a>
            </li>
            <li>
              <a href="" className="hover:underline">Bookings & Reservations</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full text-center p-10 text-gray-400">
        WOODWARD II by 4WILDFLOWER
      </div>
    </div>
  );
}

export default footer;
