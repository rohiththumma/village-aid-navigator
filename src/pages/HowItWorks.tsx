
import { MapPin, Search, Phone, Bell, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: MapPin,
      title: 'Open & Detect Location',
      description: 'Launch the app and allow GPS access. We automatically detect your current village and surrounding areas.',
      details: ['Precise GPS detection', 'Automatic village identification', 'Works offline too']
    },
    {
      number: 2,
      icon: Search,
      title: 'Select Your Problem',
      description: 'Choose from categories like mechanics, medical shops, clinics, or use smart search to find specific services.',
      details: ['Quick category selection', 'Smart search suggestions', 'Filter by distance and ratings']
    },
    {
      number: 3,
      icon: Phone,
      title: 'View Contacts',
      description: 'Browse verified local contacts with details like services offered, location, and user ratings.',
      details: ['Verified contact information', 'Service descriptions', 'Real-time availability']
    },
    {
      number: 4,
      icon: Bell,
      title: 'Call / Message / Add to Help Map',
      description: 'Connect instantly with one-tap calling, send AI-generated messages, or mark locations for future reference.',
      details: ['One-tap calling', 'AI-powered messaging', 'Personal help map']
    },
    {
      number: 5,
      icon: Settings,
      title: 'Rate or Contribute',
      description: 'Help the community by rating services and adding new local helpers to improve the directory for everyone.',
      details: ['Rate your experience', 'Add new services', 'Community-driven updates']
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Village Assistant Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting help in an unknown village has never been easier. Follow these simple steps 
            to connect with local services and emergency help.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 translate-y-6 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-200">
                          <step.icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-2xl font-bold text-primary">0{step.number}</span>
                            <h3 className="text-2xl font-semibold">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground text-lg mb-4">{step.description}</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Flow */}
        <div className="mt-20 bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Emergency Situation?</h2>
            <p className="text-xl text-muted-foreground">
              For urgent situations, we've streamlined the process even further
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-6xl mb-4">🚨</div>
                <h3 className="font-semibold mb-2">Emergency Mode</h3>
                <p className="text-sm text-muted-foreground">
                  One-tap access to critical services
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-6xl mb-4">📞</div>
                <h3 className="font-semibold mb-2">Instant Connect</h3>
                <p className="text-sm text-muted-foreground">
                  Direct calling without browsing
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="font-semibold mb-2">AI Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Automated help messages in local language
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Try It?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the simplicity of finding help in unfamiliar places
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 rounded-full">
              <Link to="/directory">Start Exploring</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full">
              <Link to="/features">View All Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
