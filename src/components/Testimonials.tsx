
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Robotics Professor, MIT",
      image: "/placeholder.svg",
      content: "The quality of these robotics kits is exceptional. My students have learned more in one semester using code2robot kits than in previous years with traditional methods.",
      rating: 5,
      company: "Massachusetts Institute of Technology"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "STEM Coordinator",
      image: "/placeholder.svg",
      content: "These kits have transformed our robotics program. The step-by-step manuals are incredibly detailed and the support is outstanding.",
      rating: 5,
      company: "Lincoln High School"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Robotics Enthusiast",
      image: "/placeholder.svg",
      content: "As a beginner, I was intimidated by robotics. The beginner kit made everything so accessible and fun. Now I'm working on advanced projects!",
      rating: 5,
      company: "Independent Learner"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Engineering Student",
      image: "/placeholder.svg",
      content: "The advanced kit challenged me in all the right ways. The Bluetooth connectivity and programmable features opened up endless possibilities.",
      rating: 5,
      company: "Stanford University"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Maker Space Director",
      image: "/placeholder.svg",
      content: "Our maker space members love these kits. The quality is professional-grade and the educational value is immense. Highly recommended!",
      rating: 5,
      company: "TechHub Maker Space"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Parent & Engineer",
      image: "/placeholder.svg",
      content: "Bought this for my 14-year-old daughter. She's now more interested in engineering than ever. The perfect blend of education and fun.",
      rating: 5,
      company: "Family Purchase"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Community</span> Says
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of educators, students, and robotics enthusiasts who trust code2robot for their learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-1000 hover:shadow-xl hover:shadow-orange-500/20 relative overflow-hidden"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="h-8 w-8 text-orange-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-orange-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/30 to-teal-500/30 flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-teal-400 text-xs">{testimonial.company}</p>
                </div>
              </div>

              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/10 via-blue-400/10 to-teal-400/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-in fade-in duration-1000 delay-1000">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-gray-300 mb-6">
              Ready to start your robotics journey? Join thousands of satisfied customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('products');
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Shop Now
              </button>
              <button 
                onClick={() => {
                  const phoneNumber = "+923008427008";
                  const message = "Hi! I'd like to know more about your robotics kits and join your community.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
