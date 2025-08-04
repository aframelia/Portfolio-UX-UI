import { MessageSquare, Search, Users, Target, Map, Lightbulb } from "lucide-react";

const SquidgiesResearch = () => {
  const researchPhases = [
    { icon: MessageSquare, phase: "1. Empathize", action: "User interviews, market research with parents, competitive analysis" },
    { icon: Target, phase: "2. Define", action: "Problem framing, personas, user journey" },
    { icon: Lightbulb, phase: "3. Ideate", action: "Feature prioritization and user flow mapping" },
    { icon: Search, phase: "4. Design", action: "Wireframes, high-fidelity UI in Figma" },
    { icon: Users, phase: "5. Test", action: "Usability testing, feedback implementation, iteration" }
  ];

  const painPoints = [
    "No filters based on child-specific sizing",
    "Inventory mismatch (shows out-of-stock items)",
    "Confusing registration vs. checkout flow", 
    "Long navigation to product details",
    "Poor mobile UI clarity for parents in a rush"
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            🧭 Design Process
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {researchPhases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{phase.phase}</h3>
                <p className="text-muted-foreground text-xs">{phase.action}</p>
                
                {/* Arrow for desktop */}
                {index < researchPhases.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-8 ml-2">
                    <svg className="w-6 h-6 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-card p-8 rounded-xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            💬 Key Pain Points
          </h3>
          <div className="space-y-4">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquidgiesResearch;