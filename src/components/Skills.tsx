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
    <section id="skills" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Consulting-ready toolkit combining analytical frameworks, product operations, and strategic marketing
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary/15">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary/50 text-foreground/80 hover:bg-secondary transition-colors"
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
