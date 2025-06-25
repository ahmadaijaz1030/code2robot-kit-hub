import { Bot, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/favicon.png" alt="Logo" className="h-8 w-8 rounded-full animate-bounce" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                code2robot
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering the next generation of innovators through accessible robotics education and cutting-edge kits.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", color: "text-gray-400 hover:text-orange-400" },
                { icon: Twitter, href: "#", color: "text-gray-400 hover:text-blue-400" },
                { icon: Linkedin, href: "#", color: "text-gray-400 hover:text-teal-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${social.color} transition-all duration-300 transform hover:scale-110`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Products", "Support", "Documentation"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-sm">support@code2robot.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-sm">Innovation City, IC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 code2robot. All rights reserved. Built with passion for robotics education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
