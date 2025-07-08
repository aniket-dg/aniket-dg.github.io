
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Video, MessageCircle, Mic, MicOff, VideoOff } from "lucide-react";

const VideoTextChatDemo = () => {
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { user: "You", text: "Hey, can you see my screen?", time: "10:30 AM" },
    { user: "Alice", text: "Yes, looks good! Let's start the code review.", time: "10:31 AM" },
    { user: "Bob", text: "I'll share my screen in a moment", time: "10:32 AM" }
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { 
        user: "You", 
        text: message, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage("");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="h-5 w-5" />
          Video/Text Chat
        </CardTitle>
        <CardDescription>
          WebRTC-based video communication with real-time messaging
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-900 rounded-lg p-4 h-24 flex items-center justify-center">
          {isVideoOn ? (
            <div className="text-white text-sm">📹 Video Feed Active</div>
          ) : (
            <div className="text-gray-400 text-sm">Video Off</div>
          )}
        </div>
        
        <div className="flex justify-center gap-2">
          <Button
            size="sm"
            variant={isVideoOn ? "default" : "outline"}
            onClick={() => setIsVideoOn(!isVideoOn)}
          >
            {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
          </Button>
          <Button
            size="sm"
            variant={isMicOn ? "default" : "outline"}
            onClick={() => setIsMicOn(!isMicOn)}
          >
            {isMicOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
          </Button>
        </div>
        
        <div className="border rounded-lg p-2 h-20 overflow-y-auto text-xs space-y-1">
          {messages.map((msg, idx) => (
            <div key={idx} className="flex justify-between">
              <span><strong>{msg.user}:</strong> {msg.text}</span>
              <span className="text-muted-foreground">{msg.time}</span>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button size="sm" onClick={sendMessage}>
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">WebRTC</Badge>
          <Badge variant="outline">Socket.IO</Badge>
          <Badge variant="outline">MediaStream</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoTextChatDemo;
