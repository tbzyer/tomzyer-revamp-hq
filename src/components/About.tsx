import { Briefcase, Music, TrendingUp, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Kellogg MBA",
      description:
        "Finance major with leadership roles including Section Leader and Kellogg Bands President. Global Leadership Scholar at University of Tennessee.",
    },
    {
      icon: Briefcase,
      title: "Startup Growth Expert",
      description:
        "Drove 71% YoY user growth at Yik Yak (Series-A social media). Built GTM strategy and acquisition workflows at Goose (Series-A SaaS).",
    },
    {
      icon: TrendingUp,
      title: "Strategic Operator",
      description:
        "Restructured product teams, executed M&A integration, and managed $150M+ in advertising budgets across 30+ enterprise clients.",
    },
    {
      icon: Music,
      title: "Leadership Beyond Business",
      description:
        "Eagle Scout, Navy Pier Associate Board Member, and Kellogg Bands President. I bring leadership, teamwork, and creative energy to everything I do.",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Work With Me
          </h2>
          
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            I bring a unique blend of strategic thinking, operational excellence, and creative problem-solving. 
            Whether it's scaling a product from 2M to 7M users or managing $150M in media budgets, 
            I thrive at the intersection of data-driven strategy and bold execution.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {highlights.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-11">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
