import { useState } from "react";
import { Play, Clock, Eye, Star, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  
  const categories = [
    { id: "all", name: "All Videos", count: 12 },
    { id: "tutorials", name: "Tutorials", count: 6 },
    { id: "demos", name: "Product Demos", count: 4 },
    { id: "testimonials", name: "Success Stories", count: 2 }
  ];

  const videos = [
    {
      id: 1,
      title: "Getting Started with Robotics - Complete Beginner Guide",
      description: "Learn the fundamentals of robotics with our comprehensive beginner-friendly tutorial.",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      duration: "15:32",
      views: "25.4K",
      category: "tutorials",
      rating: 4.9,
      featured: true
    },
    {
      id: 2,
      title: "Advanced Robot Programming Techniques",
      description: "Master advanced programming concepts for creating intelligent robotic systems.",
      thumbnail: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      duration: "22:18",
      views: "18.2K",
      category: "tutorials",
      rating: 4.8
    },
    {
      id: 3,
      title: "Smart Home Robot - Product Demo",
      description: "See our latest smart home robotics kit in action with real-world applications.",
      thumbnail: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=600&h=400&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      duration: "8:45",
      views: "32.1K",
      category: "demos",
      rating: 4.9
    },
    {
      id: 4,
      title: "Student Success Story - MIT Robotics Lab",
      description: "How our kits helped MIT students excel in their robotics competitions.",
      thumbnail: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      duration: "12:30",
      views: "15.7K",
      category: "testimonials",
      rating: 5.0,
      featured: true
    },
    {
      id: 5,
      title: "Building Your First Walking Robot",
      description: "Step-by-step guide to creating a walking robot using our advanced kit.",
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      duration: "28:15",
      views: "41.3K",
      category: "tutorials",
      rating: 4.7
    },
    {
      id: 6,
      title: "AI Integration with Robotics Kits",
      description: "Learn how to integrate artificial intelligence with our robotics platforms.",
      thumbnail: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      duration: "19:42",
      views: "22.8K",
      category: "tutorials",
      rating: 4.8
    }
  ];

  const filteredVideos = selectedCategory === "all" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const featuredVideos = videos.filter(video => video.featured);

  const handleVideoClick = (video: any) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navbar />
      
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden">
            <Button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </Button>
            <video
              className="w-full h-auto max-h-[80vh]"
              controls
              autoPlay
              poster={selectedVideo.thumbnail}
            >
              <source src={selectedVideo.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300">{selectedVideo.description}</p>
              <div className="flex items-center space-x-4 mt-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{selectedVideo.duration}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{selectedVideo.views}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-orange-400 fill-current" />
                  <span>{selectedVideo.rating}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-blue-500/10 to-teal-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Video <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Library</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of tutorials, product demos, and success stories to accelerate your robotics journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured <span className="bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">Videos</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white text-sm mb-2">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{video.duration}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{video.views}</span>
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-orange-400 fill-current" />
                        <span>{video.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white h-16 w-16 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Categories and Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 text-white shadow-lg'
                    : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white backdrop-blur-sm'
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center justify-between text-white text-xs">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{video.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{video.views}</span>
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      className="bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 h-12 w-12 rounded-full"
                    >
                      <Play className="h-5 w-5 ml-0.5" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-orange-400 fill-current" />
                      <span className="text-white text-sm font-medium">{video.rating}</span>
                    </div>
                    <span className="text-xs text-teal-400 font-semibold uppercase tracking-wide">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of students and educators who are transforming their learning with our robotics kits.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => window.open('/', '_self')}
                className="bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Shop Products
              </Button>
              <Button
                onClick={() => {
                  const phoneNumber = "+923008427008";
                  const message = "Hi! I'd like to learn more about your robotics kits after watching your videos.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                variant="outline"
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Videos;
