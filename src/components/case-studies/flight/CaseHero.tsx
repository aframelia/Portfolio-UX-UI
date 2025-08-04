import { Sparkles, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseHero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-lavender-light via-sky-light to-mint-light flex items-center justify-center overflow-hidden">
      {/* Sparkle doodle */}
      <div className="absolute top-8 left-8">
        <Sparkles className="text-primary w-8 h-8 animate-pulse" />
      </div>
      
      {/* Paper plane doodle */}
      <div className="absolute top-12 right-16 animate-bounce">
        <Send className="text-coral w-6 h-6 transform rotate-45" />
      </div>
      
      <div className="text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          {t('flight.hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t('flight.hero.subtitle')}
        </p>
      </div>
    </section>
  );
};

export default CaseHero;