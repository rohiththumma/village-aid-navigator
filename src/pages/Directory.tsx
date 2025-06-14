import { useState } from 'react';
import { Search, MapPin, Phone, Clock, Bell, Settings, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for demonstration
  const services = [
    {
      id: 1,
      name: 'Raj Auto Garage',
      owner: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      type: 'Mechanic',
      distance: '0.5 km',
      rating: 4.8,
      availability: 'Open Now',
      description: 'Expert in all vehicle repairs, 24/7 emergency service',
      verified: true
    },
    {
      id: 2,
      name: 'Village Medical Store',
      owner: 'Dr. Priya Sharma',
      phone: '+91 98765 43211',
      type: 'Medical',
      distance: '0.8 km',
      rating: 4.9,
      availability: 'Open Now',
      description: 'Complete pharmacy with emergency medicines',
      verified: true
    },
    {
      id: 3,
      name: 'Sunset Clinic',
      owner: 'Dr. Ahmed Ali',
      phone: '+91 98765 43212',
      type: 'Clinic',
      distance: '1.2 km',
      rating: 4.7,
      availability: 'Closes at 9 PM',
      description: 'General practice, minor surgeries, emergency care',
      verified: true
    },
    {
      id: 4,
      name: 'Kumar Grocery Store',
      owner: 'Suresh Kumar',
      phone: '+91 98765 43213',
      type: 'Grocery',
      distance: '0.3 km',
      rating: 4.5,
      availability: 'Open Now',
      description: 'Daily essentials, snacks, beverages',
      verified: false
    },
    {
      id: 5,
      name: 'Highway Dhaba',
      owner: 'Ramesh Singh',
      phone: '+91 98765 43214',
      type: 'Restaurant',
      distance: '2.1 km',
      rating: 4.6,
      availability: 'Open 24/7',
      description: 'Traditional Indian food, traveler friendly',
      verified: true
    },
    {
      id: 6,
      name: 'Village Electronics',
      owner: 'Amit Patel',
      phone: '+91 98765 43215',
      type: 'Electronics',
      distance: '1.5 km',
      rating: 4.4,
      availability: 'Open Now',
      description: 'Mobile repairs, electronics, accessories',
      verified: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'mechanic', label: 'Mechanic' },
    { value: 'medical', label: 'Medical' },
    { value: 'clinic', label: 'Clinic' },
    { value: 'grocery', label: 'Grocery' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'electronics', label: 'Electronics' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           service.type.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const handleCall = (phone: string, name: string) => {
    // In a real app, this would initiate a phone call
    console.log(`Calling ${name} at ${phone}`);
    // You could also show a toast notification
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Local Service Directory
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find verified local services near you. All contacts are community-verified 
            and regularly updated for accuracy.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for services, shops, or people..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px] py-3">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Current Location */}
          <div className="bg-muted/30 rounded-lg p-4 mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Current Location: Ramnagar Village, Uttarakhand</span>
              <Badge variant="secondary" className="ml-2">GPS Active</Badge>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              {filteredServices.length} Services Found
            </h2>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Sort by Distance
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-in">
            {filteredServices.map((service, index) => (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                        {service.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{service.owner}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <Badge variant={service.verified ? "default" : "secondary"}>
                        {service.verified ? "✓ Verified" : "Pending"}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {service.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{service.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className={service.availability.includes('Open') ? 'text-green-600' : 'text-muted-foreground'}>
                        {service.availability}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xs ${
                              i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {service.rating}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleCall(service.phone, service.name)}
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    size="lg"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    📞 Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No Services Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or browse all categories
              </p>
              <Button onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Add Your Service CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Don't See Your Service Listed?</h2>
          <p className="text-muted-foreground mb-6">
            Help your community by adding your local business to our directory
          </p>
          <Button asChild size="lg">
            <a href="/add-service">Add Your Service</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Directory;
