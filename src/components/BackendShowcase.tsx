
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  FileSpreadsheet, 
  MessagesSquare, 
  Timer, 
  KeySquare, 
  Link, 
  GitBranch,
  Code,
  Video
} from "lucide-react";

const backendFeatures = [
  {
    id: "2fa",
    title: "Two-Factor Authentication",
    icon: <Shield className="h-6 w-6" />,
    description: "Implemented secure 2FA authentication using time-based one-time passwords (TOTP) and SMS verification.",
    details: [
      "Built custom authentication middleware for Django applications",
      "Integrated with authentication providers like Auth0 and Firebase",
      "Implemented JWT-based authentication systems"
    ]
  },
  {
    id: "api",
    title: "Third-Party API Integration",
    icon: <Link className="h-6 w-6" />,
    description: "Seamlessly connected applications with external services and APIs for enhanced functionality.",
    details: [
      "Integrated payment gateways (Stripe, PayPal)",
      "Connected with cloud services (AWS, Google Cloud)",
      "Built OAuth flows for social media integration"
    ]
  },
  {
    id: "git",
    title: "Git Workflow Automation",
    icon: <GitBranch className="h-6 w-6" />,
    description: "Configured pre-push Git hooks to automate test execution and enforce code quality standards.",
    details: [
      "Reduced bugs by 95% with automated pre-commit checks",
      "Implemented Black formatter integration with Git hooks",
      "Created custom CI/CD pipelines with GitHub Actions"
    ]
  },
  {
    id: "chat",
    title: "Real-Time Communication",
    icon: <MessagesSquare className="h-6 w-6" />,
    description: "Built robust P2P and group chat systems with real-time capabilities using WebSockets.",
    details: [
      "Implemented P2P chat with Django Channels",
      "Created scalable group chat architecture",
      "Built presence indicators and typing notifications"
    ]
  },
  {
    id: "otp",
    title: "OTP Verification Systems",
    icon: <KeySquare className="h-6 w-6" />,
    description: "Developed secure OTP verification flows for enhanced security and user validation.",
    details: [
      "Built SMS-based verification using Twilio",
      "Implemented email verification systems",
      "Created rate-limiting to prevent abuse"
    ]
  },
  {
    id: "documents",
    title: "Document Generation",
    icon: <FileSpreadsheet className="h-6 w-6" />,
    description: "Engineered automated spreadsheet and PDF generation for reporting and data visualization.",
    details: [
      "Generated dynamic PDFs with ReportLab",
      "Created Excel reports using Pandas",
      "Built chart and graph generation capabilities"
    ]
  },
  {
    id: "code",
    title: "Collaborative Coding",
    icon: <Code className="h-6 w-6" />,
    description: "Developed real-time collaborative coding environments with synchronous editing.",
    details: [
      "Built WebSocket-based code synchronization",
      "Implemented operational transformation algorithms",
      "Created version control integration"
    ]
  },
  {
    id: "video",
    title: "Video/Text Communication",
    icon: <Video className="h-6 w-6" />,
    description: "Integrated WebRTC for secure and efficient real-time video and text communication.",
    details: [
      "Implemented WebRTC for peer connections",
      "Built signaling servers with Django Channels",
      "Created media streaming capabilities"
    ]
  },
  {
    id: "async",
    title: "Asynchronous Processing",
    icon: <Timer className="h-6 w-6" />,
    description: "Designed scalable asynchronous task processing systems using Celery and message queues.",
    details: [
      "Built Celery-based task queues",
      "Implemented Redis for message brokering",
      "Created scheduled and periodic task systems"
    ]
  }
];

const BackendShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(backendFeatures[0].id);
  
  return (
    <section id="backend" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2">•</span> Backend Expertise
        </h2>
        
        <p className="text-muted-foreground mb-10 max-w-3xl">
          Beyond frontend development, my core expertise lies in building robust, scalable backend systems. 
          Here are some of the specialized backend capabilities I've implemented across various projects.
        </p>
        
        <Tabs value={activeFeature} onValueChange={setActiveFeature} className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-start gap-2 bg-transparent h-auto">
            {backendFeatures.map((feature) => (
              <TabsTrigger 
                key={feature.id} 
                value={feature.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 border"
              >
                <span className="flex items-center gap-2">
                  {feature.icon}
                  <span className="hidden md:inline">{feature.title}</span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {backendFeatures.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="animate-fadeIn">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-4">Implementation Details:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {feature.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {["Python", "Django", "WebSockets", "Celery", "Redis"].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
            Interested in seeing how these backend technologies can benefit your project?
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BackendShowcase;
