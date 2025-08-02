import { Calendar, Users, Bell, Zap, ArrowRight } from "lucide-react";

const CaseNextSteps = () => {
  const nextSteps = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "User Profiles & Saved Flights",
      description: "Allow users to save frequently traveled routes and personalize their experience",
      priority: "High",
      timeline: "Next Sprint"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Push Notifications",
      description: "Proactive alerts for gate changes, delays, and boarding reminders",
      priority: "High", 
      timeline: "Month 2"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expanded User Testing",
      description: "Test with business travelers, families, and accessibility users",
      priority: "Medium",
      timeline: "Month 3"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Smart suggestions for alternate flights and travel tips",
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
    <section className="py-16 px-6 bg-gradient-to-br from-lavender-light via-sky-light to-mint-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🔮 What's Next?
          </h2>
          <p className="text-xl text-muted-foreground">Future enhancements and research opportunities</p>
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
        
        {/* Research Insights */}
        <div className="mt-12 bg-card rounded-3xl p-8 md:p-12 shadow-lg border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Additional Research Opportunities
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-coral" />
                User Segments to Explore
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Business travelers with different needs</li>
                <li>• International travelers</li>
                <li>• Users with accessibility requirements</li>
                <li>• Family travelers with children</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-mint" />
                Technical Enhancements
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Offline functionality for poor connectivity</li>
                <li>• Integration with calendar apps</li>
                <li>• Voice commands for hands-free use</li>
                <li>• Predictive delay algorithms</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <span>Ready for the next iteration</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseNextSteps;