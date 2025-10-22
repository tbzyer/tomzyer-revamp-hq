import { Badge } from "@/components/ui/badge";
import { BarChart, Lightbulb, MessageSquare, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: BarChart,
      title: "Strategy & Analytics",
      skills: [
        "Go-to-Market Strategy",
        "Product Strategy",
        "Market Analysis",
        "Data-Driven Decision Making",
        "P&L Management",
        "M&A Evaluation",
      ],
    },
    {
      icon: Lightbulb,
      title: "Product & Operations",
      skills: [
        "Product Marketing",
        "Agile Development",
        "Cross-Functional Leadership",
        "Process Optimization",
        "Team Management",
        "Sprint Planning",
      ],
    },
    {
      icon: MessageSquare,
      title: "Growth & Marketing",
      skills: [
        "User Acquisition",
        "Brand Strategy",
        "Campaign Management",
        "Social Media",
        "Performance Marketing",
        "Stakeholder Presentations",
      ],
    },
    {
      icon: Code,
      title: "Tools & Platforms",
      skills: [
        "Google Analytics",
        "HubSpot",
        "Amplitude",
        "Braze",
        "Microsoft Office",
        "SQL",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/20 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            Consulting-ready toolkit combining analytical frameworks, product operations, and strategic marketing.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 pl-11">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="bg-secondary/80 text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
