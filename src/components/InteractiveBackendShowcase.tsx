
import GitHooksDemo from "./GitHooksDemo";
import AsyncTaskDemo from "./AsyncTaskDemo";
import RealtimeChatDemo from "./RealtimeChatDemo";
import TwoFactorAuthDemo from "./TwoFactorAuthDemo";
import ReusableModulesDemo from "./ReusableModulesDemo";
import MarketDataDemo from "./MarketDataDemo";
import CollaborativeIDEDemo from "./CollaborativeIDEDemo";
import VideoTextChatDemo from "./VideoTextChatDemo";
import SynchronousCodingDemo from "./SynchronousCodingDemo";
import OTPVerificationDemo from "./OTPVerificationDemo";

const InteractiveBackendShowcase = () => {
  return (
    <section id="backend_showcase" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="text-primary mr-2">•</span> Interactive Backend Showcase
        </h2>
        
        <p className="text-muted-foreground mb-10 max-w-3xl">
          See it. Click it. Run it.
Explore live, interactive demos of powerful systems I’ve built — from scalable APIs to real-time platforms — and get a hands-on feel for modern backend architecture in action.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <MarketDataDemo />
          <TwoFactorAuthDemo />
          <CollaborativeIDEDemo />
          <AsyncTaskDemo />
          <RealtimeChatDemo />
          <VideoTextChatDemo />
          <SynchronousCodingDemo />
          <OTPVerificationDemo />
          <ReusableModulesDemo />
          <GitHooksDemo />
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
            These interactive demos represent just a fraction of the backend systems I've architected 
            and implemented. Each one demonstrates real-world problem-solving and technical depth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveBackendShowcase;
