import { Briefcase, TrendingUp, Users, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      icon: TrendingUp,
      company: "Yik Yak",
      role: "Product Marketing Manager & Operations Leader",
      period: "2021–2023",
      achievements: [
        "Grew user base from 2.3M to 7.2M installs; increased DAU by 71% YoY to 650k",
        "Restructured product and engineering teams, doubling product release velocity",
        "Evaluated M&A opportunities and executed strategic merger with operational synergies",
        "Managed development team of 12 engineers using agile methodology",
      ],
    },
    {
      icon: Target,
      company: "Goose",
      role: "MBA Intern | Strategic Growth Analyst",
      period: "2024",
      achievements: [
        "Developed company's first go-to-market strategy for Chicago market launch",
        "Designed and optimized client acquisition workflows in HubSpot",
        "Created case studies driving brand credibility and sales enablement",
      ],
    },
    {
      icon: Users,
      company: "Publicis Media",
      role: "National Audio Supervisor",
      period: "2018–2021",
      achievements: [
        "Managed $150M+ in annual advertising budgets for 30+ clients (T-Mobile, Taco Bell)",
        "Directed onboarding of agency's largest audio client totaling $45M in spend",
        "Pioneered digital innovation with podcast and streaming audio analytics tools",
      ],
    },
    {
      icon: Briefcase,
      company: "CDW",
      role: "Account Manager",
      period: "2016–2018",
      achievements: [
        "Drove 27% YoY revenue growth through relationship management",
        "Managed higher-education accounts totaling $2M in annual revenue",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Track record of driving growth, leading cross-functional teams, and delivering strategic impact
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow-purple transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <exp.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1">{exp.company}</CardTitle>
                      <CardDescription className="text-base">
                        {exp.role} • {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
