
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Tomorrow's
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Robots Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge robotics kits and comprehensive manuals. 
            Perfect for educators, students, and robotics enthusiasts ready to bring their ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('products')}
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Zap, title: "Innovative Kits", desc: "Latest robotics technology" },
              { icon: Users, title: "Expert Support", desc: "Dedicated customer help" },
              { icon: Award, title: "Proven Quality", desc: "Trusted by thousands" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
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
