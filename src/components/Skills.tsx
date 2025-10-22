import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Consulting-ready toolkit combining analytical frameworks, product operations, and strategic marketing
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow-purple transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
