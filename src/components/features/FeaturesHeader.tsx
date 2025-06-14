import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FeaturesHeader = () => {
  return (
    <div className="text-center mb-16 animate-in">
      <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
        🚀 Powerful Features
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Your Village's Digital Lifeline
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
        Village Assistant is your all-in-one emergency response and community support platform. 
        From instant medical assistance to reliable mechanic services, we've got your village covered 
        with smart, accessible, and reliable features.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" className="group">
          Try it Now
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button size="lg" variant="outline">
          Watch Demo
        </Button>
      </div>
    </div>
  );
};
