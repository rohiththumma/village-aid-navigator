
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Clock, Search, Bell, Settings, Star, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: 'GPS Auto Location',
      description: 'Instantly detect your location and find nearby services in any village.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      link: '/directory'
    },
    {
      icon: Phone,
      title: 'One-tap Call',
      description: 'Direct calling to emergency services with saved contact information.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950',
      link: '/emergency'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access emergency help anytime, anywhere, even in remote areas.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950',
      link: '/emergency'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'AI-powered search to find exactly what you need in seconds.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950',
      link: '/directory'
    },
    {
      icon: Bell,
      title: 'Offline Mode',
      description: 'Essential features work even without internet connectivity.',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-950',
      link: '/features'
    },
    {
      icon: Settings,
      title: 'Multi-language',
      description: 'Communicate with locals in their preferred language.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950',
      link: '/features'
    },
  ];

  const stats = [
    { number: '24/7', label: 'Emergency Support', icon: Clock },
    { number: '100%', label: 'Offline Capable', icon: Shield },
    { number: '15+', label: 'Local Languages', icon: Users },
    { number: '1000+', label: 'Villages Covered', icon: MapPin }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Instant Village Help,</span>
              <span className="block text-muted-foreground">Wherever You Are</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your location-based guide to local emergency services. Connect with mechanics, 
              medical shops, clinics, and trusted helpers in any village.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 rounded-full"
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

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-muted/50">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Every Emergency
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for travelers and locals who need quick access to essential services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className={`p-4 rounded-lg ${feature.bgColor} w-fit mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground flex-grow">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
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
