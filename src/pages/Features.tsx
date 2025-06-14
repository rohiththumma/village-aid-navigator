
import { FeaturesHeader } from '@/components/features/FeaturesHeader';
import { MainFeatures } from '@/components/features/MainFeatures';
import { UseCases } from '@/components/features/UseCases';
import { FeatureComparison } from '@/components/features/FeatureComparison';
import { Testimonials } from '@/components/features/Testimonials';
import { InnovativeFeatures } from '@/components/features/InnovativeFeatures';
import { CommunityFeature } from '@/components/features/CommunityFeature';
import { AdditionalFeatures } from '@/components/features/AdditionalFeatures';
import { InteractiveDemo } from '@/components/features/InteractiveDemo';
import { FeatureStats } from '@/components/features/FeatureStats';

const Features = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <FeaturesHeader />
        
        <div className="space-y-20">
          <MainFeatures />
          <UseCases />
          <FeatureComparison />
          <InnovativeFeatures />
          <CommunityFeature />
          <AdditionalFeatures />
          <Testimonials />
          <InteractiveDemo />
          <FeatureStats />
        </div>
      </div>
    </div>
  );
};

export default Features;
