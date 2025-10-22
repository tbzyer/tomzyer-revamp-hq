import { Briefcase, Music2, Lightbulb, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Kellogg MBA",
      description: "Recent graduate with focus on product strategy and entrepreneurship",
    },
    {
      icon: Briefcase,
      title: "Product Strategist",
      description: "Building innovative solutions for startups and growth-stage companies",
    },
    {
      icon: Music2,
      title: "Musician",
      description: "Performing artist with passion for creating memorable experiences",
    },
    {
      icon: Lightbulb,
      title: "Creator",
      description: "Always exploring new ideas and connecting people through projects",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <p className="text-lg text-center text-foreground/70 mb-16 max-w-3xl mx-auto animate-fade-in">
            I thrive at the intersection of business and creativity. My journey combines 
            strategic thinking with artistic expression, always driven by a desire to 
            build meaningful connections and impactful experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow-purple group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-glow-purple transition-all">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
