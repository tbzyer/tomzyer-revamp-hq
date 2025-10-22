import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import tomPhoto from "@/assets/tom-zyer-photo.jpg";
import ResumeDownloadModal from "./ResumeDownloadModal";

const Hero = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

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
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <img 
                src={tomPhoto} 
                alt="Tom Zyer" 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/30 shadow-glow-purple"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tom Zyer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Kellogg MBA | Product & Strategy Leader | Drove 71% YoY user growth at Series-A startup
          </p>

          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Proven track record in go-to-market strategy, product operations, and growth marketing. 
            Seeking consulting, strategy, and marketing roles where analytical rigor meets creative problem-solving.
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
              onClick={() => setIsResumeModalOpen(true)}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
            >
              Download Resume
            </Button>
          </div>

          <ResumeDownloadModal 
            open={isResumeModalOpen} 
            onOpenChange={setIsResumeModalOpen} 
          />

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
