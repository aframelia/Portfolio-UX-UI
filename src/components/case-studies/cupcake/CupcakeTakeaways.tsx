import { Lightbulb, Users, IterationCw, TrendingUp } from "lucide-react";

const CupcakeTakeaways = () => {
  const lessons = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Research is Critical",
      description: "Direct feedback revealed pain points I hadn't considered",
      insight: "Assumptions about user behavior were often wrong"
    },
    {
      icon: <IterationCw className="w-8 h-8" />,
      title: "Test Early, Test Often", 
      description: "Multiple rounds of testing led to better outcomes",
      insight: "Each iteration brought significant improvements"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Mobile-First Matters",
      description: "Starting with mobile constraints improved overall design",
      insight: "Most users were shopping on mobile devices"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Information Architecture First",
      description: "Solving navigation problems improved everything else",
      insight: "Good structure makes good design possible"
    }
  ];

  return (
    <section className="py-16 px-6 bg-lavender-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🌱 Lessons Learned
          </h2>
          <p className="text-xl text-muted-foreground">Key insights from the design process</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {lessons.map((lesson, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">
                {lesson.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {lesson.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {lesson.description}
              </p>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm text-primary font-medium">
                  💡 {lesson.insight}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Design Process Reflections */}
        <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 shadow-lg border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Process Reflections</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-mint rounded-full"></div>
                What Worked Well
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Starting with user interviews</li>
                <li>• Mobile-first design approach</li>
                <li>• Iterative testing and refinement</li>
                <li>• Focus on core user tasks</li>
                <li>• Clear information hierarchy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-coral rounded-full"></div>
                What I'd Do Differently
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Test more diverse user groups earlier</li>
                <li>• Include accessibility testing from start</li>
                <li>• More stakeholder alignment sessions</li>
                <li>• Document design decisions better</li>
                <li>• Plan for post-launch metrics</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Key Methodologies */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-6 shadow-sm border text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-semibold text-foreground mb-2">User-Centered Design</h4>
            <p className="text-sm text-muted-foreground">Every decision was validated with real users</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-sm border text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h4 className="font-semibold text-foreground mb-2">Iterative Process</h4>
            <p className="text-sm text-muted-foreground">Continuous testing and refinement</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-sm border text-center">
            <div className="text-3xl mb-3">📊</div>
            <h4 className="font-semibold text-foreground mb-2">Data-Driven Decisions</h4>
            <p className="text-sm text-muted-foreground">Metrics guided design choices</p>
          </div>
        </div>
        
        {/* Personal Growth */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-3">
            <Lightbulb className="w-8 h-8 text-primary" />
            Personal Growth
          </h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            This project reinforced the importance of putting users first and testing assumptions early. 
            The biggest insight was realizing how much users valued transparency—especially around ingredients 
            and allergens. It taught me that sometimes the most impactful design solutions are the simplest ones 
            that address real user needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CupcakeTakeaways;