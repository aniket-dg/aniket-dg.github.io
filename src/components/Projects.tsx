
import { ExternalLink, Github, Info } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    title: "FinSailor",
    description: "A full-stack web application for investment tracking across brokers (Zerodha, Groww), with portfolio management and real-time market data integration using Celery for asynchronous tasks.",
    features: [
      "Investment tracking features, including asset/liability management",
      "Portfolio performance and a mutual fund health check system",
      "Centralized family-wide investment dashboard"
    ],
    technologies: ["Python", "Django", "Celery", "PostgreSQL", "React"],
    links: {
      github: "https://github.com/aniket-dg/finsailor",
      live: null
    },
    period: "Apr 2024 - Present"
  },
  {
    title: "CollaborativePY",
    description: "A web-based Collaborative IDE, enabling real-time codebase collaboration, optimizing team workflows and development speed.",
    features: [
      "Integrated synchronous coding capabilities",
      "Text/Video chat for enhanced real-time collaboration"
    ],
    technologies: ["Python", "Django", "WebSockets", "JavaScript", "WebRTC", "Node.js", "PostgreSQL"],
    links: {
      github: "https://github.com/aniket-dg/collaborativePy.git",
      live: null
    },
    period: "Nov 2022 - Mar 2023"
  },
  {
    title: "MahaSIG Portal",
    description: "A full-stack web application for the Maha Student-Industry-Government portal with multiple user dashboards and features like P2P Chat, Group Chat, and OTP verification.",
    features: [
      "Spreadsheet/PDF generation functionality",
      "Automated feedback emails system"
    ],
    technologies: ["Python", "Django", "Channels", "Redis", "Bootstrap", "AJAX", "PostgreSQL"],
    links: {
      github: "https://github.com/aniket-dg/mahasig.git",
      live: null
    },
    period: "Jan 2022 - Mar 2022"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2"></span> Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="project-card h-full flex flex-col">
              <CardContent className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs text-muted-foreground">{project.period}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Info className="h-4 w-4 mr-1" /> Key Features
                  </h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 border-t flex justify-end gap-3">
                <TooltipProvider>
                  {project.links.github && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-secondary transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>View source code</TooltipContent>
                    </Tooltip>
                  )}
                  
                  {project.links.live && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-secondary transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>View live project</TooltipContent>
                    </Tooltip>
                  )}
                </TooltipProvider>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
