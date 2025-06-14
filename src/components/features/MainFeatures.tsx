
import { MapPin, Phone, Zap, Settings, Bell, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const MainFeatures = () => {
  const mainFeatures = [
    {
      icon: MapPin,
      title: 'GPS Auto Location',
      description: 'Automatically detect your precise location and find nearby services within your village or surrounding areas using advanced GPS technology.',
      benefits: ['Instant location detection', 'Accurate radius search', 'Works in remote areas', 'Satellite backup']
    },
    {
      icon: Phone,
      title: 'Mechanic & Medical Listings',
      description: 'Comprehensive database of verified mechanics, medical shops, clinics, and healthcare providers with real-time status updates.',
      benefits: ['Verified contacts', 'Real-time availability', 'Service specializations', 'Emergency ratings']
    },
    {
      icon: Zap,
      title: 'One-tap Emergency Call',
      description: 'Lightning-fast emergency calling with smart routing to the nearest available service provider in your area.',
      benefits: ['One-touch calling', 'Smart routing', 'Emergency shortcuts', 'Call history & backup']
    },
    {
      icon: Settings,
      title: 'AI-powered Help Messages',
      description: 'Smart AI creates contextual help messages in multiple local languages and dialects for seamless communication.',
      benefits: ['15+ local languages', 'Context-aware messages', 'Voice translation', 'Cultural adaptation']
    },
    {
      icon: Bell,
      title: 'Offline Mode',
      description: 'Essential features work even without internet connectivity, with automatic sync when connection is restored.',
      benefits: ['Offline contact access', 'Cached location data', 'Emergency mode', 'Auto-sync capability']
    },
    {
      icon: Users,
      title: 'Community Directory',
      description: 'Dynamic community-driven directory where locals can contribute and update service information in real-time.',
      benefits: ['Community verified', 'Real-time updates', 'Local recommendations', 'Trust ratings']
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 stagger-in">
      {mainFeatures.map((feature, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-200">
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
  );
};
