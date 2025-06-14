
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Clock, Search, Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: 'GPS Auto Location',
      description: 'Instantly detect your location and find nearby services in any village.',
    },
    {
      icon: Phone,
      title: 'One-tap Call',
      description: 'Direct calling to emergency services with saved contact information.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access emergency help anytime, anywhere, even in remote areas.',
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'AI-powered search to find exactly what you need in seconds.',
    },
    {
      icon: Bell,
      title: 'Offline Mode',
      description: 'Essential features work even without internet connectivity.',
    },
    {
      icon: Settings,
      title: 'Multi-language',
      description: 'Communicate with locals in their preferred language.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block">Instant Village Help,</span>
              <span className="block text-muted-foreground">Wherever You Are</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your location-based guide to local emergency services. Connect with mechanics, 
              medical shops, clinics, and trusted helpers in any village.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                asChild
                size="lg"
                className="pulse-button text-lg px-8 py-4 rounded-full"
              >
                <Link to="/directory">
                  🚀 Launch App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 rounded-full hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all duration-300"
              >
                <Link to="/emergency">
                  📞 Emergency Help Now
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center animate-fade-in">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Verified Services</div>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm text-muted-foreground">Villages Covered</div>
              </div>
              <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Every Emergency
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for travelers and locals who need quick access to essential services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-in">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-200">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of travelers who trust Village Assistant for their emergency needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 rounded-full"
              >
                <Link to="/directory">
                  Explore Directory
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 rounded-full"
              >
                <Link to="/add-service">
                  Add Your Service
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
