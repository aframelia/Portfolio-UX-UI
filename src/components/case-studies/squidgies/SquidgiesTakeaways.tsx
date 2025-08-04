import { Lightbulb, Users, RefreshCw, Target } from "lucide-react";

const SquidgiesTakeaways = () => {
  const learnings = [
    {
      icon: Target,
      title: "The power of personalization in UX",
      description: "Creating child profiles transformed the entire shopping experience from generic browsing to targeted discovery"
    },
    {
      icon: Users,
      title: "Importance of building logic around real user needs", 
      description: "Child profiles and inventory filtering addressed the core frustration parents face when shopping online"
    },
    {
      icon: RefreshCw,
      title: "How to simplify complex flows",
      description: "Multi-child registration and inventory filtering seemed complex but became intuitive through careful UX design"
    },
    {
      icon: Lightbulb,
      title: "Prioritizing user context",
      description: "Parents often multitask while shopping - the design needed to accommodate their busy, distracted state"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            🧠 What I Learned
          </h2>
          <p className="text-lg text-muted-foreground">
            Key insights from designing for busy parents and children's e-commerce
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learnings.map((learning, index) => {
            const Icon = learning.icon;
            return (
              <div key={index} className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">{learning.title}</h3>
                    <p className="text-muted-foreground text-sm">{learning.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Core Learning
            </h3>
            <p className="text-lg text-foreground mb-4">
              "Understanding the parent's mental model was crucial"
            </p>
            <p className="text-muted-foreground">
              Parents don't just shop for clothes - they're managing time, avoiding mistakes, and 
              ensuring their children are happy. The UX needed to support this entire context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquidgiesTakeaways;