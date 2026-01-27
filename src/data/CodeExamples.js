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
};


export const FloatingCards = {
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textCOlor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "Ai-powered code suggestions in real-time",

    },
    "Hero.jsx": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textCOlor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: ">",
        title: "Auto Animation",
        content: "Dynamic typing effects generated automatically",

    },
    "Navbar.jsx": {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textCOlor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "+",
        title: "Smart Search",
        content: "Intelligent code search across your project",

    },
}



