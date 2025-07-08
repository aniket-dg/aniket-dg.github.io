
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Check, X, Clock } from "lucide-react";

const OTPVerificationDemo = () => {
  const [phoneNumber, setPhoneNumber] = useState("+1 (555) 123-4567");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<'phone' | 'otp' | 'verified'>('phone');
  const [countdown, setCountdown] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);

  const sendOTP = () => {
    setStep('otp');
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const verifyOTP = () => {
    setIsVerifying(true);
    setTimeout(() => {
      if (otp === "123456") {
        setStep('verified');
      }
      setIsVerifying(false);
    }, 1500);
  };

  const reset = () => {
    setStep('phone');
    setOtp("");
    setCountdown(0);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          OTP Verification
        </CardTitle>
        <CardDescription>
          SMS-based two-factor authentication system
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {step === 'phone' && (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
              />
            </div>
            <Button onClick={sendOTP} className="w-full">
              Send OTP
            </Button>
          </>
        )}
        
        {step === 'otp' && (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium">Enter OTP</label>
              <Input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
                maxLength={6}
              />
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {countdown > 0 ? `Resend in ${countdown}s` : 'Code expired'}
              </div>
            </div>
            <Button 
              onClick={verifyOTP} 
              disabled={otp.length !== 6 || isVerifying}
              className="w-full"
            >
              {isVerifying ? 'Verifying...' : 'Verify OTP'}
            </Button>
          </>
        )}
        
        {step === 'verified' && (
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Check className="h-6 w-6" />
              <span className="font-medium">Verified Successfully!</span>
            </div>
            <Button onClick={reset} variant="outline" className="w-full">
              Reset Demo
            </Button>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Twilio</Badge>
          <Badge variant="outline">Rate Limiting</Badge>
          <Badge variant="outline">SMS Gateway</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default OTPVerificationDemo;
