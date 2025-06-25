
import { Target, Lightbulb, Globe, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-teal-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-in slide-in-from-top duration-1000">
            About <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">code2robot</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-300">
            We're passionate about making robotics accessible to everyone. Our mission is to bridge the gap between code and hardware, empowering the next generation of innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-in slide-in-from-left duration-1000 delay-500">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded by robotics enthusiasts and educators, code2robot was born from the belief that learning robotics should be engaging, accessible, and fun. We've spent years perfecting our kits and manuals to ensure every learner can succeed.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From beginners taking their first steps into robotics to advanced users pushing the boundaries of what's possible, our products are designed to grow with you on your journey.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-in slide-in-from-right duration-1000 delay-700">
            {[
              { icon: Target, title: "Precision", desc: "Carefully crafted components", color: "orange" },
              { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge technology", color: "blue" },
              { icon: Globe, title: "Community", desc: "Global support network", color: "teal" },
              { icon: Rocket, title: "Growth", desc: "Scalable learning path", color: "orange" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`text-center p-6 rounded-xl bg-gradient-to-br transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 animate-in zoom-in duration-700 ${
                  item.color === 'orange' ? 'from-orange-500/10 to-orange-600/20 border border-orange-500/20 hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-400/25' :
                  item.color === 'blue' ? 'from-blue-500/10 to-blue-600/20 border border-blue-500/20 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-400/25' :
                  'from-teal-500/10 to-teal-600/20 border border-teal-500/20 hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-400/25'
                }`}
                style={{animationDelay: `${800 + index * 150}ms`}}
              >
                <item.icon className={`h-12 w-12 mx-auto mb-4 animate-bounce ${
                  item.color === 'orange' ? 'text-orange-400' :
                  item.color === 'blue' ? 'text-blue-400' :
                  'text-teal-400'
                }`} style={{animationDelay: `${index * 200}ms`}} />
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600/20 via-blue-600/20 to-teal-600/20 rounded-2xl p-8 md:p-12 border border-orange-500/30 animate-in fade-in duration-1000 delay-1000 hover:border-orange-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-orange-400/25">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Choose code2robot?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { number: "5+", title: "Years Experience", desc: "Proven track record in robotics education", color: "orange" },
                { number: "10k+", title: "Happy Customers", desc: "Students and educators worldwide", color: "blue" },
                { number: "24/7", title: "Support", desc: "Always here to help you succeed", color: "teal" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-in zoom-in duration-700" style={{animationDelay: `${1200 + index * 200}ms`}}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse ${
                    stat.color === 'orange' ? 'bg-orange-500/20' :
                    stat.color === 'blue' ? 'bg-blue-500/20' :
                    'bg-teal-500/20'
                  }`}>
                    <span className={`text-2xl font-bold ${
                      stat.color === 'orange' ? 'text-orange-400' :
                      stat.color === 'blue' ? 'text-blue-400' :
                      'text-teal-400'
                    }`}>{stat.number}</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{stat.title}</h4>
                  <p className="text-gray-300 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
