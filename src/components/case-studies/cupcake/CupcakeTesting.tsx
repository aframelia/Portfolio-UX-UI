import { TestTube, Users, CheckCircle, TrendingUp } from "lucide-react";

const CupcakeTesting = () => {
  const testingTasks = [
    {
      task: "Find a cupcake & add to cart",
      beforeSuccess: "45%",
      afterSuccess: "90%",
      improvement: "+45%"
    },
    {
      task: "Find ingredient information",
      beforeSuccess: "20%",
      afterSuccess: "80%", 
      improvement: "+60%"
    },
    {
      task: "Complete checkout flow",
      beforeSuccess: "30%",
      afterSuccess: "85%",
      improvement: "+55%"
    },
    {
      task: "Navigate on mobile",
      beforeSuccess: "25%",
      afterSuccess: "88%",
      improvement: "+63%"
    }
  ];

  return (
    <section className="py-16 px-6 bg-peach-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🔬 Usability Testing & Iteration
          </h2>
          <p className="text-xl text-muted-foreground">Validating design decisions with real users</p>
        </div>
        
        {/* Testing Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-sm border text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">8 Users</h3>
            <p className="text-muted-foreground">Tested both versions</p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-sm border text-center">
            <TestTube className="w-12 h-12 text-coral mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">4 Tasks</h3>
            <p className="text-muted-foreground">Core user flows</p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-sm border text-center">
            <TrendingUp className="w-12 h-12 text-mint mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">+55%</h3>
            <p className="text-muted-foreground">Average improvement</p>
          </div>
        </div>
        
        {/* Testing Results */}
        <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 shadow-lg border mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Task Success Rates</h3>
          
          <div className="space-y-6">
            {testingTasks.map((test, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm border">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">{test.task}</h4>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Before</div>
                      <div className="text-xl font-bold text-coral">{test.beforeSuccess}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">After</div>
                      <div className="text-xl font-bold text-mint">{test.afterSuccess}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Improvement</div>
                      <div className="text-xl font-bold text-primary">{test.improvement}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* User Feedback */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-sm border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-mint" />
              What Users Loved
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-mint rounded-full mt-2"></div>
                <span>"Much easier to find ingredient information now"</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-mint rounded-full mt-2"></div>
                <span>"The checkout process is so much smoother"</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-mint rounded-full mt-2"></div>
                <span>"I love seeing reviews and ratings"</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-mint rounded-full mt-2"></div>
                <span>"Mobile experience is fantastic now"</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-sm border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <TestTube className="w-6 h-6 text-coral" />
              Iterations Made
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-coral rounded-full mt-2"></div>
                <span>Moved ingredient info higher on product pages</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-coral rounded-full mt-2"></div>
                <span>Added progress indicator to checkout</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-coral rounded-full mt-2"></div>
                <span>Increased CTA button size on mobile</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-coral rounded-full mt-2"></div>
                <span>Simplified navigation menu structure</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Overall Satisfaction */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Overall User Satisfaction</h3>
          <div className="flex items-center justify-center gap-8">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Before</div>
              <div className="text-4xl font-bold text-coral">2.5⭐</div>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">After</div>
              <div className="text-4xl font-bold text-mint">4.5⭐</div>
            </div>
          </div>
          <p className="text-muted-foreground mt-4">80% improvement in user satisfaction scores</p>
        </div>
      </div>
    </section>
  );
};

export default CupcakeTesting;