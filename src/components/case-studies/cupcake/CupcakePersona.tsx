import { User, Cake, Heart, Target } from "lucide-react";

const CupcakePersona = () => {
  const personas = [
    {
      name: "Kristin Watson",
      age: "37, Mom of 2",
      description: "Frequently orders cupcakes for birthdays",
      goals: ["Quick, easy ordering", "Find allergy information", "Reliable delivery"],
      frustrations: ["Confusing checkout", "No clear product info", "Can't filter by dietary needs"],
      gradient: "from-coral to-peach"
    },
    {
      name: "Michael Rodriguez", 
      age: "28, Marketing Professional",
      description: "Discovers new flavors and compares options",
      goals: ["Compare reviews", "Explore new flavors", "Quick online ordering"],
      frustrations: ["Can't find ingredient info", "No filter options", "Poor mobile experience"],
      gradient: "from-mint to-sky"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            👤 User Personas
          </h2>
          <p className="text-xl text-muted-foreground">Understanding our customers' needs</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-10 shadow-lg border">
              <div className="text-center mb-8">
                {/* Persona Avatar */}
                <div className={`w-24 h-24 bg-gradient-to-br ${persona.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{persona.name}</h3>
                <p className="text-lg text-muted-foreground mb-2">{persona.age}</p>
                <p className="text-foreground">{persona.description}</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Goals
                  </h4>
                  <ul className="text-muted-foreground space-y-1">
                    {persona.goals.map((goal, goalIndex) => (
                      <li key={goalIndex}>• {goal}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-coral" />
                    Frustrations
                  </h4>
                  <ul className="text-muted-foreground space-y-1">
                    {persona.frustrations.map((frustration, frustIndex) => (
                      <li key={frustIndex}>• {frustration}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pain Points Summary */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-3">
            <Cake className="w-8 h-8 text-coral" />
            Common Pain Points
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="bg-coral-light rounded-lg p-4">
                <p className="text-coral font-medium">💔 No product filtering</p>
              </div>
              <div className="bg-coral-light rounded-lg p-4">
                <p className="text-coral font-medium">💔 Missing ingredient info</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-coral-light rounded-lg p-4">
                <p className="text-coral font-medium">💔 Confusing checkout</p>
              </div>
              <div className="bg-coral-light rounded-lg p-4">
                <p className="text-coral font-medium">💔 Poor mobile experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CupcakePersona;