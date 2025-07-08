
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Check, Download } from "lucide-react";

const ReusableModulesDemo = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  
  const modules = [
    { name: "auth-utils", description: "Authentication & JWT utilities", downloads: "2.1k" },
    { name: "db-connector", description: "Database connection pooling", downloads: "1.8k" },
    { name: "api-validator", description: "Request validation middleware", downloads: "3.2k" },
    { name: "cache-manager", description: "Redis caching abstraction", downloads: "1.5k" }
  ];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Reusable Modules
        </CardTitle>
        <CardDescription>
          Published Python packages for common backend tasks
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {modules.map((module, idx) => (
            <div 
              key={idx}
              className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                selectedModule === module.name ? 'bg-primary/10 border-primary' : 'hover:bg-muted'
              }`}
              onClick={() => setSelectedModule(module.name)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{module.name}</div>
                  <div className="text-xs text-muted-foreground">{module.description}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    <Download className="h-3 w-3 mr-1" />
                    {module.downloads}
                  </Badge>
                  {selectedModule === module.name && <Check className="h-4 w-4 text-green-500" />}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">PyPI</Badge>
          <Badge variant="outline">Setuptools</Badge>
          <Badge variant="outline">Poetry</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReusableModulesDemo;
