
import { useState, useEffect } from "react";
import { Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Bot className="h-8 w-8 text-blue-400 animate-pulse" />
            <span className="text-2xl font-bold text-white">code2robot</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
