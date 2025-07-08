
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-sm text-primary font-medium mb-3 opacity-90">Hi, my name is</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Aniket Dinesh Gavali.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
            I build exceptional web applications.
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            I'm a backend developer specializing in building robust and scalable 
            web applications. Currently focused on developing cloud-native 
            applications at <span className="text-primary">Noovosoft Technologies</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="mailto:aniketgavali1225@gmail.com">
              <Button className="gap-2">
                <Mail className="w-4 h-4" /> Contact Me
              </Button>
            </a>
            <a href="https://github.com/aniket-dg" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" /> GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/aniket-dg" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </Button>
            </a>
            <a href="https://aniket-dg.github.io" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <ExternalLink className="w-4 h-4" /> Website
              </Button>
            </a>
          </div>
          
          <a 
            href="#backend_showcase"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Scroll to learn more</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
