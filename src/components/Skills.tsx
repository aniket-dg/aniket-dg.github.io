
import { Card, CardContent } from "@/components/ui/card";
import { 
  Server, 
  Database, 
  Code, 
  Cloud, 
  Terminal, 
  GitBranch,
  Monitor,
  Box
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Python", "Django", "Flask", "Celery", "RESTful APIs", "WebSockets"]
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["PostgreSQL", "MySQL", "Redis", "Database Optimization"]
  },
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "C", "C++", "Java", "PHP"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "Google Compute Engine", "CI/CD", "Terraform"]
  },
  {
    title: "Developer Tools",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["Git", "Docker", "Nginx", "Apache"]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Box className="h-6 w-6" />,
    skills: ["Django", "Flask", "CodeIgniter", "Celery", "Bootstrap"]
  },
  {
    title: "Version Control",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitHub", "GitLab", "Pre-push Hooks"]
  },
  {
    title: "Frontend",
    icon: <Monitor className="h-6 w-6" />,
    skills: ["React", "HTML/CSS", "JavaScript", "AJAX", "Bootstrap"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2"></span> Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="overflow-hidden border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
