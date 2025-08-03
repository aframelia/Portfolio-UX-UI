import { Users, TestTube, TrendingUp, RotateCcw } from "lucide-react";

const CaseTesting = () => {
  const testingStats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "8",
      label: "Users Tested",
      description: "Mix of frequent and casual travelers"
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      number: "3",
      label: "Key Tasks",
      description: "Check status, find gate, share flight"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "2",
      label: "Iterations",
      description: "Based on user feedback"
    }
  ];

  const feedback = [
    {
      quote: "I love how everything is right there on the main screen now!",
      issue: "Users wanted key info visible immediately",
      solution: "Moved flight status to hero section"
    },
    {
      quote: "The share button was hard to find before...",
      issue: "Share functionality was buried in menu",
      solution: "Added prominent share button with icon"
    },
    {
      quote: "The colors help me understand delays better",
      issue: "Status changes weren't clear enough",
      solution: "Implemented color-coded status system"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🧪 Usability Testing & Iteration
          </h2>
          <p className="text-xl text-muted-foreground">Learning from real users and improving the design</p>
        </div>
        
        {/* Testing Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testingStats.map((stat, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border text-center">
              <div className="text-primary mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Feedback & Changes */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Key Feedback & Changes Made</h3>
          
          {feedback.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-mint-light to-sky-light rounded-2xl p-8 border">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* User Quote */}
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="text-foreground italic">"{item.quote}"</p>
                </div>
                
                {/* Issue Identified */}
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <TestTube className="w-5 h-5 text-coral" />
                    <span className="font-semibold text-foreground">Issue</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.issue}</p>
                </div>
                
                {/* Solution */}
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <RotateCcw className="w-5 h-5 text-mint" />
                    <span className="font-semibold text-foreground">Solution</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testing Method */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-sm border max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">Testing Method</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Remote Testing</h4>
              <p className="text-sm text-muted-foreground">Conducted via Maze for unmoderated insights</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Task Scenarios</h4>
              <p className="text-sm text-muted-foreground">Real-world situations with time pressure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseTesting;