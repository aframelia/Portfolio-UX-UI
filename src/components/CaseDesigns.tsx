import { useState } from "react";
import { Heart, Eye, EyeOff } from "lucide-react";

const CaseDesigns = () => {
  const [showBefore, setShowBefore] = useState(false);
  
  const designs = [
    {
      title: "Flight Booking",
      description: "Streamlined search and selection",
      category: "Core Flow"
    },
    {
      title: "Confirmation Screen",
      description: "Clear booking details",
      category: "Success State"
    },
    {
      title: "Flight Status",
      description: "Real-time updates",
      category: "Live Data"
    }
  ];

  return (
    <section className="py-16 px-6 bg-sky-light relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Final UI
          </h2>
          <p className="text-xl text-muted-foreground">The polished designs</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => setShowBefore(!showBefore)}
            className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border hover:shadow-md transition-shadow"
          >
            {showBefore ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span className="text-sm font-medium">
              {showBefore ? 'Hide Before' : 'Show Before/After'}
            </span>
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-shadow">
                <div className="text-sm text-coral font-medium mb-2">{design.category}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{design.title}</h3>
                <p className="text-muted-foreground mb-6">{design.description}</p>
                
                {/* Design mockup */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-lavender to-sky-light">
                  {showBefore ? (
                    // Before state
                    <div className="p-4 min-h-[200px] flex flex-col gap-3">
                      <div className="text-xs text-muted-foreground">Before</div>
                      <div className="h-4 bg-red-200 rounded w-2/3"></div>
                      <div className="h-4 bg-red-200 rounded w-1/2"></div>
                      <div className="h-12 bg-red-100 rounded flex items-center justify-center">
                        <span className="text-xs text-red-600">Confusing</span>
                      </div>
                    </div>
                  ) : (
                    // After state
                    <div className="p-4 min-h-[200px] flex flex-col gap-3">
                      <div className="text-xs text-muted-foreground">After</div>
                      <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                      <div className="h-4 bg-primary/20 rounded w-1/2"></div>
                      <div className="h-12 bg-primary/30 rounded flex items-center justify-center">
                        <span className="text-xs text-primary font-medium">Clear & Intuitive</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Heart confetti doodle */}
      <div className="absolute top-8 right-8">
        <Heart className="w-6 h-6 text-coral animate-pulse" />
      </div>
      <div className="absolute top-12 right-16 animate-bounce delay-150">
        <div className="w-2 h-2 bg-coral rounded-full"></div>
      </div>
      <div className="absolute top-16 right-12 animate-bounce delay-300">
        <div className="w-2 h-2 bg-peach rounded-full"></div>
      </div>
    </section>
  );
};

export default CaseDesigns;