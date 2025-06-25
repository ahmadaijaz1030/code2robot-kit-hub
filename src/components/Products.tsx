
import { ShoppingCart, Book, Cpu, Wrench, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const kits = [
    {
      id: 1,
      name: "Beginner Robot Kit",
      price: "$149",
      originalPrice: "$199",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      description: "Perfect for newcomers to robotics. Includes all basic components and step-by-step guides.",
      features: ["Arduino-compatible board", "10+ sensors", "Servo motors", "LED matrix display"],
      rating: 4.8,
      reviews: 127,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Advanced AI Robot Kit",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "For experienced builders ready to explore AI and machine learning in robotics.",
      features: ["AI processing unit", "Camera module", "Voice recognition", "Advanced sensors"],
      rating: 4.9,
      reviews: 89,
      badge: "New"
    },
    {
      id: 3,
      name: "Classroom Bundle",
      price: "$799",
      originalPrice: "$999",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      description: "Complete solution for educators with 5 robot kits and teaching materials.",
      features: ["5 complete kits", "Teacher's guide", "Online resources", "Free support"],
      rating: 5.0,
      reviews: 45,
      badge: "Educator's Choice"
    }
  ];

  const manuals = [
    {
      id: 1,
      name: "Robotics Fundamentals",
      price: "$29",
      type: "Digital Manual",
      pages: "150+ pages",
      description: "Comprehensive guide covering robotics basics, programming, and project ideas.",
      topics: ["Basic Electronics", "Programming Concepts", "Sensor Integration", "Project Gallery"]
    },
    {
      id: 2,
      name: "Advanced Programming Guide",
      price: "$39",
      type: "Digital Manual",
      pages: "200+ pages",
      description: "Deep dive into advanced programming techniques for robotics applications.",
      topics: ["AI Algorithms", "Computer Vision", "Machine Learning", "Advanced Projects"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our range of high-quality robotics kits and educational materials designed to inspire and educate.
          </p>
        </div>

        {/* Robotics Kits */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Cpu className="h-8 w-8 text-blue-400 mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Robotics Kits</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kits.map((kit, index) => (
              <Card key={kit.id} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-fade-in backdrop-blur-sm" style={{animationDelay: `${index * 150}ms`}}>
                <CardHeader className="relative">
                  {kit.badge && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {kit.badge}
                    </div>
                  )}
                  <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                    <img src={kit.image} alt={kit.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-white text-xl">{kit.name}</CardTitle>
                  <CardDescription className="text-gray-300">{kit.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(kit.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      ))}
                      <span className="text-white ml-2 text-sm">{kit.rating}</span>
                      <span className="text-gray-400 ml-1 text-sm">({kit.reviews})</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {kit.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <ArrowRight className="h-3 w-3 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">{kit.price}</span>
                    <span className="text-gray-400 line-through text-sm">{kit.originalPrice}</span>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Manuals */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <Book className="h-8 w-8 text-purple-400 mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Educational Manuals</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {manuals.map((manual, index) => (
              <Card key={manual.id} className="bg-gradient-to-br from-purple-800/20 to-blue-800/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 animate-fade-in backdrop-blur-sm" style={{animationDelay: `${index * 200}ms`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white text-xl">{manual.name}</CardTitle>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">{manual.type}</span>
                  </div>
                  <CardDescription className="text-gray-300">{manual.description}</CardDescription>
                  <p className="text-purple-300 text-sm mt-2">{manual.pages}</p>
                </CardHeader>
                
                <CardContent>
                  <h4 className="text-white font-semibold mb-3">Topics Covered:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {manual.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center">
                        <Wrench className="h-3 w-3 text-purple-400 mr-2" />
                        <span className="text-gray-300 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{manual.price}</span>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <Book className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
