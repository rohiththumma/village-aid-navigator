
import { MapPin, Phone, Search, Bell, Settings, Clock, Users, Shield, Zap, Globe, Heart, Smartphone, Star, CheckCircle, ArrowRight, PlayCircle, Award, TrendingUp, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Village Rampur',
      rating: 5,
      text: 'Village Assistant saved my day when my tractor broke down during harvest season. Found a mechanic within minutes!',
      avatar: '👨‍🌾'
    },
    {
      name: 'Priya Sharma',
      location: 'Village Greenfield',
      rating: 5,
      text: 'The offline mode is incredible. Even without internet, I could access emergency contacts when my child fell sick.',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Mohammed Ali',
      location: 'Village Sunset',
      rating: 5,
      text: 'Local language support made it so easy to communicate with service providers. Truly built for our community.',
      avatar: '🧑‍🔧'
    }
  ];

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

  const comparisonFeatures = [
    { feature: 'GPS Location Detection', village: true, others: false },
    { feature: 'Offline Mode', village: true, others: false },
    { feature: 'Local Language Support', village: true, others: false },
    { feature: 'Community Verification', village: true, others: false },
    { feature: 'One-tap Emergency Call', village: true, others: true },
    { feature: 'Real-time Updates', village: true, others: true }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
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

        {/* Main Features */}
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

        {/* Use Cases Section */}
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

        {/* Feature Comparison Card */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-secondary/5 via-background to-primary/5">
            <CardHeader className="text-center">
              <Badge className="w-fit mx-auto mb-4 bg-gradient-to-r from-primary to-secondary text-white">
                🥇 COMPARISON
              </Badge>
              <CardTitle className="text-3xl mb-4">Village Assistant vs Others</CardTitle>
              <p className="text-xl text-muted-foreground">
                See why we're the preferred choice for rural communities
              </p>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 font-semibold">Features</th>
                      <th className="text-center py-4 font-semibold text-primary">Village Assistant</th>
                      <th className="text-center py-4 font-semibold text-muted-foreground">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((item, index) => (
                      <tr key={index} className="border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                        <td className="py-3">{item.feature}</td>
                        <td className="text-center py-3">
                          {item.village ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="text-center py-3">
                          {item.others ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

        {/* Community Feature */}
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
                  <h4 className="text-lg font-semibold flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                    What You Can Add:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Shop Name & Contact Details</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Service Type (Garage, Clinic, Grocery, etc.)</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Location Information & Photos</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Operating Hours & Special Services</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Emergency Contact Information</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    Quality Assurance:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center"><Award className="h-4 w-4 text-blue-500 mr-2" /> Admin moderation & verification</li>
                    <li className="flex items-center"><Star className="h-4 w-4 text-yellow-500 mr-2" /> Community ratings & reviews</li>
                    <li className="flex items-center"><TrendingUp className="h-4 w-4 text-green-500 mr-2" /> Regular accuracy updates</li>
                    <li className="flex items-center"><Shield className="h-4 w-4 text-red-500 mr-2" /> Spam & fraud protection</li>
                    <li className="flex items-center"><Users className="h-4 w-4 text-purple-500 mr-2" /> Local moderator network</li>
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

        {/* Interactive Demo Card */}
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

        {/* Feature Showcase Stats */}
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
