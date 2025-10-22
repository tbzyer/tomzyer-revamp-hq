import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Open to consulting, strategy, marketing, and operations roles. 
            Let's discuss how I can drive impact at your organization.
          </p>

          <div className="p-8 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all w-full sm:w-auto"
                asChild
              >
                <a href="mailto:tom.zyer@kellogg.northwestern.edu" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary/50 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/tzyer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-foreground/50">
              © 2025 Tom Zyer. Available for immediate opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
