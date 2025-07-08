
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Users, Play, Save } from "lucide-react";

const CollaborativeIDEDemo = () => {
  const [code, setCode] = useState(`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))`);
  
  const [users] = useState([
    { name: "Alice", color: "bg-blue-500", cursor: 45 },
    { name: "Bob", color: "bg-green-500", cursor: 120 },
    { name: "Charlie", color: "bg-purple-500", cursor: 89 }
  ]);
  
  const [output, setOutput] = useState("");
  
  const runCode = () => {
    setOutput("55\n[Program executed successfully]");
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          Collaborative IDE
        </CardTitle>
        <CardDescription>
          Real-time code editing with multiple users
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span className="text-sm">3 users online</span>
          <div className="flex gap-1 ml-2">
            {users.map((user, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${user.color}`}
                title={user.name}
              />
            ))}
          </div>
        </div>
        
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-32 p-2 text-xs font-mono bg-black text-green-400 rounded border resize-none"
            placeholder="Write your code here..."
          />
          <div className="absolute top-2 right-2 flex gap-1">
            <Button size="sm" variant="outline" onClick={runCode}>
              <Play className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="outline">
              <Save className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        {output && (
          <div className="bg-gray-900 text-white p-2 rounded text-xs font-mono">
            {output}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Socket.IO</Badge>
          <Badge variant="outline">Monaco Editor</Badge>
          <Badge variant="outline">Operational Transform</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollaborativeIDEDemo;
