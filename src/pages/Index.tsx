
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
      bgColor: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      icon: Phone,
      title: 'One-tap Call',
      description: 'Direct calling to emergency services with saved contact information.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access emergency help anytime, anywhere, even in remote areas.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'AI-powered search to find exactly what you need in seconds.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      icon: Bell,
      title: 'Offline Mode',
      description: 'Essential features work even without internet connectivity.',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-950'
    },
    {
      icon: Settings,
      title: 'Multi-language',
      description: 'Communicate with locals in their preferred language.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950'
    },
  ];

  const stats = [
    { number: '24/7', label: 'Emergency Support', icon: Clock },
    { number: '100%', label: 'Offline Capable', icon: Shield },
    { number: '15+', label: 'Local Languages', icon: Users },
    { number: '1000+', label: 'Villages Covered', icon: MapPin }
  ];

  const testimonials = [
    {
      text: "Village Assistant saved my day when my tractor broke down during harvest season!",
      author: "Rajesh Kumar",
      location: "Village Rampur",
      rating: 5
    },
    {
      text: "The offline mode is incredible. Even without internet, I could access emergency contacts.",
      author: "Priya Sharma", 
      location: "Village Greenfield",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="max-w-4xl mx-auto text-center animate-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              <span className="block">Instant Village Help,</span>
              <span className="block text-muted-foreground">Wherever You Are</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Your location-based guide to local emergency services. Connect with mechanics, 
              medical shops, clinics, and trusted helpers in any village.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
              <Button
                asChild
                size="lg"
                className="pulse-button text-base px-6 py-3 rounded-full w-full sm:w-auto"
              >
                <Link to="/directory">
                  🚀 Launch App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-6 py-3 rounded-full hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all duration-300 w-full sm:w-auto"
              >
                <Link to="/emergency">
                  📞 Emergency Help Now
                </Link>
              </Button>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-muted/30 animate-fade-in">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-xl md:text-2xl font-bold">{stat.number}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Powerful Features for Every Emergency
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for travelers and locals who need quick access to essential services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 stagger-in mb-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full border-l-4 border-l-primary"
              >
                <CardContent className="p-4 md:p-5 h-full flex flex-col">
                  <div className={`p-3 rounded-lg ${feature.bgColor} w-fit mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm mb-3 italic">"{testimonial.text}"</p>
                  <div className="text-xs text-muted-foreground">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div>{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Join thousands of travelers who trust Village Assistant for their emergency needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-6 py-3 rounded-full w-full sm:w-auto"
              >
                <Link to="/directory">
                  Explore Directory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-6 py-3 rounded-full w-full sm:w-auto"
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
