import { ArrowRight, Frown, Search, Smartphone, ExternalLink } from "lucide-react";

const CaseJourney = () => {
  const journeySteps = [
    {
      step: "1",
      title: "Search Flight",
      description: "Opens app to check flight prices with flexible dates",
      emotion: "😐",
      pain: "Too many date changes to find affordable flights"
    },
    {
      step: "2",
      title: "Navigate Menu",
      description: "Struggles to filter flights within budget and flexible dates",
      emotion: "😕",
      pain: "Multiple searches on different dates leading to confusion"
    },
    {
      step: "3",
      title: "Find Status",
      description: "Taps through several screens to compare prices and dates",
      emotion: "😠",
      pain: "Too many taps and repeated manual checks"
    },
    {
      step: "4",
      title: "Set Price Alerts",
      description: "Attempts to set alerts or notifications for better deals",
      emotion: "😣",
      pain: "Alert options are hard to find or not personalized"
    }
  ];

  return (
    <section className="py-16 px-6 bg-lavender-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🧭 User Journey (Before)
          </h2>
          <p className="text-xl text-muted-foreground">Maya's frustrating experience with the original app</p>
        </div>
        
        <div className="relative">
          {/* Journey Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  
                  {/* Emotion */}
                  <div className="text-3xl mb-3">{step.emotion}</div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                  
                  {/* Pain Point */}
                  <div className="bg-coral-light rounded-lg p-3">
                    <p className="text-xs text-coral font-medium">💔 {step.pain}</p>
                  </div>
                </div>
                
                {/* Arrow */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-coral" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Journey Result */}
          <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border max-w-2xl mx-auto text-center">
            <Frown className="w-12 h-12 text-coral mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">End Result</h3>
            <p className="text-muted-foreground">
            Maya had to repeatedly switch between multiple apps and websites to compare flight prices across different dates. The process was confusing and time-consuming, leaving her frustrated and overwhelmed before even booking a flight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseJourney;