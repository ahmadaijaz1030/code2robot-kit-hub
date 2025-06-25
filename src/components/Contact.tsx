
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our products? Need technical support? We're here to help you succeed in your robotics journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", info: "support@code2robot.com", desc: "Send us an email anytime!" },
                { icon: Phone, title: "Phone", info: "+1 (555) 123-4567", desc: "Mon-Fri from 8am to 5pm" },
                { icon: MapPin, title: "Address", info: "123 Robotics Ave, Tech City, TC 12345", desc: "Visit our headquarters" }
              ].map((item, index) => (
                <Card key={index} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500/20 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-blue-300 font-medium mb-1">{item.info}</p>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg">
              <h4 className="text-white font-semibold text-lg mb-2">Quick Response Guarantee</h4>
              <p className="text-gray-300">
                We typically respond to all inquiries within 24 hours. For urgent technical support, 
                our premium customers get priority assistance within 2 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
