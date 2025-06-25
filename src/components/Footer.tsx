
import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-gradient-to-r from-orange-500/30 via-blue-500/30 to-teal-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-in slide-in-from-left duration-1000">
            <div className="flex items-center space-x-2 mb-4 group">
              <Bot className="h-8 w-8 text-orange-400 group-hover:animate-spin transition-all duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                code2robot
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering the next generation of innovators with cutting-edge robotics kits and educational materials. 
              Building the future, one robot at a time.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, delay: 0 },
                { Icon: Twitter, delay: 100 },
                { Icon: Instagram, delay: 200 },
                { Icon: Linkedin, delay: 300 }
              ].map(({ Icon, delay }, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-slate-800 p-2 rounded-lg text-gray-400 hover:text-orange-400 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 animate-bounce"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-in slide-in-from-bottom duration-1000 delay-300">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", id: "hero" },
                { name: "About Us", id: "about" },
                { name: "Products", id: "products" },
                { name: "Contact", id: "contact" }
              ].map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1 animate-in slide-in-from-right duration-700"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-in slide-in-from-right duration-1000 delay-500">
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {[
                { Icon: Mail, text: "support@code2robot.com", color: "orange" },
                { Icon: Phone, text: "+1 (555) 123-4567", color: "blue" },
                { Icon: MapPin, text: "123 Robotics Ave\nTech City, TC 12345", color: "teal" }
              ].map((item, index) => (
                <li key={index} className={`flex items-start space-x-3 animate-in slide-in-from-bottom duration-700`} style={{animationDelay: `${800 + index * 150}ms`}}>
                  <item.Icon className={`h-4 w-4 mt-0.5 animate-pulse ${
                    item.color === 'orange' ? 'text-orange-400' :
                    item.color === 'blue' ? 'text-blue-400' :
                    'text-teal-400'
                  }`} style={{animationDelay: `${index * 200}ms`}} />
                  <span className="text-gray-300 text-sm whitespace-pre-line">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 animate-in fade-in duration-1000 delay-1200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 code2robot. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Support"].map((link, index) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-gray-400 hover:text-orange-400 text-sm transition-all duration-300 hover:translate-x-1 animate-in slide-in-from-right duration-500"
                  style={{animationDelay: `${1400 + index * 100}ms`}}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
