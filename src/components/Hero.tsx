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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <img 
                  src={tomPhoto} 
                  alt="Tom Zyer - Professional headshot" 
                  className="w-64 h-64 md:w-72 md:h-72 rounded-lg object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Tom Zyer
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Kellogg MBA | Product & Strategy Leader
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Drove 71% YoY user growth at Series-A startup. Proven track record in go-to-market strategy, 
                product operations, and growth marketing. Seeking consulting, strategy, and marketing roles 
                where analytical rigor meets creative problem-solving.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                <Button
                  onClick={() => setIsResumeModalOpen(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 transition-all"
                >
                  Download Resume
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  variant="outline"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeDownloadModal 
        open={isResumeModalOpen} 
        onOpenChange={setIsResumeModalOpen} 
      />
    </section>
  );
};

export default Hero;
