import { Palette, Smartphone, Monitor } from "lucide-react";

const SquidgiesWireframes = () => {
  const designElements = [
    "Blue and soft pastel tones (child-friendly and gender-neutral)",
    "Large CTA buttons for thumb use", 
    "Progress indicator in checkout",
    "Smart filter (size/stock match)",
    "Parent dashboard for managing kids' profiles"
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ✏️ Design Decision
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Design System */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Design System</h3>
            </div>
            
            <div className="space-y-4">
              {designElements.map((element, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{element}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Design Process</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <Smartphone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Mobile-First Approach</h4>
                  <p className="text-muted-foreground text-sm">Built mobile-first and desktop layouts in Figma</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <Monitor className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Iterative Design</h4>
                  <p className="text-muted-foreground text-sm">Iterated based on pain points (navigation, checkout)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wireframe Images */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-xl border border-border">
            <img 
              src="/sketches.png" 
              alt="Squidgies wireframes and sketches"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-center text-muted-foreground text-sm">Early wireframe sketches</p>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-border">
            <img 
              src="/squidgiesUI.png" 
              alt="Squidgies user interface design"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-center text-muted-foreground text-sm">Final UI design</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SquidgiesWireframes;