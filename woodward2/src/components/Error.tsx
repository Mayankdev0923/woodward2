import { Link } from "react-router-dom";
import greenbg from "../assets/greenbg.jpg";
import { Helmet,HelmetProvider } from "react-helmet-async";


function Error() {
  return (
    <HelmetProvider>
      <div
        className="w-full h-screen flex flex-col justify-center items-center font-NBI text-dkkbrown bg-cover bg-center"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Error</title>
        </Helmet>
        <p className="text-6xl md:text-9xl">404 Error</p>
        <p className="text-xl md:text-2xl text-center px-4 md:px-0">
          The URL that you entered is wrong...
        </p>
        <p className="text-xl md:text-2xl text-center px-4 md:px-0">
          Try{" "}
          <Link className="underline text-lg md:text-2xl" to="/">
            Home
          </Link>
        </p>
      </div>
    </HelmetProvider>
  );
}

export default Error;
