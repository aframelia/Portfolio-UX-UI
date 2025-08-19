import { HeartPulse, ShieldAlert, Clock, Users } from "lucide-react";

const AIHealthProblem = () => {
  const problems = [
    {
      icon: ShieldAlert,
      text: "Unclear or overly technical AI explanations confuse users and reduce confidence."
    },
    {
      icon: Clock,
      text: "Lengthy symptom entry and rigid input limit quick, natural user interaction."
    },
    {
      icon: HeartPulse,
      text: "Lack of personalized guidance leaves users feeling anxious and uncertain about their health."
    },
    {
      icon: Users,
      text: "Limited access to real human support increases frustration and mistrust in AI alone."
    }
  ];

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            🚨 Key User Challenges in AI Health Apps
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Despite AI’s promise, many users experience barriers that impact trust, clarity, and care quality:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground">{problem.text}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
          <p className="text-center text-lg font-medium text-foreground">
            These challenges contribute to decreased user confidence, delayed care, and diminished health outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIHealthProblem;
