
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, User, Store, Image, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AddService = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    shopName: '',
    ownerName: '',
    phoneNumber: '',
    serviceType: '',
    location: '',
    description: '',
    customServiceType: ''
  });

  const serviceTypes = [
    { value: 'mechanic', label: 'Auto Mechanic / Garage' },
    { value: 'medical', label: 'Medical Store / Pharmacy' },
    { value: 'clinic', label: 'Clinic / Hospital' },
    { value: 'grocery', label: 'Grocery Store' },
    { value: 'restaurant', label: 'Restaurant / Dhaba' },
    { value: 'electronics', label: 'Electronics Shop' },
    { value: 'hardware', label: 'Hardware Store' },
    { value: 'fuel', label: 'Fuel Station' },
    { value: 'transport', label: 'Transport Service' },
    { value: 'other', label: 'Other (Please Specify)' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.shopName || !formData.ownerName || !formData.phoneNumber || !formData.serviceType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate submission
    console.log('Submitting service:', formData);
    
    setIsSubmitted(true);
    
    toast({
      title: "Service Submitted Successfully!",
      description: "We'll verify and publish your service soon.",
    });
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleInputChange('location', `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
          toast({
            title: "Location Detected",
            description: "GPS coordinates added to your listing.",
          });
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Could not detect location. Please enter manually.",
            variant: "destructive"
          });
        }
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-8" />
              <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your service has been submitted for review. We'll verify the information 
                and publish it in our directory within 24-48 hours.
              </p>
              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">What happens next?</h3>
                <div className="space-y-2 text-left">
                  <p className="text-sm text-muted-foreground">✓ Admin review and verification</p>
                  <p className="text-sm text-muted-foreground">✓ Contact information validation</p>
                  <p className="text-sm text-muted-foreground">✓ Service goes live in directory</p>
                  <p className="text-sm text-muted-foreground">✓ Email confirmation sent</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/directory">Browse Directory</a>
                </Button>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Add Another Service
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Add Your Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help your community by adding your local business to our directory. 
            All submissions are reviewed to ensure quality and accuracy.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Service Information</CardTitle>
              <p className="text-muted-foreground">
                Please provide accurate information. All fields marked with * are required.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shop/Service Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="shopName" className="flex items-center space-x-2">
                      <Store className="h-4 w-4" />
                      <span>Shop/Service Name *</span>
                    </Label>
                    <Input
                      id="shopName"
                      placeholder="e.g., Raj Auto Garage"
                      value={formData.shopName}
                      onChange={(e) => handleInputChange('shopName', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ownerName" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Owner/Contact Person *</span>
                    </Label>
                    <Input
                      id="ownerName"
                      placeholder="e.g., Rajesh Kumar"
                      value={formData.ownerName}
                      onChange={(e) => handleInputChange('ownerName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Phone Number *</span>
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Custom Service Type */}
                {formData.serviceType === 'other' && (
                  <div className="space-y-2">
                    <Label htmlFor="customServiceType">Please Specify Service Type *</Label>
                    <Input
                      id="customServiceType"
                      placeholder="e.g., Bicycle Repair Shop"
                      value={formData.customServiceType}
                      onChange={(e) => handleInputChange('customServiceType', e.target.value)}
                      required={formData.serviceType === 'other'}
                    />
                  </div>
                )}

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Location</span>
                  </Label>
                  <div className="flex space-x-2">
                    <Input
                      id="location"
                      placeholder="Address or GPS coordinates"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={getCurrentLocation}
                      className="px-6"
                    >
                      📍 Auto-fill
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Click "Auto-fill" to use your current GPS location
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of services offered, specializations, hours, etc."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                {/* Photo Upload Note */}
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Image className="h-6 w-6 text-muted-foreground mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Photo Upload (Coming Soon)</h4>
                      <p className="text-sm text-muted-foreground">
                        Photo upload feature will be available in the next update. 
                        For now, you can mention in the description if you'd like to add photos later.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Review Process</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All submissions undergo admin verification</li>
                    <li>• Contact information will be validated</li>
                    <li>• False or misleading information will be rejected</li>
                    <li>• Review process typically takes 24-48 hours</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button type="submit" size="lg" className="px-12 py-4 text-lg">
                    Submit for Review
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                If you have questions about adding your service or need assistance with the form, 
                we're here to help.
              </p>
              <Button variant="outline">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddService;
