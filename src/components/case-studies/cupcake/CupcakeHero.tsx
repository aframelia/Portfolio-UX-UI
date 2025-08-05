import { Heart, Cake } from "lucide-react";

const CupcakeHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-coral-light via-peach-light to-lavender-light flex items-center justify-center overflow-hidden">
      {/* <img 
        src="/toronto.png" 
        alt="Decorative background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      /> */}
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
          Toronto Cupcake Redesign 🧁
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Redesigning a cupcake store website to improve navigation, clarity, and conversion
        </p>
      </div>
    </section>
  );
};

export default CupcakeHero;