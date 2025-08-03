import { useState } from "react";
import { Palette, Eye, EyeOff, Star, ShoppingBag } from "lucide-react";

const CupcakeDesigns = () => {
  const [showBefore, setShowBefore] = useState(false);
  
  const designDecisions = [
    {
      title: "Color Palette",
      description: "Pastel colors for a fun, playful feel",
      category: "Visual Design",
      detail: "Soft pinks and mint greens to evoke sweetness"
    },
    {
      title: "Product Cards", 
      description: "Clear layout with trust signals",
      category: "UI Components",
      detail: "Reviews, ratings, and clear pricing"
    },
    {
      title: "CTAs",
      description: "Larger, more prominent buttons",
      category: "Interaction",
      detail: "Coral accent color for 'Add to Cart'"
    }
  ];

  return (
    <section className="py-16 px-6 bg-sky-light relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🎨 UI Design Decisions
          </h2>
          <p className="text-xl text-muted-foreground">Creating a delightful shopping experience</p>
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
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {designDecisions.map((decision, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-shadow">
                <div className="text-sm text-coral font-medium mb-2">{decision.category}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{decision.title}</h3>
                <p className="text-muted-foreground mb-4">{decision.description}</p>
                <p className="text-sm text-muted-foreground">{decision.detail}</p>
                
                {/* Design mockup */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-lavender to-coral-light mt-6">
                  {showBefore ? (
                    // Before state
                    <div className="p-4 min-h-[160px] flex flex-col gap-3">
                      <div className="text-xs text-muted-foreground">Before</div>
                      <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-8 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs text-gray-600">Unclear</span>
                      </div>
                    </div>
                  ) : (
                    // After state
                    <div className="p-4 min-h-[160px] flex flex-col gap-3">
                      <div className="text-xs text-muted-foreground">After</div>
                      <div className="h-3 bg-coral/30 rounded w-3/4"></div>
                      <div className="h-3 bg-peach/30 rounded w-1/2"></div>
                      <div className="h-8 bg-coral/40 rounded flex items-center justify-center">
                        <span className="text-xs text-coral font-medium">Clear & Inviting</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Design System */}
        <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 shadow-lg border">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Palette className="w-8 h-8 text-primary" />
            Design System Elements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-coral rounded-full"></div>
                Visual Elements
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Rounded corners for friendly feel</li>
                <li>• Card-based layout for products</li>
                <li>• Clear typography hierarchy</li>
                <li>• Consistent icon style</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-peach" />
                Trust Signals
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Customer reviews and ratings</li>
                <li>• Ingredient and allergen badges</li>
                <li>• Clear pricing and availability</li>
                <li>• Security badges at checkout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Design doodles */}
      <div className="absolute top-8 right-8">
        <ShoppingBag className="w-6 h-6 text-coral animate-pulse" />
      </div>
      <div className="absolute top-12 right-16 animate-bounce delay-150">
        <div className="w-2 h-2 bg-peach rounded-full"></div>
      </div>
      <div className="absolute top-16 right-12 animate-bounce delay-300">
        <div className="w-2 h-2 bg-mint rounded-full"></div>
      </div>
    </section>
  );
};

export default CupcakeDesigns;