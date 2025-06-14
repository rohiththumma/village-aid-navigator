
import { Zap, Settings, Heart, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const UseCases = () => {
  const useCases = [
    {
      icon: Zap,
      title: 'Medical Emergency',
      scenario: 'Family member needs immediate medical attention',
      solution: 'One-tap call to nearest clinic + AI-generated emergency message in local language',
      time: '< 30 seconds'
    },
    {
      icon: Settings,
      title: 'Vehicle Breakdown',
      scenario: 'Tractor or vehicle breaks down in remote area',
      solution: 'GPS location sharing + verified mechanic contacts + service history',
      time: '< 2 minutes'
    },
    {
      icon: Heart,
      title: 'Community Help',
      scenario: 'Need local services or recommendations',
      solution: 'Community directory + ratings + real-time availability',
      time: '< 1 minute'
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Real-World Use Cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 bg-gradient-to-bl from-primary/10 to-transparent w-32 h-32"></div>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <useCase.icon className="h-8 w-8 text-primary" />
                <Badge variant="outline" className="text-xs">{useCase.time}</Badge>
              </div>
              <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{useCase.scenario}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{useCase.solution}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
