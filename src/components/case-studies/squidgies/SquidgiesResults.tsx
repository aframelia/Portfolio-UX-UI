import { TrendingUp, Clock, Shield, Smartphone } from "lucide-react";

const SquidgiesResults = () => {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            📈 Impact & Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Measurable improvements in user experience and business metrics
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 shadow-sm border">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Before</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Outdated, generic branding</li>
              <li>• Overwhelming homepage layout</li>
              <li>• Lack of product filtering</li>
              <li>• Low user engagement with fun features</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 shadow-sm border">
            <h3 className="text-xl font-bold  mb-6 text-center">After</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Bright, playful brand identity</li>
              <li>• Organized homepage with clear CTAs</li>
              <li>• Easy-to-use filters for flavors & themes</li>
              <li>• Interactive features boosted user joy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquidgiesResults;