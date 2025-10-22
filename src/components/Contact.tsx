import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto animate-fade-in">
            Whether you're interested in collaborating on a project, discussing opportunities, 
            or just want to chat about music and startups, I'd love to hear from you.
          </p>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in-up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow-purple transition-all w-full sm:w-auto"
                asChild
              >
                <a href="mailto:tom@tomzyer.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://linkedin.com/in/tomzyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </Card>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-foreground/50">
              © 2025 Tom Zyer. Built with passion and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
