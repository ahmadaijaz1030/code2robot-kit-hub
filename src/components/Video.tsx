
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-blue-500/5 to-teal-500/5"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Our <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Products</span> in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch how our robotics kits transform learning experiences and bring ideas to life through innovative technology.
          </p>
        </div>

        {/* Main Video Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:scale-[1.02] group">
            <video
              ref={videoRef}
              className="w-full h-auto"
              poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=675&fit=crop"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              muted={isMuted}
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={togglePlay}
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>
                  
                  <Button
                    onClick={toggleMute}
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                  >
                    {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                  </Button>
                </div>

                <Button
                  onClick={toggleFullscreen}
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300"
                >
                  <Maximize2 className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <Button
                  onClick={togglePlay}
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white h-20 w-20 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110"
                >
                  <Play className="h-10 w-10 ml-1" />
                </Button>
              </div>
            )}
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { number: "10K+", label: "Students Taught", color: "from-orange-400 to-orange-600" },
              { number: "500+", label: "Schools Reached", color: "from-blue-400 to-blue-600" },
              { number: "95%", label: "Success Rate", color: "from-teal-400 to-teal-600" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => {
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-orange-600 via-blue-600 to-teal-600 hover:from-orange-700 hover:via-blue-700 hover:to-teal-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Products
            </Button>
            <Button
              onClick={() => window.open('/videos', '_blank')}
              variant="outline"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Watch More Videos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
