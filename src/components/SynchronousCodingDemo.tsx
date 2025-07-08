
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitBranch, Users, Zap } from "lucide-react";

const SynchronousCodingDemo = () => {
  const [code, setCode] = useState(`class TaskManager:
    def __init__(self):
        self.tasks = []
    
    def add_task(self, task):
        self.tasks.append(task)`);
  
  const [cursors, setCursors] = useState([
    { user: "Alice", line: 2, char: 15, color: "text-blue-500" },
    { user: "Bob", line: 5, char: 8, color: "text-green-500" }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCursors(prev => prev.map(cursor => ({
        ...cursor,
        char: Math.max(0, cursor.char + (Math.random() - 0.5) * 5)
      })));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setCode(prev => prev + "\n        return len(self.tasks)");
      setIsTyping(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GitBranch className="h-5 w-5" />
          Synchronous Coding
        </CardTitle>
        <CardDescription>
          Real-time collaborative code editing with conflict resolution
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span className="text-sm">2 developers active</span>
          {cursors.map((cursor, idx) => (
            <span key={idx} className={`text-xs ${cursor.color}`}>
              {cursor.user}
            </span>
          ))}
        </div>
        
        <div className="relative">
          <pre className="bg-gray-900 text-white p-3 rounded text-xs font-mono h-28 overflow-hidden">
            {code}
          </pre>
          {cursors.map((cursor, idx) => (
            <div
              key={idx}
              className={`absolute w-0.5 h-4 bg-current ${cursor.color}`}
              style={{
                top: `${60 + cursor.line * 12}px`,
                left: `${20 + cursor.char * 6}px`
              }}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={simulateTyping} disabled={isTyping}>
            {isTyping ? <Zap className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
            {isTyping ? 'Syncing...' : 'Add Method'}
          </Button>
          <span className="text-xs text-muted-foreground">
            Last sync: 2s ago
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Operational Transform</Badge>
          <Badge variant="outline">WebSocket</Badge>
          <Badge variant="outline">Conflict Resolution</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default SynchronousCodingDemo;
