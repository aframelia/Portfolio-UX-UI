import { User, Target, Frown } from "lucide-react";

const SquidgiesPersona = () => {
  const personas = [
    {
      name: "Laura Bennett",
      age: "32",
      role: "Full-time mom of 3",
      goals: "Save time, order right size the first time",
      frustrations: "Filtering doesn't work, items out of stock, sizing confusion",
      avatar: "👩‍👧‍👦"
    },
    {
      name: "Mary Wilton", 
      age: "29",
      role: "Primary School Teacher",
      goals: "Shop quickly during breaks, avoid returns",
      frustrations: "No alerts for restocked items, too many irrelevant choices",
      avatar: "👩‍🏫"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            👤 User Personas
          </h2>
          <p className="text-lg text-muted-foreground">
            Understanding our target users and their needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{persona.avatar}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{persona.name}</h3>
                <p className="text-primary font-medium">Age: {persona.age}</p>
                <p className="text-muted-foreground">{persona.role}</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Goals</h4>
                    <p className="text-muted-foreground text-sm">{persona.goals}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Frown className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Frustrations</h4>
                    <p className="text-muted-foreground text-sm">{persona.frustrations}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SquidgiesPersona;