import { Heart, Cake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CupcakeHero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-coral-light via-peach-light to-lavender-light flex items-center justify-center overflow-hidden">
      {/* Cupcake doodle */}
      <div className="absolute top-8 left-8">
        <Cake className="text-primary w-8 h-8 animate-pulse" />
      </div>
      
      {/* Heart doodle */}
      <div className="absolute top-12 right-16 animate-bounce">
        <Heart className="text-coral w-6 h-6 transform rotate-12" />
      </div>
      
      <div className="text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6">
          {t('cupcake.hero.title')}
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t('cupcake.hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default CupcakeHero;