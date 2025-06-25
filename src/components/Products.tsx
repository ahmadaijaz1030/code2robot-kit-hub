
import { ShoppingCart, Book, Wrench, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Beginner Robot Kit",
      price: "$149",
      image: "/placeholder.svg",
      description: "Perfect for students and beginners. Includes all components and step-by-step manual.",
      features: ["Easy assembly", "Educational manual", "Online support", "Age 12+"],
      category: "kit",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Advanced Robotics Kit",
      price: "$299",
      image: "/placeholder.svg",
      description: "For experienced makers. Advanced sensors, motors, and programming capabilities.",
      features: ["Advanced sensors", "Programmable", "Bluetooth connectivity", "Age 16+"],
      category: "kit",
      rating: 4.9,
      reviews: 87
    },
    {
      id: 3,
      name: "Robotics Manual Collection",
      price: "$49",
      image: "/placeholder.svg",
      description: "Comprehensive guides covering theory, assembly, and programming.",
      features: ["Digital download", "Video tutorials", "Project examples", "Lifetime access"],
      category: "manual",
      rating: 4.7,
      reviews: 203
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
    const message = "Hi! I'm interested in your robotics products. Can you help me choose the right kit?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>

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

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-orange-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">
                    {product.rating} ({product.reviews})
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
                
                <div className="space-y-3">
                  <Link to={`/product/${product.id}`}>
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Button 
                    className="w-full bg-white/5 border border-white/20 text-white hover:bg-white/10 font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
