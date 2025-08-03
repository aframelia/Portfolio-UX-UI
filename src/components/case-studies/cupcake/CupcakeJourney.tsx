import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

const CupcakeJourney = () => {
  const beforeJourney = [
    { step: "Landing", emotion: "😐", description: "Visits homepage", outcome: "Confused by layout" },
    { step: "Browse", emotion: "😕", description: "Tries to find cupcakes", outcome: "Can't filter products" },
    { step: "Product Page", emotion: "😠", description: "Looks for details", outcome: "No ingredient info" },
    { step: "Checkout", emotion: "😤", description: "Attempts purchase", outcome: "Abandons cart" }
  ];

  const afterJourney = [
    { step: "Landing", emotion: "😊", description: "Clear homepage", outcome: "Sees 'Order Now' CTA" },
    { step: "Browse", emotion: "😍", description: "Easy product browsing", outcome: "Finds perfect cupcake" },
    { step: "Product Page", emotion: "🤩", description: "Detailed info & reviews", outcome: "Confident in choice" },
    { step: "Checkout", emotion: "✅", description: "Smooth purchase", outcome: "Successful order" }
  ];

  const JourneyFlow = ({ journey, title, titleColor, bgColor }: { 
    journey: typeof beforeJourney, 
    title: string, 
    titleColor: string, 
    bgColor: string 
  }) => (
    <div className={`${bgColor} rounded-2xl p-8 shadow-sm border`}>
      <h3 className={`text-2xl font-bold ${titleColor} mb-6 text-center`}>{title}</h3>
      <div className="space-y-4">
        {journey.map((step, index) => (
          <div key={index} className="flex items-center gap-4 bg-card rounded-xl p-4">
            <div className="text-2xl">{step.emotion}</div>
            <div className="flex-1">
              <div className="font-semibold text-foreground">{step.step}</div>
              <div className="text-sm text-muted-foreground">{step.description}</div>
              <div className="text-xs text-muted-foreground mt-1">{step.outcome}</div>
            </div>
            {index < journey.length - 1 && (
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 px-6 bg-lavender-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🗺 User Journey Transformation
          </h2>
          <p className="text-xl text-muted-foreground">From frustration to delight</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <JourneyFlow 
            journey={beforeJourney}
            title="Before Redesign"
            titleColor="text-coral"
            bgColor="bg-coral-light"
          />
          
          <JourneyFlow 
            journey={afterJourney}
            title="After Redesign"
            titleColor="text-mint"
            bgColor="bg-mint-light"
          />
        </div>
        
        {/* Journey Results Comparison */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-lg border text-center">
            <XCircle className="w-12 h-12 text-coral mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Before Result</h3>
            <p className="text-muted-foreground">
              Users left frustrated, couldn't find product information, and abandoned their purchase
            </p>
            <div className="mt-4 text-coral font-bold">Cart Abandonment: High</div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-lg border text-center">
            <CheckCircle className="w-12 h-12 text-mint mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">After Result</h3>
            <p className="text-muted-foreground">
              Seamless shopping experience with clear information and easy checkout process
            </p>
            <div className="mt-4 text-mint font-bold">Conversion Rate: +40%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CupcakeJourney;