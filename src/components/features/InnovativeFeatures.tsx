
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const InnovativeFeatures = () => {
  const innovativeFeatures = [
    {
      title: 'Voice-Activated Emergency',
      description: 'Just say "Emergency Help" to activate instant assistance'
    },
    {
      title: 'Predictive Service Suggestions',  
      description: 'AI learns your patterns and suggests services before you need them'
    },
    {
      title: 'Weather-Based Alerts',
      description: 'Get notified about services affected by weather conditions'
    },
    {
      title: 'Social Proof Integration',
      description: 'See real reviews and ratings from your community members'
    }
  ];

  return (
    <div className="mb-16">
      <Card className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 border-primary/20">
        <CardHeader className="text-center">
          <Badge className="w-fit mx-auto mb-4 bg-gradient-to-r from-primary to-secondary text-white">
            🚀 INNOVATIVE FEATURES
          </Badge>
          <CardTitle className="text-3xl mb-4">Smart Technology Integration</CardTitle>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience cutting-edge features that make emergency assistance smarter and more intuitive
          </p>
        </CardHeader>
        <CardContent className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {innovativeFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors group">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
