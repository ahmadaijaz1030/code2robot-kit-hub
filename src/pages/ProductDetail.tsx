
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  
  const products = {
    "1": {
      id: 1,
      name: "Beginner Robot Kit",
      price: "$149",
      originalPrice: "$199",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      description: "Perfect for students and beginners who want to dive into the world of robotics. This comprehensive kit includes all necessary components and a detailed step-by-step manual to guide you through your first robot building experience.",
      longDescription: "Our Beginner Robot Kit is designed with education in mind. It provides hands-on experience with fundamental robotics concepts including basic programming, sensor integration, and mechanical assembly. The kit comes with premium quality components that are durable and safe for educational use.",
      features: [
        "Easy assembly with detailed instructions",
        "Educational manual with theory and practice",
        "24/7 online support community",
        "Suitable for ages 12 and above",
        "No prior experience required",
        "Includes all necessary tools"
      ],
      specifications: {
        "Microcontroller": "Arduino Compatible",
        "Sensors": "Ultrasonic, Light, Temperature",
        "Motors": "2x Servo Motors",
        "Power": "Battery Pack Included",
        "Connectivity": "USB Programming Cable",
        "Assembly Time": "2-4 Hours"
      },
      inStock: true,
      rating: 4.8,
      reviews: 124
    },
    "2": {
      id: 2,
      name: "Advanced Robotics Kit",
      price: "$299",
      originalPrice: "$399",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      description: "For experienced makers and advanced students. Features sophisticated sensors, powerful motors, and advanced programming capabilities for complex robotic projects.",
      longDescription: "Take your robotics skills to the next level with our Advanced Kit. This professional-grade kit includes cutting-edge sensors, high-torque motors, and advanced programming interfaces. Perfect for creating autonomous robots, IoT projects, and competition-ready builds.",
      features: [
        "Advanced sensor array (Camera, IMU, GPS)",
        "Programmable with multiple languages",
        "Bluetooth and WiFi connectivity",
        "Suitable for ages 16 and above",
        "Competition-ready components",
        "Advanced project examples included"
      ],
      specifications: {
        "Microcontroller": "ESP32 with WiFi/Bluetooth",
        "Sensors": "Camera, IMU, GPS, Lidar",
        "Motors": "4x High-Torque Servo Motors",
        "Power": "Rechargeable Li-Po Battery",
        "Connectivity": "WiFi, Bluetooth, USB-C",
        "Assembly Time": "4-8 Hours"
      },
      inStock: true,
      rating: 4.9,
      reviews: 87
    },
    "3": {
      id: 3,
      name: "Robotics Manual Collection",
      price: "$49",
      originalPrice: "$79",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      description: "Comprehensive digital guides covering robotics theory, assembly techniques, and programming fundamentals. Perfect companion for any robotics enthusiast.",
      longDescription: "Our comprehensive manual collection is the result of years of teaching experience and industry expertise. These guides cover everything from basic electronics to advanced robotics algorithms, making them perfect for self-learners and educators alike.",
      features: [
        "Instant digital download",
        "HD video tutorials included",
        "50+ project examples with code",
        "Lifetime access and updates",
        "Printable PDF format",
        "Community forum access"
      ],
      specifications: {
        "Format": "PDF + Video",
        "Pages": "500+ Pages",
        "Videos": "20+ Hours of Content",
        "Projects": "50+ Practical Examples",
        "Updates": "Lifetime Free Updates",
        "Support": "Community Forum Access"
      },
      inStock: true,
      rating: 4.7,
      reviews: 203
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <Link to="/" className="text-orange-400 hover:text-orange-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "+923024453295"; // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in the ${product.name} (${product.price}). Can you provide more information?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navbar />
      
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

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-white/10">
                <div className="text-6xl text-orange-400">📦</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(0, 3).map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center border border-white/10 cursor-pointer hover:border-orange-400/50 transition-colors duration-300"
                  >
                    <div className="text-2xl text-blue-400">📷</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-orange-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="text-gray-300 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                    Save {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}%
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="flex-1 bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Product Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Specifications */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Specifications</h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">{key}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
