
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const [tab, setTab] = useState<"about" | "education">("about");

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2"></span> About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-4">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setTab("about")}
                className={`px-4 py-2 font-medium transition-all ${
                  tab === "about"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setTab("education")}
                className={`px-4 py-2 font-medium transition-all ${
                  tab === "education"
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Education
              </button>
            </div>

            {tab === "about" && (
              <div className="space-y-4 animate-fadeIn">
                <p>
                  Hello! I'm Aniket, a backend developer with a passion for building efficient, 
                  scalable web applications. My journey in tech started during my diploma in Computer Technology,
                  where I discovered my love for solving complex problems through code.
                </p>
                
                <p>
                  Currently, I work as an Application Developer at Noovosoft Technologies,
                  where I've implemented AWS Lambda functions using Terraform,
                  engineered automated feed management systems, and mentored incoming interns.
                </p>
                
                <p>
                  My expertise lies in backend technologies like Python, Django, and AWS, but I'm also 
                  comfortable working with frontend technologies when needed.
                </p>
                
                <p>
                  Outside of work, I enjoy building projects like FinSailor, a full-stack web application
                  for investment tracking, and CollaborativePY, a web-based collaborative IDE.
                </p>
              </div>
            )}

            {tab === "education" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Bachelor of Engineering, Information Technology</h3>
                  <p className="text-muted-foreground">Sinhgad Institute of Technology and Science</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-muted-foreground">Jun 2020 - May 2023</p>
                    <Badge>CGPA: 9.64</Badge>
                  </div>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Diploma in Computer Technology</h3>
                  <p className="text-muted-foreground">Government Polytechnic Nashik</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-muted-foreground">Aug 2017 - May 2020</p>
                    <Badge>Percentage: 88.00%</Badge>
                  </div>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-lg">Achievements</h3>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Winner – Mindquisitive Hackathon among 75+ groups</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/30 rounded-lg blur-sm group-hover:blur md:opacity-75 transition duration-300"></div>
              <div className="relative bg-background rounded-lg p-6 border">
                <div className="text-3xl font-mono font-semibold mb-6">const techStack = [</div>
                <ul className="flex flex-wrap gap-2 mb-6">
                  <li className="skill-tag">Python</li>
                  <li className="skill-tag">Django</li>
                  <li className="skill-tag">PostgreSQL</li>
                  <li className="skill-tag">AWS</li>
                  <li className="skill-tag">Terraform</li>
                  <li className="skill-tag">Celery</li>
                  <li className="skill-tag">Docker</li>
                  <li className="skill-tag">CI/CD</li>
                  <li className="skill-tag">Git</li>
                  <li className="skill-tag">Flask</li>
                  <li className="skill-tag">Redis</li>
                </ul>
                <div className="text-3xl font-mono font-semibold">];</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
