
export const FeatureStats = () => {
  return (
    <div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-8 md:p-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Village Assistant?</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Built by locals, for locals. Our platform combines modern technology with deep understanding 
        of rural community needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div className="space-y-2">
          <div className="text-3xl font-bold text-primary">24/7</div>
          <div className="text-sm text-muted-foreground">Emergency Support</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-secondary">100%</div>
          <div className="text-sm text-muted-foreground">Offline Capable</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-primary">15+</div>
          <div className="text-sm text-muted-foreground">Local Languages</div>
        </div>
      </div>
    </div>
  );
};
