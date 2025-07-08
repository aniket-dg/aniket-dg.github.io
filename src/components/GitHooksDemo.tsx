
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock, GitBranch } from "lucide-react";

const GitHooksDemo = () => {
  const [hookStatus, setHookStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
  
  const runHookDemo = () => {
    setHookStatus('running');
    setTimeout(() => {
      setHookStatus('success');
      setTimeout(() => setHookStatus('idle'), 3000);
    }, 2000);
  };

  const getStatusIcon = () => {
    switch(hookStatus) {
      case 'running': return <Clock className="h-5 w-5 text-yellow-500 animate-spin" />;
      case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error': return <XCircle className="h-5 w-5 text-red-500" />;
      default: return <GitBranch className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GitBranch className="h-5 w-5" />
          Pre-Push Git Hooks
        </CardTitle>
        <CardDescription>
          Automated code quality checks before every push - reduced bugs by 95%
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-black rounded-lg p-4 font-mono text-sm text-green-400">
          <div className="mb-2">$ git push origin main</div>
          <div className="text-yellow-400">Running pre-push hooks...</div>
          <div className="ml-2 space-y-1">
            <div className="flex items-center gap-2">
              {getStatusIcon()}
              <span>Running Black formatter...</span>
            </div>
            <div className="flex items-center gap-2">
              {getStatusIcon()}
              <span>Running tests...</span>
            </div>
            <div className="flex items-center gap-2">
              {getStatusIcon()}
              <span>Checking code quality...</span>
            </div>
          </div>
          {hookStatus === 'success' && (
            <div className="text-green-400 mt-2">✓ All checks passed! Push successful.</div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Black Formatter</Badge>
          <Badge variant="outline">PyTest</Badge>
          <Badge variant="outline">Flake8</Badge>
          <Badge variant="outline">Type Checking</Badge>
        </div>
        
        <Button onClick={runHookDemo} disabled={hookStatus === 'running'} className="w-full">
          {hookStatus === 'running' ? 'Running Hooks...' : 'Simulate Git Push'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default GitHooksDemo;
