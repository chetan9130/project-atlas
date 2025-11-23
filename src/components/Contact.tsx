import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section className="py-32 relative" data-scroll-section>
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 px-4" data-scroll data-scroll-speed="1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="w-20 h-1 bg-tech-cyan mx-auto mb-6" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8" data-scroll data-scroll-speed="0.5">
              <div className="glass-effect p-6 rounded-xl space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-tech-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-tech-cyan" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">your@email.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-tech-purple/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-tech-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-tech-pink/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-tech-pink" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="font-medium text-foreground">Available for freelance</p>
                </div>
                <p className="text-muted-foreground">
                  I'm currently available for freelance work and new opportunities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect p-8 rounded-xl" data-scroll data-scroll-speed="0.8">
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background/50 border-border focus:border-tech-cyan"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background/50 border-border focus:border-tech-cyan"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-background/50 border-border focus:border-tech-cyan"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="bg-background/50 border-border focus:border-tech-cyan resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-tech-cyan text-background hover:bg-tech-cyan/90 glow-border group"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
