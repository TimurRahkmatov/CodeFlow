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
