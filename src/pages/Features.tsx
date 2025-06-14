
import { MapPin, Phone, Search, Bell, Settings, Clock, Users, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const mainFeatures = [
    {
      icon: MapPin,
      title: 'GPS Auto Location',
      description: 'Automatically detect your precise location and find nearby services within your village or surrounding areas.',
      benefits: ['Instant location detection', 'Accurate radius search', 'Works in remote areas']
    },
    {
      icon: Phone,
      title: 'Mechanic & Medical Listings',
      description: 'Comprehensive database of verified mechanics, medical shops, clinics, and healthcare providers.',
      benefits: ['Verified contacts', 'Real-time availability', 'Service specializations']
    },
    {
      icon: Phone,
      title: 'One-tap Call',
      description: 'Direct calling feature with saved emergency contacts and quick-dial functionality.',
      benefits: ['One-touch calling', 'Emergency shortcuts', 'Call history']
    },
    {
      icon: Settings,
      title: 'AI-generated Help Messages',
      description: 'Smart AI creates contextual help messages in multiple local languages for better communication.',
      benefits: ['Multi-language support', 'Context-aware messages', 'Local dialect adaptation']
    },
    {
      icon: Bell,
      title: 'Offline Mode',
      description: 'Essential features work even without internet connectivity, perfect for rural zones.',
      benefits: ['Offline contact access', 'Cached location data', 'Emergency mode']
    },
    {
      icon: Users,
      title: 'User Contributed Listings',
      description: 'Community-driven directory where anyone can add local services and helpers.',
      benefits: ['Community verified', 'Real-time updates', 'Local recommendations']
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: 'Admin Moderation',
      description: 'All user-submitted listings undergo verification for authenticity and reliability.'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Advanced search with filters for service type, distance, ratings, and availability.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock access to emergency services and contact information.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for Every Emergency
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Village Assistant is packed with intelligent features designed to help you find 
            the right help at the right time, no matter where you are.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 stagger-in">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
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
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* NEW FEATURE Highlight */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 via-background to-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <Badge className="w-fit mx-auto mb-4 bg-primary text-primary-foreground">
                ✨ NEW FEATURE
              </Badge>
              <CardTitle className="text-3xl mb-4">User Contributed Listings</CardTitle>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Now anyone can contribute to our community directory by adding local shops and services
              </p>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">What You Can Add:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Shop Name & Contact Details</li>
                    <li>• Service Type (Garage, Clinic, Grocery, etc.)</li>
                    <li>• Location Information</li>
                    <li>• Optional Photos</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Quality Assurance:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Admin moderation required</li>
                    <li>• Verification process</li>
                    <li>• Community ratings</li>
                    <li>• Regular updates</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-in">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
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

        {/* Feature Showcase */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Village Assistant?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Verified Services</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Villages Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Languages Supported</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
