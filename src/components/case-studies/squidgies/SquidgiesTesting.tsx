import { Users, Target, CheckCircle, Star } from "lucide-react";

const SquidgiesTesting = () => {
  const testingResults = [
    {
      task: "Register a child and find available clothes",
      result: "95% completion rate",
      status: "success"
    },
    {
      task: "Add to cart and complete checkout", 
      result: "90% completion",
      status: "success"
    },
    {
      task: "Identify size mismatch",
      result: "0 cases (all products shown matched registered size)",
      status: "success"
    },
    {
      task: "Overall feedback",
      result: '"It saved me a lot of time" – 4.7⭐️ average rating',
      status: "success"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            🧪 Usability Testing
          </h2>
          <p className="text-lg text-muted-foreground">
            Testing with real parents to validate our design decisions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Test Participants</h3>
            </div>
            <p className="text-muted-foreground">
              8 parents with children aged 2-12, all regular online shoppers for kids' clothes
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Testing Method</h3>
            </div>
            <p className="text-muted-foreground">
              Remote moderated sessions using Maze for task completion tracking
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Testing Results</h3>
          
          {testingResults.map((test, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">{test.task}</h4>
                <p className="text-primary font-medium">{test.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
          <div className="text-center">
            <Star className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">Key Success Metric</h3>
            <p className="text-lg text-foreground mb-2">
              "This app actually understands what I need as a parent"
            </p>
            <p className="text-muted-foreground">
              100% of participants said they would use this app over traditional e-commerce apps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquidgiesTesting;