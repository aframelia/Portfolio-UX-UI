import { Clock, User, Users, Wrench, Baby, Target } from "lucide-react";

const SquidgiesMeta = () => {
  const metaData = [
    { icon: Clock, label: "Timeline", value: "6 weeks" },
    { icon: User, label: "Role", value: "UX/UI Designer, Front-End Developer" },
    { icon: Users, label: "Team", value: "Solo Project" },
    { icon: Wrench, label: "Tools", value: "Figma, React Native, Notion" }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🧠 Project Overview
          </h2>
          <p className="text-lg text-muted-foreground">
            E-commerce mobile app for children's clothes
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
        <div className="bg-card rounded-2xl p-8 shadow-sm border">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Role</h3>
          </div>
          <p className="text-muted-foreground">UX/UI Designer (Solo), Front-End Developer</p>
        </div>
        
        <div className="bg-card rounded-2xl p-8 shadow-sm border">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-6 h-6 text-coral" />
            <h3 className="text-xl font-semibold text-foreground">Tools</h3>
          </div>
          <p className="text-muted-foreground">Figma, Notion, FigJam</p>
        </div>
        
        <div className="bg-card rounded-2xl p-8 shadow-sm border">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-mint" />
            <h3 className="text-xl font-semibold text-foreground">Timeline</h3>
          </div>
          <p className="text-muted-foreground">6 weeks</p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-sm border">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-peach" />
            <h3 className="text-xl font-semibold text-foreground">Goal</h3>
          </div>
          <p className="text-muted-foreground">Improve online shopping for parents</p>
        </div>
      </div>
      </div>
       {/* Cupcake doodle */}
    <div className="absolute bottom-8 right-8 transform rotate-12">
      <Baby className="w-8 h-8 text-peach" />
    </div>
  </section>
  );
};

export default SquidgiesMeta;