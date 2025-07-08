
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessagesSquare, Send, User, Users } from "lucide-react";

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: string;
  type: 'user' | 'system';
}

const RealtimeChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', user: 'System', text: 'WebSocket connection established', timestamp: '10:30', type: 'system' },
    { id: '2', user: 'Alice', text: 'Hey everyone! 👋', timestamp: '10:31', type: 'user' },
    { id: '3', user: 'Bob', text: 'Hi Alice! How are you?', timestamp: '10:32', type: 'user' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [onlineUsers] = useState(['Alice', 'Bob', 'Charlie']);

  useEffect(() => {
    // Simulate typing indicator
    if (isTyping) {
      const timer = setTimeout(() => setIsTyping(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isTyping]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      user: 'You',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'user'
    };
    
    setMessages(prev => [...prev, message]);
    setNewMessage('');
    setIsTyping(true);
    
    // Simulate response
    setTimeout(() => {
      const responses = [
        "That's interesting! 🤔",
        "I agree with you",
        "Thanks for sharing!",
        "Good point! 👍",
        "Let me think about that..."
      ];
      const response: Message = {
        id: (Date.now() + 1).toString(),
        user: onlineUsers[Math.floor(Math.random() * onlineUsers.length)],
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'user'
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessagesSquare className="h-5 w-5" />
          Real-time Chat System
        </CardTitle>
        <CardDescription>
          P2P and group chat with WebSockets, presence indicators, and typing notifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>Online:</span>
          {onlineUsers.map((user, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              {user}
            </Badge>
          ))}
        </div>
        
        <div className="border rounded-lg p-4 h-64 overflow-y-auto space-y-2 bg-muted/20">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-2 ${
                msg.type === 'system' 
                  ? 'bg-muted text-muted-foreground text-center text-xs' 
                  : msg.user === 'You' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background border'
              }`}>
                {msg.type === 'user' && (
                  <div className="flex items-center gap-2 text-xs opacity-70 mb-1">
                    <User className="h-3 w-3" />
                    {msg.user}
                    <span>{msg.timestamp}</span>
                  </div>
                )}
                <div className="text-sm">{msg.text}</div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-background border rounded-lg p-2 text-sm text-muted-foreground italic">
                Someone is typing...
              </div>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1"
          />
          <Button onClick={sendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Django Channels</Badge>
          <Badge variant="outline">WebSockets</Badge>
          <Badge variant="outline">Redis</Badge>
          <Badge variant="outline">Real-time</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealtimeChatDemo;
