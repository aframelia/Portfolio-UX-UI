import { Calendar, Search, Bell, Accessibility, ArrowRight } from "lucide-react";

const CupcakeNextSteps = () => {
  const nextSteps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced Filtering & Search",
      description: "Add dietary filters, flavor search, and seasonal collections",
      priority: "High",
      timeline: "Next Sprint"
    },
    {
      icon: <Accessibility className="w-6 h-6" />,
      title: "Accessibility Improvements",
      description: "Ensure WCAG compliance and test with assistive technologies",
      priority: "High", 
      timeline: "Month 2"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Order Notifications",
      description: "SMS/email updates for order status and pickup reminders",
      priority: "Medium",
      timeline: "Month 3"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Loyalty Program",
      description: "Reward frequent customers with points and special offers",
      priority: "Low",
      timeline: "Future Release"
    }
  ];

  const priorityColors = {
    "High": "bg-coral-light text-coral",
    "Medium": "bg-sky-light text-sky",
    "Low": "bg-mint-light text-mint"
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-coral-light via-peach-light to-lavender-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🚀 Next Steps
          </h2>
          <p className="text-xl text-muted-foreground">Future enhancements to improve the experience</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {nextSteps.map((step, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border hover:shadow-md transition-all group">
              <div className="flex items-start gap-4">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[step.priority as keyof typeof priorityColors]}`}>
                      {step.priority}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Calendar className="w-4 h-4" />
                    {step.timeline}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Research */}
        <div className="mt-12 bg-card rounded-3xl p-8 md:p-12 shadow-lg border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Additional Research Opportunities
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Search className="w-5 h-5 text-coral" />
                User Behavior Studies
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Test with larger customer base</li>
                <li>• Analyze post-launch user patterns</li>
                <li>• Study seasonal ordering behaviors</li>
                <li>• Research corporate ordering needs</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Bell className="w-5 h-5 text-mint" />
                Technical Enhancements
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Integration with POS systems</li>
                <li>• Real-time inventory tracking</li>
                <li>• Advanced recommendation engine</li>
                <li>• Multi-location support</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <span>Ready to implement these improvements</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
        
        {/* Success Metrics to Track */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Success Metrics to Track</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-coral mb-2">📈</div>
              <h4 className="font-semibold text-foreground mb-2">Conversion Rate</h4>
              <p className="text-sm text-muted-foreground">Track purchase completions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-mint mb-2">⭐</div>
              <h4 className="font-semibold text-foreground mb-2">User Satisfaction</h4>
              <p className="text-sm text-muted-foreground">Monitor customer feedback</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">📱</div>
              <h4 className="font-semibold text-foreground mb-2">Mobile Usage</h4>
              <p className="text-sm text-muted-foreground">Analyze mobile behavior</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CupcakeNextSteps;