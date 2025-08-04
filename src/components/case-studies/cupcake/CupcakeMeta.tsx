import { User, Wrench, Clock, Target, Cake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CupcakeMeta = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Role</h3>
            </div>
            <p className="text-muted-foreground">{t('cupcake.meta.role')}</p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-coral" />
              <h3 className="text-xl font-semibold text-foreground">Tools</h3>
            </div>
            <p className="text-muted-foreground">{t('cupcake.meta.tools')}</p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-mint" />
              <h3 className="text-xl font-semibold text-foreground">Timeline</h3>
            </div>
            <p className="text-muted-foreground">{t('cupcake.meta.timeline')}</p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-peach" />
              <h3 className="text-xl font-semibold text-foreground">Goal</h3>
            </div>
            <p className="text-muted-foreground">Improve online shopping UX</p>
          </div>
        </div>
      </div>
      
      {/* Cupcake doodle */}
      <div className="absolute bottom-8 right-8 transform rotate-12">
        <Cake className="w-8 h-8 text-peach" />
      </div>
    </section>
  );
};

export default CupcakeMeta;