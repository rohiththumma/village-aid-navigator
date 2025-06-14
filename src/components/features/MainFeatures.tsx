import { MapPin, Phone, Zap, Settings, Bell, Users, Shield, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const MainFeatures = () => {
  const mainFeatures = [
    {
      icon: MapPin,
      title: 'Smart Location Services',
      description: 'Advanced GPS technology that works even in remote areas, helping you find the nearest emergency services within seconds.',
      benefits: ['Precise location tracking', 'Offline map support', 'Multi-point routing', 'Emergency zone alerts']
    },
    {
      icon: Phone,
      title: 'Emergency Response Network',
      description: 'Instant access to verified medical professionals, mechanics, and emergency services with real-time availability status.',
      benefits: ['24/7 service availability', 'Verified professionals', 'Response time tracking', 'Service ratings']
    },
    {
      icon: Zap,
      title: 'One-Tap Emergency',
      description: 'Life-saving emergency features that connect you to the right help instantly, with smart routing to the nearest available service.',
      benefits: ['Instant emergency calls', 'Smart service routing', 'Location sharing', 'Emergency contacts']
    },
    {
      icon: Settings,
      title: 'AI-Powered Assistance',
      description: 'Intelligent AI system that understands local languages and dialects, making communication seamless in critical situations.',
      benefits: ['Multi-language support', 'Voice commands', 'Smart suggestions', 'Context awareness']
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Built-in safety features including emergency alerts, location sharing, and automatic service verification for your peace of mind.',
      benefits: ['Emergency alerts', 'Location sharing', 'Service verification', 'Privacy controls']
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'A vibrant community network where locals can share information, verify services, and help each other in times of need.',
      benefits: ['Community ratings', 'Local insights', 'Service updates', 'Trust network']
    }
  ];

  return (
    <div className="space-y-8 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Core Features That Make a Difference</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every feature is designed with your village's needs in mind, ensuring quick and reliable access to help when it matters most.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-in">
        {mainFeatures.map((feature, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </div>
              <p className="text-muted-foreground text-lg">{feature.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {feature.benefits.map((benefit, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                    {benefit}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
