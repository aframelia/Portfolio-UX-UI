import { Clock, User, Users, Wrench } from "lucide-react";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metaData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SquidgiesMeta;