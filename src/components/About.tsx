
import { Target, Lightbulb, Globe, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">code2robot</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're passionate about making robotics accessible to everyone. Our mission is to bridge the gap between code and hardware, empowering the next generation of innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded by robotics enthusiasts and educators, code2robot was born from the belief that learning robotics should be engaging, accessible, and fun. We've spent years perfecting our kits and manuals to ensure every learner can succeed.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From beginners taking their first steps into robotics to advanced users pushing the boundaries of what's possible, our products are designed to grow with you on your journey.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {[
              { icon: Target, title: "Precision", desc: "Carefully crafted components" },
              { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge technology" },
              { icon: Globe, title: "Community", desc: "Global support network" },
              { icon: Rocket, title: "Growth", desc: "Scalable learning path" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
                <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 border border-blue-500/30 animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Choose code2robot?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">5+</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Years Experience</h4>
                <p className="text-gray-300 text-sm">Proven track record in robotics education</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">10k+</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Happy Customers</h4>
                <p className="text-gray-300 text-sm">Students and educators worldwide</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">24/7</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Support</h4>
                <p className="text-gray-300 text-sm">Always here to help you succeed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
