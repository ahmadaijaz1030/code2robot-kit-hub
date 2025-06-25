
import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">code2robot</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering the next generation of innovators with cutting-edge robotics kits and educational materials. 
              Building the future, one robot at a time.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-slate-800 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", id: "hero" },
                { name: "About Us", id: "about" },
                { name: "Products", id: "products" },
                { name: "Contact", id: "contact" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">support@code2robot.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">123 Robotics Ave<br />Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 code2robot. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
