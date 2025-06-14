
import { MapPin, Phone, Search, Bell, Settings, Clock, Users, Shield, Zap, Globe, Heart, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Features = () => {
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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for Every Emergency
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Village Assistant is packed with intelligent features designed to help you find 
            the right help at the right time, no matter where you are. Experience the future of emergency assistance.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 stagger-in">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
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

        {/* Innovative Features Highlight */}
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
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
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

        {/* NEW FEATURE Highlight */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-secondary/5 via-background to-secondary/5 border-secondary/20">
            <CardHeader className="text-center">
              <Badge className="w-fit mx-auto mb-4 bg-secondary text-secondary-foreground">
                ✨ COMMUNITY FEATURE
              </Badge>
              <CardTitle className="text-3xl mb-4">User Contributed Listings</CardTitle>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Now anyone can contribute to our community directory by adding local shops and services.
                Build a stronger, more connected community together.
              </p>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">What You Can Add:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Shop Name & Contact Details</li>
                    <li>• Service Type (Garage, Clinic, Grocery, etc.)</li>
                    <li>• Location Information & Photos</li>
                    <li>• Operating Hours & Special Services</li>
                    <li>• Emergency Contact Information</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Quality Assurance:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Admin moderation & verification</li>
                    <li>• Community ratings & reviews</li>
                    <li>• Regular accuracy updates</li>
                    <li>• Spam & fraud protection</li>
                    <li>• Local moderator network</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-in">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
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
        <div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Village Assistant?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Built by locals, for locals. Our platform combines modern technology with deep understanding 
            of rural community needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm text-muted-foreground">Offline Capable</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Local Languages</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
