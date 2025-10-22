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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
              <img 
                src={tomPhoto} 
                alt="Tom Zyer - Professional headshot" 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-primary/20"
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all text-lg px-8"
            >
              Learn More
            </Button>
            <Button
              onClick={() => setIsResumeModalOpen(true)}
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary/50 text-lg px-8"
            >
              Download Resume
            </Button>
          </div>

          <ResumeDownloadModal 
            open={isResumeModalOpen} 
            onOpenChange={setIsResumeModalOpen} 
          />
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
