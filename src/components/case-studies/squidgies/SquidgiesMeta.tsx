import { Clock, User, Users, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SquidgiesMeta = () => {
  const { t } = useLanguage();
  const metaData = [
    { icon: Clock, label: "Timeline", value: t('squidgies.meta.timeline') },
    { icon: User, label: "Role", value: t('squidgies.meta.role') },
    { icon: Users, label: "Team", value: t('squidgies.meta.team') },
    { icon: Wrench, label: "Tools", value: t('squidgies.meta.tools') }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🧠 Project Overview
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('squidgies.meta.project')}
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