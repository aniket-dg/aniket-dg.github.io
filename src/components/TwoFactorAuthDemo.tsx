
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Smartphone, CheckCircle, XCircle } from "lucide-react";

const TwoFactorAuthDemo = () => {
  const [step, setStep] = useState<'login' | 'otp' | 'success'>('login');
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [otpCode, setOtpCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpError, setOtpError] = useState('');

  const handleLogin = () => {
    if (credentials.username && credentials.password) {
      setStep('otp');
    }
  };

  const handleOtpVerification = () => {
    setIsVerifying(true);
    setOtpError('');
    
    setTimeout(() => {
      if (otpCode === '123456') {
        setStep('success');
      } else {
        setOtpError('Invalid OTP code. Try 123456');
      }
      setIsVerifying(false);
    }, 1000);
  };

  const resetDemo = () => {
    setStep('login');
    setCredentials({ username: '', password: '' });
    setOtpCode('');
    setOtpError('');
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Two-Factor Authentication
        </CardTitle>
        <CardDescription>
          TOTP and SMS-based 2FA implementation for enhanced security
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {step === 'login' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Username</label>
              <Input
                placeholder="Enter username"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
        )}

        {step === 'otp' && (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <Smartphone className="h-12 w-12 mx-auto text-primary" />
              <h3 className="font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">
                Enter the 6-digit code from your authenticator app
              </p>
            </div>
            
            <div className="space-y-2">
              <Input
                placeholder="Enter 6-digit code"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                maxLength={6}
                className="text-center text-lg tracking-widest"
              />
              {otpError && (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <XCircle className="h-4 w-4" />
                  {otpError}
                </div>
              )}
            </div>
            
            <Button 
              onClick={handleOtpVerification} 
              disabled={isVerifying || otpCode.length !== 6}
              className="w-full"
            >
              {isVerifying ? 'Verifying...' : 'Verify Code'}
            </Button>
            
            <div className="text-center text-sm text-muted-foreground">
              Demo code: <code className="bg-muted px-2 py-1 rounded">123456</code>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="space-y-4 text-center">
            <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
            <h3 className="font-medium text-lg">Authentication Successful!</h3>
            <p className="text-sm text-muted-foreground">
              You have been securely logged in with 2FA
            </p>
            <Button onClick={resetDemo} variant="outline" className="w-full">
              Try Again
            </Button>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">TOTP</Badge>
          <Badge variant="outline">SMS Verification</Badge>
          <Badge variant="outline">JWT</Badge>
          <Badge variant="outline">Django Auth</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default TwoFactorAuthDemo;
