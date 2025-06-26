import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCallback, useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const isMobile = useIsMobile();

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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-blue-500/5 to-teal-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Community</span> Says
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of educators, students, and robotics enthusiasts who trust code2robot for their learning journey.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 relative overflow-hidden group">
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Quote className="h-10 w-10 text-orange-400" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-orange-400 fill-current mr-1"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-300 mb-8 leading-relaxed italic text-lg font-medium">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center mt-auto">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500/30 to-teal-500/30 flex items-center justify-center mr-4 ring-2 ring-white/20">
                          <span className="text-white font-bold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm font-medium">{testimonial.role}</p>
                          <p className="text-teal-400 text-xs font-semibold">{testimonial.company}</p>
                        </div>
                      </div>

                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/10 via-blue-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Buttons */}
            <div className="flex items-center justify-center mt-12 gap-8">
              <button
                onClick={scrollPrev}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === index + 1
                        ? "bg-gradient-to-r from-orange-400 to-teal-400 scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </Carousel>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20 animate-in fade-in duration-1000 delay-1000">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 max-w-3xl mx-auto hover:bg-white/10 transition-all duration-500">
            <h3 className="text-3xl font-bold text-white mb-6">
              Join Our Growing Community
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Ready to start your robotics journey? Join thousands of satisfied customers worldwide and transform your learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('products');
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Shop Now
              </button>
              {isMobile && (
                <button 
                  onClick={() => {
                    const phoneNumber = "+923008427008";
                    const message = "Hi! I'd like to know more about your robotics kits and join your community.";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Contact Us
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
