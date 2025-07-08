
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Timer, CheckCircle, Clock } from "lucide-react";

const AsyncTaskDemo = () => {
  const [tasks, setTasks] = useState<Array<{id: string, name: string, status: 'pending' | 'running' | 'completed', progress: number}>>([]);
  
  const addTask = (name: string) => {
    const taskId = Date.now().toString();
    const newTask = { id: taskId, name, status: 'pending' as const, progress: 0 };
    setTasks(prev => [...prev, newTask]);
    
    // Simulate task processing
    setTimeout(() => {
      setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: 'running' } : t));
      
      // Simulate progress updates
      const interval = setInterval(() => {
        setTasks(prev => {
          const updated = prev.map(t => {
            if (t.id === taskId && t.status === 'running') {
              const newProgress = Math.min(t.progress + 10, 100);
              return { ...t, progress: newProgress };
            }
            return t;
          });
          
          const currentTask = updated.find(t => t.id === taskId);
          if (currentTask?.progress === 100) {
            clearInterval(interval);
  return updated
    .map(t => t.id === taskId ? { ...t, status: 'completed' } : t)
    .filter(t => t.id !== taskId); // remove completed task
          }
          
          return updated;
        });
      }, 200);
    }, 500);
  };

  const taskExamples = [
    "Generate PDF Report",
    "Process CSV Data",
    "Send Email Notifications",
    "Backup Database",
    "Resize Images"
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Timer className="h-5 w-5" />
          Asynchronous Task Processing
        </CardTitle>
        <CardDescription>
          Celery-based task queues for background processing
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-2">
          {taskExamples.map((task, idx) => (
            <Button
              key={idx}
              variant="outline"
              size="sm"
              onClick={() => addTask(task)}
              className="text-xs"
            >
              Queue {task}
            </Button>
          ))}
        </div>
        
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {tasks.map((task) => (
            <div key={task.id} className="border rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{task.name}</span>
                <div className="flex items-center gap-2">
                  {task.status === 'pending' && <Clock className="h-4 w-4 text-yellow-500" />}
                  {task.status === 'running' && <Timer className="h-4 w-4 text-blue-500 animate-spin" />}
                  {task.status === 'completed' && <CheckCircle className="h-4 w-4 text-green-500" />}
                  <Badge variant={task.status === 'completed' ? 'default' : 'secondary'}>
                    {task.status}
                  </Badge>
                </div>
              </div>
              {task.status === 'running' && (
                <Progress value={task.progress} className="h-2" />
              )}
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Celery</Badge>
          <Badge variant="outline">Redis</Badge>
          <Badge variant="outline">RabbitMQ</Badge>
          <Badge variant="outline">Background Tasks</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default AsyncTaskDemo;
