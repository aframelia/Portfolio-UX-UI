import { ArrowRight, X, CheckCircle } from "lucide-react";

const SquidgiesJourney = () => {
  const beforeJourney = [
    "Browse",
    "Find cute item", 
    "Size not available",
    "Frustrated",
    "Abandon app"
  ];

  const afterJourney = [
    "Login",
    "Register child",
    "Only see matching items",
    "Add to cart", 
    "Checkout with saved card",
    "Done ✅"
  ];

  const userFlow = [
    "Start",
    "Register", 
    "Register Kid",
    "Home Page",
    "Pick Item",
    "Product Detail",
    "Basket",
    "Checkout", 
    "Payment",
    "Confirmation"
  ];

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            🧭 User Journey
          </h2>
        </div>
        
        {/* Before Journey */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
            <X className="w-5 h-5" />
            Before
          </h3>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {beforeJourney.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-lg border border-destructive/20">
                  {step}
                </div>
                {index < beforeJourney.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-destructive/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* After Journey */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            After
          </h3>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {afterJourney.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg border border-primary/20">
                  {step}
                </div>
                {index < afterJourney.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* User Flow */}
        <div className="bg-background p-8 rounded-xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            🔄 Complete User Flow
          </h3>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {userFlow.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-card text-foreground px-3 py-2 rounded-lg border border-border text-sm">
                  {step}
                </div>
                {index < userFlow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquidgiesJourney;