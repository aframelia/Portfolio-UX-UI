import { Heart } from "lucide-react";

const BhiveHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-100 via-mint-100 to-indigo-50 flex items-center justify-center overflow-hidden">
      <img 
        src="/dektoppage.png" 
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />
      {/* Cupcake doodle */}
      {/* <div className="absolute top-8 left-8">
        <Girl className="text-primary w-8 h-8 animate-pulse" />
      </div>
       */}
      {/* Heart doodle */}
      <div className="absolute top-12 right-16 animate-bounce">
        <Heart className="text-coral w-6 h-6 transform rotate-12" />
      </div>
      
      <div className="text-center px-6 max-w-4xl">
        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-md">
        <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6">
          HeairCare Company Webpage Redesign
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        This redesign is a conceptual adaptation of a project completed under NDA. Visuals have been recreated for portfolio purposes.
        </p>
        </div>
      </div>
    </section>
  );
};

export default BhiveHero;