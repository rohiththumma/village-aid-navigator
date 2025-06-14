
import { MessageCircle, CheckCircle, Shield, Award, Star, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const CommunityFeature = () => {
  return (
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
  );
};
