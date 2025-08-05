import { TrendingUp, Clock, Heart, ShoppingCart } from "lucide-react";

const CupcakeResults = () => {
  // const results = [
  //   {
  //     icon: <TrendingUp className="w-8 h-8" />,
  //     metric: "+40%",
  //     title: "Task Completion",
  //     description: "Users successfully completed core tasks",
  //     color: "text-primary"
  //   },
  //   {
  //     icon: <Clock className="w-8 h-8" />,
  //     metric: "-50%",
  //     title: "Checkout Time", 
  //     description: "Reduced time to complete purchase",
  //     color: "text-coral"
  //   },
  //   {
  //     icon: <Heart className="w-8 h-8" />,
  //     metric: "+80%",
  //     title: "Customer Trust",
  //     description: "Improved confidence with ingredient visibility",
  //     color: "text-mint"
  //   },
  //   {
  //     icon: <ShoppingCart className="w-8 h-8" />,
  //     metric: "+65%",
  //     title: "Mobile Usability",
  //     description: "Enhanced mobile shopping experience",
  //     color: "text-peach"
  //   }
  // ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            📈 Results & Impact
          </h2>
          <p className="text-xl text-muted-foreground">Measurable improvements in user experience</p>
        </div>
        
        {/* Key Metrics */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {results.map((result, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border text-center hover:shadow-lg transition-shadow">
              <div className={`mx-auto mb-4 ${result.color}`}>
                {result.icon}
              </div>
              <div className={`text-4xl font-bold mb-2 ${result.color}`}>
                {result.metric}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {result.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {result.description}
              </p>
            </div>
          ))}
        </div>
         */}
        {/* Business Impact */}
        {/* <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 shadow-lg border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Business Impact</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Conversion Improvements
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Reduced cart abandonment by 45%</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Increased mobile conversions by 65%</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Higher customer satisfaction scores</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-coral" />
                User Experience Gains
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                  <span>Clearer product information access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                  <span>Streamlined checkout process</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                  <span>Better mobile navigation experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
         */}
        {/* Before vs After Summary */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-coral-light rounded-2xl p-8 shadow-sm border">
            <h3 className="text-xl font-bold text-coral mb-6 text-center">Before Redesign</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Confusing navigation structure</li>
              <li>• Hidden ingredient information</li>
              <li>• Complex checkout process</li>
              <li>• High cart abandonment</li>
            </ul>
          </div>
          
          <div className="bg-mint-light rounded-2xl p-8 shadow-sm border">
            <h3 className="text-xl font-bold text-mint mb-6 text-center">After Redesign</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Intuitive, clear navigation</li>
              <li>• Prominent ingredient & allergy info</li>
              <li>• Streamlined checkout</li>
              <li>• Increased customer trust & sales</li>
            </ul>
          </div>
        </div>
        
        {/* Success Quote */}
        {/* <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Project Success</h3>
          <p className="text-lg italic text-muted-foreground mb-4">
            "The new design has completely transformed our online sales. Customers can actually find what they're looking for now!"
          </p>
          <p className="text-sm text-muted-foreground">- Toronto Cupcake Store Owner</p>
        </div> */}
      </div>
    </section>
  );
};

export default CupcakeResults;