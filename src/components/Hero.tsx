import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tom Zyer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            MBA graduate from Kellogg and product strategist with a passion for startups, 
            music, and creating things that connect people. Whether I'm on stage or in a 
            spreadsheet, I love chasing ideas and building with energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-purple transition-all text-lg px-8"
            >
              Learn More
            </Button>
            <Button
              onClick={() => scrollToSection("music")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
            >
              Watch Performance
            </Button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce inline-block"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8 text-primary" />
          </button>
        </div>
      </div>

      {/* Gradient orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
