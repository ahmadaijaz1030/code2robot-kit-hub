
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">code2robot</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're passionate about making robotics accessible to everyone. From students to professionals, 
            our comprehensive kits and detailed manuals help bring robotic dreams to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "Democratizing robotics education through innovative, accessible kits and comprehensive learning materials.",
              color: "orange"
            },
            {
              icon: Users,
              title: "Community",
              description: "Building a global community of makers, educators, and students passionate about robotics.",
              color: "blue"
            },
            {
              icon: Award,
              title: "Quality",
              description: "Premium components and detailed documentation ensure successful project outcomes every time.",
              color: "teal"
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "Cutting-edge designs that push the boundaries of what's possible in educational robotics.",
              color: "orange"
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-1000 ${
                item.color === 'orange' ? 'hover:border-orange-400/50 hover:shadow-lg hover:shadow-orange-400/25' :
                item.color === 'blue' ? 'hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/25' :
                'hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/25'
              }`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              <item.icon className={`h-12 w-12 mb-4 animate-bounce ${
                item.color === 'orange' ? 'text-orange-400' :
                item.color === 'blue' ? 'text-blue-400' :
                'text-teal-400'
              }`} style={{animationDelay: `${index * 300}ms`}} />
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
