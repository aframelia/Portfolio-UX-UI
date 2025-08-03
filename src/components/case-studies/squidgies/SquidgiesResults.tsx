import { TrendingUp, Clock, Shield, Smartphone } from "lucide-react";

const SquidgiesResults = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: "40%",
      description: "Improved task completion"
    },
    {
      icon: Shield,
      metric: "3x",
      description: "Increased customer confidence in purchase"
    },
    {
      icon: Clock,
      metric: "40%",
      description: "Reduced product discovery time"
    },
    {
      icon: Smartphone,
      metric: "3x faster",
      description: "Checkout flow than benchmark apps"
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div key={index} className="text-center bg-background p-6 rounded-xl border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-muted-foreground text-sm">{result.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-background p-8 rounded-xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Additional Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">Fewer returns (projected based on size-matching logic)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">Increased customer trust with accurate inventory</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">Improved mobile usability for parents on-the-go</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">Reduced decision fatigue through smart filtering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquidgiesResults;