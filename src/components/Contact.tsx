
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our robotics kits? Need technical support? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
              <Mail className="h-8 w-8 text-orange-400 animate-bounce" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <p className="text-gray-400">support@code2robot.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
              <Phone className="h-8 w-8 text-blue-400 animate-bounce delay-100" />
              <div>
                <h3 className="text-lg font-semibold text-white">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
              <MapPin className="h-8 w-8 text-teal-400 animate-bounce delay-200" />
              <div>
                <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                <p className="text-gray-400">123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </div>
          </div>

          <div className="animate-in slide-in-from-right duration-1000">
            <form className="space-y-6 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or question..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
