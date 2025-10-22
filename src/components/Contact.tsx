import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Let's Connect</span>
          </h2>

          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Open to consulting, strategy, marketing, and operations roles. Let's discuss how I can drive impact at your
            organization.
          </p>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
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
          </Card>

          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-foreground/50">© 2025 Tom Zyer. Available for immediate opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
