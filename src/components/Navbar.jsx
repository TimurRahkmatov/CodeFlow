import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuIsOpen, SetMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <span className=" text-lg sm:text-xl md:text-2xl front-medium cursor-pointer">
            <span className="text-white">Code</span>
            <span className="text-blue-400">Flow</span>
          </span>
          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              {" "}
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              {" "}
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              {" "}
              Testimonials
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
            onClick={() => SetMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X />
            ) : (
              <Menu className="h-5 w-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4  sm:py-6 space-y-3 sm:space-y-4 ">
             <a
              href="#features"
              onClick={() => SetMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              {" "}
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => SetMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              {" "}
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => SetMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              {" "}
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
