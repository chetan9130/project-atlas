import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Dashboard",
      description: "A comprehensive analytics dashboard with AI-driven insights and real-time data visualization.",
      tech: ["React", "TypeScript", "Python", "TensorFlow"],
      image: "bg-gradient-to-br from-tech-cyan/20 to-tech-blue/20",
      github: "#",
      live: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin panel.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      image: "bg-gradient-to-br from-tech-purple/20 to-tech-pink/20",
      github: "#",
      live: "#",
    },
    {
      title: "Social Media App",
      description: "Modern social networking platform with real-time messaging, stories, and content sharing.",
      tech: ["React Native", "Firebase", "Node.js", "Socket.io"],
      image: "bg-gradient-to-br from-tech-pink/20 to-tech-cyan/20",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="py-32 relative" data-scroll-section>
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 px-4" data-scroll data-scroll-speed="1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-20 h-1 bg-tech-cyan mx-auto mb-6" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of my recent work and side projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group glass-effect rounded-xl overflow-hidden hover-lift"
                data-scroll
                data-scroll-speed={0.5 + index * 0.1}
              >
                {/* Project Image/Gradient */}
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="border-tech-cyan text-tech-cyan">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-tech-cyan text-background">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-tech-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
