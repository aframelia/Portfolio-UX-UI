import { TrendingUp, Clock, Star } from "lucide-react";

const CaseResults = () => {
  const results = [
    {
      icon: <Star className="w-8 h-8" />,
      metric: "+30%",
      label: "Usability Score",
      description: "User satisfaction improved"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      metric: "-45%",
      label: "Booking Time",
      description: "Faster completion rate"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: "+60%",
      label: "Task Success",
      description: "Users completing bookings"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Improved?
          </h2>
          <p className="text-xl text-muted-foreground">Measuring the impact</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="bg-card rounded-2xl p-8 shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-primary mb-4 flex justify-center">
                  {result.icon}
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {result.metric}
                </div>
                <div className="text-xl font-semibold text-foreground mb-2">
                  {result.label}
                </div>
                <p className="text-muted-foreground">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Squiggle chart doodle */}
        <div className="mt-12 flex justify-center">
          <svg className="w-48 h-16" viewBox="0 0 192 64" fill="none">
            <path d="M8 48C24 32 40 16 56 24C72 32 88 16 104 24C120 32 136 16 152 24C168 32 176 24 184 16" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="text-primary" />
            <circle cx="184" cy="16" r="4" fill="currentColor" className="text-primary" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CaseResults;