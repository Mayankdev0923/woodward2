import Navbar from "./components/Navbar";
import About from "./components/About";
import Location from "./components/Location";
import Amenities from "./components/Amenities";
import BookingPolicies from "./components/Policies";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navspace from "./components/Navspace";
import Room1 from "./components/Room1";
import Room2 from "./components/Room2";
import Room3 from "./components/Room3";
import Room4 from "./components/Room4";
import Room5 from "./components/Room5";
import Error from "./components/Error";
import RoomNSuites from "./components/RooomNSuites";
import { ReactLenis } from "lenis/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TermsAndPolicies from "./components/Terms";
import LocalAttractions from "./components/LocalAttractions";
import HotelBookingForm from "./components/Book";
import ScrollToTop from "./components/ScrollToTop";
import ConfirmationPage from "./components/ConfirmationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
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
          <ScrollToTop />
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
          <ScrollToTop />
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
          <ScrollToTop />
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
          <ScrollToTop />
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
          <ScrollToTop />
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
          <ScrollToTop />
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
          <ScrollToTop />
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
          <ScrollToTop />
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
          <ScrollToTop />
          <Navbar />
          <Navspace />
          <Room5 />
          <Footer />
        </>
      ),
    },
    {
      path: "/BookingPolicies",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Navspace />
          <BookingPolicies />
          <Footer />
        </>
      ),
    },
    {
      path: "/TermsAndPolicies",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Navspace />
          <TermsAndPolicies />
          <Footer />
        </>
      ),
    },
    {
      path: "/LocalAttractions",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Navspace />
          <LocalAttractions />
          <Footer />
        </>
      ),
    },
    {
      path: "/*",
      element: (
        <>
          <Error />
        </>
      ),
    },
    {
      path: "/Book",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Navspace />
          <HotelBookingForm />
          <Footer />
        </>
      ),
    },
    {
      path: "/Confirmation",
      element: (
        <>
          <ScrollToTop />
          <Navbar />
          <Navspace />
          <ConfirmationPage />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <ReactLenis root options={{ duration: 1.2 }}>
      <main className="bg-gray-200 min-h-screen ">
        <RouterProvider router={router}></RouterProvider>
      </main>
    </ReactLenis>
  );
}

export default App;
