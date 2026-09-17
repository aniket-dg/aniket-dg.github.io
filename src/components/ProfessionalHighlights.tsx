
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Bug, ShieldCheck } from "lucide-react";

const highlights = [
  {
    title: "Self-Hosted CI Migration",
    icon: <TrendingDown className="h-6 w-6" />,
    metric: "~70% lower CI cost",
    description:
      "Re-architected a GitHub Actions functional-test matrix onto ephemeral, self-hosted EC2 runners — provisioned on demand via Lambda from a pre-baked golden AMI (Docker, Python, and a pre-migrated test DB baked in ahead of time).",
    details: [
      "Cut CI compute cost by roughly 70% and per-job test time by more than half",
      "Root-caused a hidden bottleneck where every job was silently replaying hundreds of DB migrations from empty, due to a missing test-teardown flag on the AMI's own bake step",
      "Built on a maintained Terraform module rather than hand-rolling scale-up/scale-down, keeping the change additive to existing infra"
    ],
    technologies: ["AWS Lambda", "EC2", "Terraform", "Packer", "GitHub Actions"]
  },
  {
    title: "Production Debugging via Sentry",
    icon: <Bug className="h-6 w-6" />,
    metric: "Systematic root-cause triage",
    description:
      "Built a repeatable workflow for investigating production errors surfaced through Sentry — tracing each issue back to its root cause rather than patching symptoms, and closing out recurring error clusters.",
    details: [
      "Diagnosed and fixed recurring exception clusters across integration and background-task code paths",
      "Added targeted guards/fixes at the source of top-offending errors instead of broad exception suppression",
      "Reduced noisy, low-value alerts so Sentry stayed a signal for genuinely new issues"
    ],
    technologies: ["Sentry", "Python", "Django", "Celery"]
  },
  {
    title: "Automated N+1 Query Detection",
    icon: <ShieldCheck className="h-6 w-6" />,
    metric: "Proactive query optimization",
    description:
      "Worked on tooling and review practices to catch N+1 query risks before they reach production, pairing automated detection with select_related/prefetch_related fixes.",
    details: [
      "Improved system observability through structured logging and query-cost awareness",
      "Applied select_related/prefetch_related fixes across hot paths to remove redundant database hits",
      "Folded N+1 prevention into day-to-day review rather than one-off cleanup"
    ],
    technologies: ["Django ORM", "PostgreSQL", "Query Optimization"]
  }
];

const ProfessionalHighlights = () => {
  return (
    <section id="highlights" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 flex items-center">
          <span className="text-primary mr-2"></span> Professional Highlights
        </h2>
        <p className="text-muted-foreground mb-10 max-w-3xl">
          Infrastructure and reliability work from my day-to-day role — beyond feature delivery.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="h-full flex flex-col hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-primary">{item.icon}</div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>

                <Badge variant="outline" className="w-fit mb-4 bg-secondary/50">
                  {item.metric}
                </Badge>

                <p className="text-muted-foreground mb-4">{item.description}</p>

                <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-muted-foreground mb-4">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {item.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tech}
                    </Badge>
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

export default ProfessionalHighlights;
