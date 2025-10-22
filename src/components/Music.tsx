import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const Music = () => {
  return (
    <section id="music" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            Musical <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <p className="text-lg text-center text-foreground/70 mb-16 max-w-3xl mx-auto animate-fade-in">
            Music is where I find my flow state. From the stage to the studio, 
            I'm constantly exploring new sounds and creating experiences that bring people together.
          </p>

          <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden animate-fade-in-up">
            <div className="aspect-video relative group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ZsVwipjGNj8"
                title="Battle of the Bands Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Play className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">
                    Battle of the Bands 2025
                  </h3>
                  <p className="text-foreground/70">
                    Watch the full performance with my band "Captains" at Kellogg's 
                    Battle of the Bands. A night of energy, passion, and unforgettable music.
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
