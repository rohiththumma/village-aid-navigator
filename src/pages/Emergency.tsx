
import { useState } from 'react';
import { Phone, MapPin, Bell, Settings, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Emergency = () => {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [customMessage, setCustomMessage] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [emergencyType, setEmergencyType] = useState('');

  const emergencyContacts = [
    {
      name: 'Police',
      number: '100',
      description: 'Police Emergency',
      icon: '🚔',
      priority: 'high'
    },
    {
      name: 'Fire Department',
      number: '101',
      description: 'Fire Emergency',
      icon: '🚒',
      priority: 'high'
    },
    {
      name: 'Ambulance',
      number: '108',
      description: 'Medical Emergency',
      icon: '🚑',
      priority: 'high'
    },
    {
      name: 'Local Hospital',
      number: '+91 98765 43210',
      description: 'Nearest Hospital',
      icon: '🏥',
      priority: 'medium'
    },
    {
      name: 'Village Pradhan',
      number: '+91 98765 43211',
      description: 'Local Authority',
      icon: '👨‍💼',
      priority: 'medium'
    },
    {
      name: 'Tourist Helpline',
      number: '1363',
      description: 'Tourism Emergency',
      icon: '📞',
      priority: 'low'
    }
  ];

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'हिंदी (Hindi)' },
    { value: 'bengali', label: 'বাংলা (Bengali)' },
    { value: 'tamil', label: 'தமிழ் (Tamil)' },
    { value: 'marathi', label: 'मराठी (Marathi)' },
    { value: 'gujarati', label: 'ગુજરાતી (Gujarati)' }
  ];

  const emergencyTypes = [
    { value: 'medical', label: 'Medical Emergency' },
    { value: 'vehicle', label: 'Vehicle Breakdown' },
    { value: 'accident', label: 'Accident' },
    { value: 'lost', label: 'Lost/Stranded' },
    { value: 'police', label: 'Police Assistance' },
    { value: 'fire', label: 'Fire Emergency' },
    { value: 'other', label: 'Other Emergency' }
  ];

  const handleCall = (number: string, name: string) => {
    console.log(`Emergency call to ${name} at ${number}`);
    toast({
      title: `Calling ${name}`,
      description: `Initiating call to ${number}`,
    });
  };

  const generateAIMessage = () => {
    if (!emergencyType) {
      toast({
        title: "Please select emergency type",
        description: "Select the type of emergency to generate appropriate message.",
        variant: "destructive"
      });
      return;
    }

    // Mock AI message generation
    const messages = {
      'english': {
        'medical': "Hello, I need immediate medical assistance. I am a traveler and currently at [Location]. Please help me find the nearest doctor or medical facility. This is urgent.",
        'vehicle': "Hello, my vehicle has broken down and I need mechanical help. I am stranded at [Location]. Can you please help me find a nearby mechanic or towing service?",
        'accident': "Hello, there has been an accident at [Location]. We need immediate help. Please send medical assistance and notify local authorities.",
        'lost': "Hello, I am a traveler and I am lost. I am currently at [Location] and need guidance to reach [Destination]. Can you please help me?",
        'police': "Hello, I need police assistance at [Location]. This is regarding a safety concern. Please help me contact local authorities.",
        'fire': "Hello, there is a fire emergency at [Location]. Please send fire department immediately. This is urgent.",
        'other': "Hello, I need emergency assistance at [Location]. I am a traveler and require immediate help. Please assist me."
      },
      'hindi': {
        'medical': "नमस्ते, मुझे तुरंत चिकित्सा सहायता चाहिए। मैं एक यात्री हूं और वर्तमान में [स्थान] पर हूं। कृपया निकटतम डॉक्टर या चिकित्सा सुविधा खोजने में मेरी सहायता करें।",
        'vehicle': "नमस्ते, मेरा वाहन खराब हो गया है और मुझे मैकेनिक की मदद चाहिए। मैं [स्थान] पर फंसा हूं। कृपया निकटतम मैकेनिक खोजने में मेरी सहायता करें।",
        'lost': "नमस्ते, मैं एक यात्री हूं और मैं खो गया हूं। मैं वर्तमान में [स्थान] पर हूं। कृपया मेरी सहायता करें।"
      }
    };

    const lang = selectedLanguage as keyof typeof messages;
    const type = emergencyType as keyof typeof messages['english'];
    const message = messages[lang]?.[type] || messages['english'][type] || messages['english']['other'];
    
    setGeneratedMessage(message);
    toast({
      title: "AI Message Generated",
      description: "Emergency message has been created in your selected language.",
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Alert Header */}
        <div className="text-center mb-12 animate-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-destructive text-destructive-foreground animate-pulse">
              <AlertTriangle className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-destructive">
            Emergency Assistance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quick access to emergency services and AI-powered help messages. 
            Your location is being tracked for emergency services.
          </p>
        </div>

        {/* Current Location */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-destructive" />
                <div>
                  <h3 className="font-semibold">Current Location</h3>
                  <p className="text-muted-foreground">Ramnagar Village, Uttarakhand</p>
                  <p className="text-sm text-muted-foreground">
                    GPS: 29.3919° N, 79.1291° E • Updated: Just now
                  </p>
                </div>
                <Badge variant="destructive" className="ml-auto">
                  <Bell className="h-3 w-3 mr-1" />
                  ACTIVE
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency Contacts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Emergency Contacts</h2>
            
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${
                    contact.priority === 'high' 
                      ? 'border-destructive/30 bg-destructive/5' 
                      : contact.priority === 'medium'
                      ? 'border-orange-300/30 bg-orange-50/30 dark:bg-orange-950/20'
                      : 'border-border'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{contact.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold">{contact.name}</h3>
                          <p className="text-sm text-muted-foreground">{contact.description}</p>
                          <p className="text-lg font-mono font-bold mt-1">{contact.number}</p>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleCall(contact.number, contact.name)}
                        className={`px-6 py-3 ${
                          contact.priority === 'high' 
                            ? 'bg-destructive hover:bg-destructive/90 pulse-button' 
                            : ''
                        }`}
                        variant={contact.priority === 'high' ? 'default' : 'outline'}
                        size="lg"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Help Message Generator */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">AI Help Message</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>Generate Help Message</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  AI will create a contextual help message in your selected language
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Emergency Type</label>
                    <Select value={emergencyType} onValueChange={setEmergencyType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select emergency type" />
                      </SelectTrigger>
                      <SelectContent>
                        {emergencyTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Language</label>
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang.value} value={lang.value}>
                            {lang.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={generateAIMessage}
                    className="w-full"
                    size="lg"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Generate AI Message
                  </Button>
                </div>

                {generatedMessage && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Generated Message</label>
                      <Textarea
                        value={generatedMessage}
                        onChange={(e) => setGeneratedMessage(e.target.value)}
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => navigator.clipboard.writeText(generatedMessage)}
                        variant="outline"
                        className="flex-1"
                      >
                        Copy Message
                      </Button>
                      <Button 
                        onClick={() => {
                          const message = encodeURIComponent(generatedMessage);
                          window.open(`sms:?body=${message}`, '_blank');
                        }}
                        className="flex-1"
                      >
                        Send SMS
                      </Button>
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium mb-2 block">Custom Message (Optional)</label>
                  <Textarea
                    placeholder="Add any additional details about your emergency..."
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-800 dark:text-blue-200">
                  Emergency Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-blue-700 dark:text-blue-300">
                <p>• Stay calm and provide clear information</p>
                <p>• Always mention your exact location</p>
                <p>• Keep your phone charged for emergencies</p>
                <p>• Share your location with trusted contacts</p>
                <p>• Save important numbers before traveling</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="max-w-6xl mx-auto mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Current Location & Nearby Services</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map showing your location</p>
                  <p className="text-sm text-muted-foreground">and nearby emergency services</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
