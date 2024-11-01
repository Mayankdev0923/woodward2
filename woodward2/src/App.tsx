import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      <main className="bg-gray-200 min-h-screen ">
        <Navbar />
        <Hero />
        <About />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
