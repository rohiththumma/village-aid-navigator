
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const FeatureComparison = () => {
  const comparisonFeatures = [
    { feature: 'GPS Location Detection', village: true, others: false },
    { feature: 'Offline Mode', village: true, others: false },
    { feature: 'Local Language Support', village: true, others: false },
    { feature: 'Community Verification', village: true, others: false },
    { feature: 'One-tap Emergency Call', village: true, others: true },
    { feature: 'Real-time Updates', village: true, others: true }
  ];

  return (
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
  );
};
