
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Testimonials = () => {
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

  return (
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
  );
};
