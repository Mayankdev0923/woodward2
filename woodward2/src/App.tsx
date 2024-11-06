import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Navspace from "./components/navspace";
import RoomNSuites from "./components/RooomNSuites"
import { ReactLenis, useLenis } from "lenis/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Navspace />
          <Hero />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <Navspace />
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
