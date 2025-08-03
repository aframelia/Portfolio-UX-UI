import { CheckCircle, UserPlus, Filter, ShoppingBag, Smartphone } from "lucide-react";

const SquidgiesGoals = () => {
  const solutions = [
    {
      icon: UserPlus,
      title: "Child Profile Registration",
      description: "Registering a child's details (age, size, preferences)"
    },
    {
      icon: Filter,
      title: "Smart Filtering",
      description: "Automatically filtering out unavailable items"
    },
    {
      icon: ShoppingBag,
      title: "Efficient Shopping",
      description: "Reducing browsing time and increasing successful purchases"
    },
    {
      icon: Smartphone,
      title: "Personalized Experience",
      description: "Making shopping simpler, smarter, and personalized"
    }
  ];

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ✅ The Solution
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Create an aggregator e-commerce app tailored to parents by:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="relative">
                <div className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
                
                {/* Arrow connecting solutions on desktop */}
                {index % 2 === 0 && index < solutions.length - 2 && (
                  <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <svg className="w-6 h-6 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-primary" />
            <p className="text-center text-lg font-medium text-foreground">
              Making shopping simpler, smarter, and personalized for busy parents
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquidgiesGoals;