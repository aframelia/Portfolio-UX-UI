import { Heart, Search, BarChart3, Accessibility } from "lucide-react";

const SquidgiesNextSteps = () => {
  const nextSteps = [
    {
      icon: Heart,
      title: "Add wishlist/restock alerts",
      description: "Let parents save items and get notified when sizes become available",
      priority: "High"
    },
    {
      icon: Search,
      title: "Explore integration with sizing recommendation engines",
      description: "Use AI to predict size changes as children grow",
      priority: "Medium"
    },
    {
      icon: BarChart3,
      title: "A/B test product card layout",
      description: "Test vertical vs. grid layouts for optimal browsing experience",
      priority: "High"
    },
    {
      icon: Accessibility,
      title: "Improve accessibility features",
      description: "Add voice search and better screen reader support for busy parents",
      priority: "Medium"
    }
  ];

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            🚀 Next Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            Future enhancements to make Squidgies even better for parents
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nextSteps.map((step, index) => {
            const Icon = step.icon;
            const priorityColor = step.priority === "High" ? "text-primary" : "text-muted-foreground";
            const priorityBg = step.priority === "High" ? "bg-primary/10" : "bg-muted-foreground/10";
            
            return (
              <div key={index} className="p-6 bg-background rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${priorityBg} ${priorityColor}`}>
                        {step.priority}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-background p-8 rounded-xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Long-term Vision
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground">
                Expand to include toys, books, and other children's products
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground">
                Integrate with subscription services for growing children
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-foreground">
                Add community features for parent reviews and recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquidgiesNextSteps;