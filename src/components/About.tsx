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
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Why Work With Me
          </h2>
          
          <p className="text-xl text-center text-foreground/70 mb-16 max-w-3xl mx-auto leading-relaxed">
            I bring a unique blend of strategic thinking, operational excellence, and creative problem-solving. 
            Whether it's scaling a product from 2M to 7M users or managing $150M in media budgets, 
            I thrive at the intersection of data-driven strategy and bold execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg transition-all group-hover:bg-primary/15">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{item.description}</p>
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

export default About;
