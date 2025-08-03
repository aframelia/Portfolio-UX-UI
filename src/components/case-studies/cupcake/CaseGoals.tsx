import { Sparkles, MousePointer, Smartphone, ArrowRight } from "lucide-react";

const CaseGoals = () => {
  const goals = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Clear Flows",
      description: "Streamlined booking process"
    },
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: "Simple Bookings",
      description: "Fewer steps, better guidance"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Live flight status & notifications"
    }
  ];

  return (
    <section className="py-16 px-6 bg-mint-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            UX Goals
          </h2>
          <p className="text-xl text-muted-foreground">What we set out to achieve</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {goals.map((goal, index) => (
            <div key={index} className="relative">
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
              
              {/* Arrow between goals on desktop */}
              {index < goals.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-coral" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Map path doodle */}
        <div className="mt-8 flex justify-center">
          <svg className="w-32 h-8" viewBox="0 0 128 32" fill="none">
            <path d="M4 16C20 8 36 24 52 16C68 8 84 24 100 16C108 12 116 20 124 16" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  className="text-coral" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CaseGoals;