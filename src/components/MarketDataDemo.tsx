
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const MarketDataDemo = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [marketData, setMarketData] = useState([
    { symbol: "AAPL", price: 150.25, change: 2.34, changePercent: 1.58 },
    { symbol: "GOOGL", price: 2785.50, change: -15.20, changePercent: -0.54 },
    { symbol: "MSFT", price: 310.80, change: 5.67, changePercent: 1.86 },
    { symbol: "TSLA", price: 245.90, change: -8.45, changePercent: -3.32 }
  ]);
  
  useEffect(() => {
    if (isConnected) {
      const interval = setInterval(() => {
        setMarketData(prev => prev.map(stock => ({
          ...stock,
          price: stock.price + (Math.random() - 0.5) * 10,
          change: (Math.random() - 0.5) * 20,
          changePercent: (Math.random() - 0.5) * 5
        })));
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [isConnected]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Market Data Stream
        </CardTitle>
        <CardDescription>
          Real-time financial data via WebSocket connections
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-sm">{isConnected ? 'Connected' : 'Disconnected'}</span>
        </div>
        
        <div className="space-y-2">
          {marketData.map((stock, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 border rounded">
              <div className="font-medium">{stock.symbol}</div>
              <div className="text-right">
                <div className="font-mono text-sm">${stock.price.toFixed(2)}</div>
                <div className={`flex items-center gap-1 text-xs ${
                  stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stock.change >= 0 ? 
                    <TrendingUp className="h-3 w-3" /> : 
                    <TrendingDown className="h-3 w-3" />
                  }
                  {stock.changePercent.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={() => setIsConnected(!isConnected)} 
          className="w-full"
          variant={isConnected ? "destructive" : "default"}
        >
          {isConnected ? 'Disconnect' : 'Connect to Feed'}
        </Button>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">WebSocket</Badge>
          <Badge variant="outline">Real-time</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketDataDemo;
