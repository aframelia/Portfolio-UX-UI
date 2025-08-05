import { Navigation, ShoppingBag, Info, Smartphone, ArrowRight } from "lucide-react";

const CupcakeGoals = () => {
  const goals = [
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Clear Navigation",
      description: "Intuitive menu structure"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Streamlined Checkout",
      description: "Reduce cart abandonment"
    },
    {
      icon: <Info className="w-8 h-8" />,
      title: "Product Details",
      description: "Ingredients, reviews, allergens"
    },
    // {
    //   icon: <Smartphone className="w-8 h-8" />,
    //   title: "Mobile-First",
    //   description: "Responsive, mobile-friendly design"
    // }
  ];

  return (
    <section className="py-16 px-6 bg-mint-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🎯 UX Goals
          </h2>
          <p className="text-xl text-muted-foreground">Creating a delightful shopping experience</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {goals.map((goal, index) => (
            <div key={index} className="relative h-full">
              <div className="bg-card rounded-2xl p-8 shadow-sm border h-full">
                <div className="text-primary mb-4">
                  {goal.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground">
                  {goal.description}
                </p>
              </div>

              {/* Show arrow for all except last */}
              {index < goals.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-coral" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Success metrics */}
        {/* <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Success Metrics</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">↑ 40%</div>
              <p className="text-muted-foreground">Task Completion</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-coral mb-2">↓ 50%</div>
              <p className="text-muted-foreground">Checkout Time</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint mb-2">4.5⭐</div>
              <p className="text-muted-foreground">User Satisfaction</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CupcakeGoals;