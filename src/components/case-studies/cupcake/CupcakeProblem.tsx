import { AlertTriangle, ShoppingCart, Search, Smartphone, Ban  } from "lucide-react";

const CupcakeProblem = () => {
  const problems = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Hard to Navigate",
      description: "Unclear menus made finding products difficult"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Confusing Checkout",
      description: "Complex process led to cart abandonment"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Missing Information",
      description: "No product details, ingredients, or reviews"
    },
    {
      icon: <Ban className="w-8 h-8" />,
      title: "Limited Filters",
      description: "Users couldn’t narrow down options to match their preferences"
    }
  ];

  return (
    <section className="py-16 px-6 bg-coral-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🪧 The Problem
          </h2>
          <p className="text-xl text-muted-foreground">
            Customers struggled with the website, leading to abandoned purchases
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border">
              <div className="text-coral mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Impact on Business</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2">High</div>
              <p className="text-muted-foreground">Cart Abandonment Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2">Low</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CupcakeProblem;