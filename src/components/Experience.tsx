
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: "noovosoft",
    company: "Noovosoft Technologies",
    role: "Application Developer",
    location: "Pune, MH",
    type: "Full-Time",
    period: "Sep 2022 - Present",
    responsibilities: [
      "Implemented an AWS Lambda function using Terraform and a NAT Gateway to overcome IP restrictions for Dumea, enabling scalable architecture and replacing legacy data connectors.",
      "Engineered automated feed management system by integrating TapFeed data, reducing manual efforts by 80%.",
      "Mentored incoming interns by introducing software engineering best practices, improving code quality, test coverage, and ensuring timely project delivery.",
      "Configured pre-push Git hooks to automate test execution and enforce code formatting with Black, leading to a 95% reduction in bugs and inconsistent code styles.",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Celery", "AWS", "Terraform", "CI/CD Automation"],
  },
  {
    id: "siteguide",
    company: "Siteguide Pvt. Ltd.",
    role: "Backend Developer (Intern)",
    location: "Jalgaon, MH",
    type: "Internship",
    period: "Apr 2021 - Aug 2022",
    responsibilities: [
      "Optimized application performance by reducing load time by 70% through efficient database queries and code enhancements.",
      "Developed reusable modules, accelerating development for 20% of other projects.",
    ],
    technologies: ["Python", "Django", "MySQL", "RESTful APIs"],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("noovosoft");

  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2"></span> Professional Experience
        </h2>

        <Tabs defaultValue="noovosoft" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 grid grid-cols-2 w-full max-w-md">
            {experiences.map((exp) => (
              <TabsTrigger key={exp.id} value={exp.id} className="text-sm md:text-base">
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="animate-fadeIn">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company} | {exp.location}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{exp.type}</Badge>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-outside ml-5 space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <p className="font-medium mb-2">Technologies used:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
