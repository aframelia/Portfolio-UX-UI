import { X, ShoppingCart, Clock, AlertTriangle } from "lucide-react";

const SquidgiesProblem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      text: "Their child's size is out of stock"
    },
    {
      icon: X,
      text: "Filtering and sorting options don't reflect their needs"
    },
    {
      icon: Clock,
      text: "They waste time browsing irrelevant products"
    },
    {
      icon: ShoppingCart,
      text: "This leads to frustration, abandonment, and loss of trust"
    }
  ];

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            🚨 The Problem
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Many users find clothing items they love in e-commerce apps, only to discover:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border">
                <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-foreground">{problem.text}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10 p-6 rounded-xl border border-destructive/20">
          <p className="text-center text-lg font-medium text-foreground">
            This leads to frustration, abandonment, and loss of trust in the platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SquidgiesProblem;