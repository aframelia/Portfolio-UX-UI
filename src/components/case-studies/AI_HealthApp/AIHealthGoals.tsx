import { CheckCircle, Smile, MessageCircle, UserCheck } from "lucide-react";

const AIHealthGoals = () => {
  const solutions = [
    {
      icon: MessageCircle,
      text: "Conversational AI that guides users with clear, jargon-free language."
    },
    {
      icon: CheckCircle,
      text: "Quick symptom entry with predictive suggestions and flexible input methods."
    },
    {
      icon: UserCheck,
      text: "Easy access to real healthcare professionals for personalized support."
    },
    {
      icon: Smile,
      text: "Empathetic UI design that reduces anxiety and builds user trust."
    }
  ];

  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ✅ Proposed Solutions
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Designing AI health experiences that empower users through clarity, speed, trust, and empathy:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground">{solution.text}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
          <p className="text-center text-lg font-medium text-foreground">
            Implementing these solutions can increase user satisfaction, improve health outcomes, and foster long-term trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIHealthGoals;
