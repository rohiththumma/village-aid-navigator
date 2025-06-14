
import { Shield, Search, Clock, Globe, Heart, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AdditionalFeatures = () => {
  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Admin Moderation',
      description: 'All user-submitted listings undergo thorough verification for authenticity and reliability by our moderation team.'
    },
    {
      icon: Search,
      title: 'Smart Search & Filters',
      description: 'Advanced search with intelligent filters for service type, distance, ratings, availability, and price range.'
    },
    {
      icon: Clock,
      title: '24/7 Emergency Support',
      description: 'Round-the-clock access to emergency services with dedicated helpline and instant callback feature.'
    },
    {
      icon: Globe,
      title: 'Multi-Regional Coverage',
      description: 'Expanding coverage across rural and urban areas with localized service databases for each region.'
    },
    {
      icon: Heart,
      title: 'Health Emergency Alerts',
      description: 'Specialized health emergency features with direct connection to ambulance services and nearby hospitals.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Sync',
      description: 'Seamless synchronization across all your devices with cloud backup of your emergency contacts and preferences.'
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Advanced Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-in">
        {additionalFeatures.map((feature, index) => (
          <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-t-4 border-t-primary">
            <CardContent className="p-8">
              <div className="p-4 rounded-full bg-primary text-primary-foreground w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
