
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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <FeaturesHeader />
        <MainFeatures />
        <UseCases />
        <FeatureComparison />
        <Testimonials />
        <InnovativeFeatures />
        <CommunityFeature />
        <AdditionalFeatures />
        <InteractiveDemo />
        <FeatureStats />
      </div>
    </div>
  );
};

export default Features;
