import { Sparkles, Send } from "lucide-react";

const CaseHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-lavender-light via-sky-light to-mint-light flex items-center justify-center overflow-hidden">
        <img 
        src="/flightHero1.png" 
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      />
      {/* Sparkle doodle */}
      <div className="absolute top-8 left-8">
        <Sparkles className="text-primary w-8 h-8 animate-pulse" />
      </div>
      
      {/* Paper plane doodle */}
      <div className="absolute top-12 right-16 animate-bounce">
        <Send className="text-coral w-6 h-6 transform rotate-45" />
      </div>
      
      <div className="text-center px-6 max-w-4xl">
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-md">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Fixing Flight Confusion ✈️
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            How I redesigned the UX for a travel app with real users in mind
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseHero;