import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Open to consulting, strategy, marketing, and operations roles. 
            Let's discuss how I can drive impact at your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all"
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

          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2025 Tom Zyer. Available for immediate opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
