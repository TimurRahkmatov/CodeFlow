export const CodeExamples = {
    "App.jsx" : `
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden ">
      <Navbar />
      <Hero />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App; 
    `,
    "Hero.jsx" : `
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function Hero() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden ">
      <Navbar />
      <Hero />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Hero; 
    `,
    "Navbar.jsx" : `
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function Navbar() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden ">
      <Navbar />
      <Hero />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Navbar; 
    `
}