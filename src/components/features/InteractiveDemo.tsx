
import { PlayCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const InteractiveDemo = () => {
  return (
    <div className="mb-16">
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
        <CardContent className="p-8 text-center">
          <PlayCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h3 className="text-2xl font-bold mb-4">See Village Assistant in Action</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Watch our interactive demo to see how easy it is to find help in your village. 
            Experience the app before you download it.
          </p>
          <Button className="group">
            Watch Demo
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
