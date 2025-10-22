import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const Music = () => {
  return (
    <section id="music" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Beyond the Resume
            </span>
          </h2>
          
          <p className="text-xl text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            As Kellogg Bands President and a performing musician, I bring creativity, 
            stage presence, and teamwork to everything I do. Watch our Chicago Battle of the Bands performance.
          </p>

          <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
            <div className="aspect-video relative group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ZsVwipjGNj8"
                title="Battle of the Bands Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">
                    Battle of the Bands 2025
                  </h3>
                  <p className="text-foreground/70">
                    Performing with "Captains" at Kellogg's Battle of the Bands. 
                    Leading a team on stage, just like in the boardroom.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Music;
