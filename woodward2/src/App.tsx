import Navbar from "./components/Navbar";
import About from "./components/About";
import Location from "./components/Location";
import Amenities from "./components/Amenities";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navspace from "./components/Navspace";
import Room1 from "./components/Room1";
import Room2 from "./components/Room2";
import Room3 from "./components/Room3";
import Room4 from "./components/Room4";
import Room5 from "./components/Room5";
import RoomNSuites from "./components/RooomNSuites"
import { ReactLenis } from "lenis/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Navspace />
          {/* <Hero /> */}
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/Room",
      element: (
        <>
          <Navbar />
          <Navspace />
          <RoomNSuites />
          <Footer />
        </>
      ),
    },
    {
      path: "/Gallery",
      element: (
        <>
          <Navbar />
          <Navspace />
          <Gallery />
          <Footer />
        </>
      ),
    },
    {
      path: "/location",
      element: (
        <>
          <Navbar />
          <Navspace />
          <Location />
          <Footer />
        </>
      ),
    },
    {
      path: "/Amenities",
      element: (
        <>
          <Navbar />
          <Navspace />
          <Amenities />
          <Footer />
        </>
      ),
    },
    {
      path: "/Room1",
      element: (
        <>
          <Navbar />
          <Navspace />
          <Room1 />
          <Footer />
        </>
      ),
    },
    {
      path: "/Room2",
      element: (
        <>
          <Navbar />
          <Navspace />
          <Room2 />
          <Footer />
        </>
      ),
    },
    {
      path: "/Room3",
      element: (
        <>
          <Navbar />
          <Navspace />
          <Room3 />
          <Footer />
        </>
      ),
    },
    {
      path: "/Room4",
      element: (
        <>
          <Navbar />
          <Navspace />
          <Room4 />
          <Footer />
        </>
      ),
    },
    {
      path: "/Room5",
      element: (
        <>
          <Navbar />
          <Navspace />
          <Room5 />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <ReactLenis root options={{duration:1.2}}>
      <main className="bg-gray-200 min-h-screen ">
        <RouterProvider router={router} />
      </main>
    </ReactLenis>
  );
}

export default App;
