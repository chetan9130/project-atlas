import { Code2, Rocket, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Next.js", 
    "Tailwind CSS", "PostgreSQL", "Docker", "AWS", "Git"
  ];

  return (
    <section className="py-32 relative" data-scroll-section>
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 px-4" data-scroll data-scroll-speed="1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-tech-cyan mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <div className="space-y-6" data-scroll data-scroll-speed="0.5">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer who loves turning complex problems into simple, 
                beautiful solutions. With years of experience in full-stack development, 
                I bring ideas to life through clean code and intuitive design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the community.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="glass-effect p-4 rounded-lg text-center">
                  <Code2 className="w-8 h-8 text-tech-cyan mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">5+</p>
                  <p className="text-sm text-muted-foreground">Years Exp</p>
                </div>
                <div className="glass-effect p-4 rounded-lg text-center">
                  <Rocket className="w-8 h-8 text-tech-purple mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="glass-effect p-4 rounded-lg text-center">
                  <Zap className="w-8 h-8 text-tech-pink mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">20+</p>
                  <p className="text-sm text-muted-foreground">Clients</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6" data-scroll data-scroll-speed="0.8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="glass-effect px-6 py-3 rounded-lg border border-tech-cyan/20 hover:border-tech-cyan hover:bg-tech-cyan/10 transition-all cursor-default hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
