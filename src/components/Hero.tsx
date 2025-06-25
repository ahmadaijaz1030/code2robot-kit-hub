import { ArrowRight, Zap, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400/10 rounded-full blur-2xl animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-400/10 rounded-full blur-2xl animate-bounce delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 my-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-in slide-in-from-bottom duration-1000">
            Build Tomorrow's
            <span className="block bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
              Robots Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-300">
            Discover our cutting-edge robotics kits and comprehensive manuals. 
            Perfect for educators, students, and robotics enthusiasts ready to bring their ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in slide-in-from-bottom duration-1000 delay-500">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
              onClick={() => scrollToSection('products')}
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/25"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "Innovative Kits", desc: "Latest robotics technology", color: "orange" },
              { icon: Users, title: "Expert Support", desc: "Dedicated customer help", color: "blue" },
              { icon: Award, title: "Proven Quality", desc: "Trusted by thousands", color: "teal" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform animate-in slide-in-from-bottom duration-1000 ${
                  item.color === 'orange' ? 'hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-400/25' :
                  item.color === 'blue' ? 'hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/25' :
                  'hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/25'
                }`}
                style={{animationDelay: `${600 + index * 200}ms`}}
              >
                <item.icon className={`h-12 w-12 mx-auto mb-4 ${
                  item.color === 'orange' ? 'text-orange-400' :
                  item.color === 'blue' ? 'text-blue-400' :
                  'text-teal-400'
                }`} style={{animationDelay: `${index * 300}ms`}} />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
