import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-scroll-section>
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/10 via-transparent to-tech-purple/10" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10" data-scroll data-scroll-speed="2">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Name with glitch effect */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="gradient-text">Your Name</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground">
              <span className="inline-block w-2 h-2 bg-tech-cyan rounded-full animate-pulse" />
              <span className="glow-text">Full Stack Developer</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technologies. 
            Specializing in building exceptional web applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="group bg-tech-cyan text-background hover:bg-tech-cyan/90 glow-border"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-tech-purple text-tech-purple hover:bg-tech-purple/10"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-cyan transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-cyan transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your@email.com"
              className="text-muted-foreground hover:text-tech-cyan transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-tech-cyan rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-tech-cyan rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
