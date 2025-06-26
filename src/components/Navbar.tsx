import { useState, useEffect } from "react";
import { Menu, X, Bot, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const isHome = location.pathname === "/";
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      navigate(`/#${sectionId}`);
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-orange-500/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <img src="/favicon.png" alt="Logo" className="h-8 w-8 rounded-full animate-bounce group-hover:animate-spin transition-all duration-1000" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              code2robot
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Home", "About", "Products", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group transform hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300"
              >
                <ShoppingCart className="h-6 w-6" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {getCartCount()}
                  </span>
                )}
              </Button>
            </Link>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300"
              >
                {isOpen ? <X className="h-6 w-6 rotate-180 transition-transform duration-300" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-0 p-4 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Products", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="text-gray-300 hover:text-orange-400 block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:bg-orange-400/10 rounded-md transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
              <Link to="/cart" className="block">
                <button className="text-gray-300 hover:text-orange-400 px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 hover:bg-orange-400/10 rounded-md transform hover:translate-x-2">
                  Cart ({getCartCount()})
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
