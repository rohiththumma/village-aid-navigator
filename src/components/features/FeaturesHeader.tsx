
import { Badge } from '@/components/ui/badge';

export const FeaturesHeader = () => {
  return (
    <div className="text-center mb-16 animate-in">
      <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
        🚀 Powerful Features
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Everything You Need in One App
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Village Assistant is packed with intelligent features designed to help you find 
        the right help at the right time, no matter where you are. Experience the future of emergency assistance.
      </p>
    </div>
  );
};
