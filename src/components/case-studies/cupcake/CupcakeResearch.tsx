import { MessageCircle, Users, Lightbulb, TrendingDown } from "lucide-react";

const CupcakeResearch = () => {
  const insights = [
    {
      icon: "🔍",
      insight: "No product filtering or categorization",
      impact: "Users couldn't find specific flavors"
    },
    {
      icon: "⚠️", 
      insight: "Ingredients and allergy info missing",
      impact: "Lost customers with dietary restrictions"
    },
    {
      icon: "📱",
      insight: "Poor mobile navigation",
      impact: "60% of users on mobile frustrated"
    },
    {
      icon: "🛒",
      insight: "Checkout process too long",
      impact: "Users abandoned at final step"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🧑‍🤝‍🧑 Talking to Customers
          </h2>
          <p className="text-xl text-muted-foreground">Research revealed critical usability issues</p>
        </div>
        
        {/* Research Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-sm border text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">User Interviews</h3>
            <p className="text-muted-foreground">8 customers shared their experiences</p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-sm border text-center">
            <Users className="w-12 h-12 text-coral mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Usability Audit</h3>
            <p className="text-muted-foreground">Identified navigation pain points</p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-sm border text-center">
            <TrendingDown className="w-12 h-12 text-mint mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Analytics Review</h3>
            <p className="text-muted-foreground">High bounce rate on product pages</p>
          </div>
        </div>
        
        {/* Key Insights */}
        <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 shadow-lg border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Lightbulb className="w-8 h-8 text-primary" />
            Key Research Insights
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.insight}</h4>
                    <p className="text-sm text-muted-foreground">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* User Quote */}
          <div className="mt-8 bg-coral-light rounded-xl p-6 text-center">
            <p className="text-lg italic text-foreground mb-2">
              "I wanted to order cupcakes for my daughter's birthday, but I couldn't find ingredient information anywhere. I ended up going to another bakery."
            </p>
            <p className="text-sm text-muted-foreground">- Kristin, Mom of 2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CupcakeResearch;