
import { ShoppingCart, Book, Wrench, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Beginner Robot Kit",
      price: "$149",
      image: "/placeholder.svg",
      description: "Perfect for students and beginners. Includes all components and step-by-step manual.",
      features: ["Easy assembly", "Educational manual", "Online support", "Age 12+"],
      category: "kit"
    },
    {
      id: 2,
      name: "Advanced Robotics Kit",
      price: "$299",
      image: "/placeholder.svg",
      description: "For experienced makers. Advanced sensors, motors, and programming capabilities.",
      features: ["Advanced sensors", "Programmable", "Bluetooth connectivity", "Age 16+"],
      category: "kit"
    },
    {
      id: 3,
      name: "Robotics Manual Collection",
      price: "$49",
      image: "/placeholder.svg",
      description: "Comprehensive guides covering theory, assembly, and programming.",
      features: ["Digital download", "Video tutorials", "Project examples", "Lifetime access"],
      category: "manual"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our range of robotics kits and educational materials designed to inspire and educate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-in slide-in-from-bottom duration-1000 hover:shadow-xl hover:shadow-orange-500/25"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-teal-500/20 flex items-center justify-center">
                {product.category === 'kit' ? (
                  <Wrench className="h-16 w-16 text-orange-400 animate-bounce" />
                ) : (
                  <Book className="h-16 w-16 text-blue-400 animate-bounce" />
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Star className="h-4 w-4 text-teal-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
