import { Briefcase, Calendar, Download, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const Resume = () => {
  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting cloud infrastructure.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2019 - 2021",
      description: "Built responsive web applications for various clients. Implemented CI/CD pipelines and improved performance by 40%.",
    },
    {
      title: "Frontend Developer",
      company: "Startup Inc",
      period: "2018 - 2019",
      description: "Developed interactive user interfaces using React and TypeScript. Collaborated with designers to create pixel-perfect implementations.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University Name",
      period: "2014 - 2018",
      description: "Focused on software engineering, algorithms, and web technologies.",
    },
    {
      degree: "Certification in Cloud Computing",
      school: "AWS",
      period: "2020",
      description: "AWS Certified Solutions Architect - Associate",
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
              <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-20 h-1 bg-tech-cyan mx-auto mb-6" />
            <Button 
              size="lg" 
              className="bg-tech-cyan text-background hover:bg-tech-cyan/90 glow-border group w-full sm:w-auto"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div data-scroll data-scroll-speed="0.5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-tech-cyan/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-tech-cyan" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Experience</h3>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div 
                    key={job.title}
                    className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-tech-cyan animate-pulse-glow" />
                    
                    <div className="glass-effect p-6 rounded-lg hover-lift">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-foreground">{job.title}</h4>
                      </div>
                      <p className="text-tech-cyan font-medium mb-2">{job.company}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div data-scroll data-scroll-speed="0.8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-tech-purple/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-tech-purple" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={edu.degree}
                    className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-tech-purple" 
                      style={{ boxShadow: '0 0 20px hsl(var(--tech-purple) / 0.5)' }}
                    />
                    
                    <div className="glass-effect p-6 rounded-lg hover-lift">
                      <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-tech-purple font-medium mb-2">{edu.school}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
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

export default Resume;
