import { Smartphone, Monitor, Lightbulb, Layers } from "lucide-react";

const CupcakeWireframes = () => {
    const wireframes = [
      {
        title: "Mobile-First Homepage",
        description: "Clear navigation and prominent CTA",
        category: "Mobile",
        image: "/W.landing.png"
      },
      {
        title: "Product Grid",
        description: "Card layout with filtering options",
        category: "Desktop",
        image: "/W.cupcakes.png"
      },
      {
        title: "Product Details",
        description: "Ingredients, reviews, and allergen info",
        category: "Mobile",
        image: "/W.cupcake-info.png"
      },
      {
        title: "Streamlined Checkout",
        description: "Reduced steps and clear progress",
        category: "Desktop",
        image: "/W.cart.png"
      },
      {
        title: "Streamlined Checkout",
        description: "Reduced steps and clear progress",
        category: "Desktop",
        image: "/W.payments.png"
      }
    ];
    const Card = ({ frame }) => (
      <div className="min-w-[320px] max-w-[360px] bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-shadow h-[640px] flex flex-col justify-between">
        <div>
          <div className="text-sm text-primary font-medium mb-2">{frame.category}</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{frame.title}</h3>
          <p className="text-muted-foreground mb-4">{frame.description}</p>
        </div>
        <div className="relative w-full flex justify-center items-end h-full overflow-hidden">
          <div className="h-[480px] w-auto overflow-hidden rounded-xl border shadow-md">
            <img 
              src={frame.image} 
              alt={frame.title} 
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    );    
    
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🧩 Wireframes & Ideation
          </h2>
          <p className="text-xl text-muted-foreground">Mobile-first approach to solve key pain points</p>
        </div>
        
        {/* Design Process */}
        <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 shadow-lg border mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Lightbulb className="w-8 h-8 text-primary" />
            Design Process
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Crazy 8s</h4>
              <p className="text-muted-foreground">Rapid ideation for homepage layout</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-coral">2</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">User Flows</h4>
              <p className="text-muted-foreground">Mapped critical user journeys</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-mint">3</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Wireframes</h4>
              <p className="text-muted-foreground">Low-fi to high-fi iterations</p>
            </div>
          </div>
        </div>
        {/* Wireframe Showcase */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">🖼 Wireframe Showcase</h3>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-6">
              {wireframes.map((frame, index) => (
                <Card key={index} frame={frame} />
              ))}
            </div>

            {/* Horizontal Scroll for Desktop */}
            <div className="hidden md:block overflow-x-auto -mx-6 px-6">
              <div className="flex gap-6 w-max">
                {wireframes.map((frame, index) => (
                  <Card key={index} frame={frame} />
                ))}
              </div>
            </div>
          </div>


        {/* Wireframe Showcase */}
        {/* <div className="grid md:grid-cols-2 gap-8">
          {wireframes.map((wireframe, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                {wireframe.type === 'mobile' ? 
                  <Smartphone className="w-6 h-6 text-primary" /> : 
                  <Monitor className="w-6 h-6 text-coral" />
                }
                <h3 className="text-xl font-semibold text-foreground">{wireframe.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">{wireframe.description}</p> */}
              
              {/* Wireframe mockup */}
              {/* <div className="bg-gradient-to-br from-lavender-light to-sky-light rounded-xl p-6 min-h-[200px]">
                <div className="space-y-3">
                  <div className="h-4 bg-white/60 rounded w-3/4"></div>
                  <div className="h-4 bg-white/60 rounded w-1/2"></div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="h-16 bg-white/40 rounded"></div>
                    <div className="h-16 bg-white/40 rounded"></div>
                  </div>
                  <div className="h-8 bg-primary/30 rounded w-full mt-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        
        {/* Key Decisions */}
        <div className="mt-12 bg-card rounded-2xl p-8 shadow-lg border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-3">
            <Layers className="w-8 h-8 text-mint" />
            Key Design Decisions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Information Architecture</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Clear product categorization</li>
                <li>• Prominent search and filter</li>
                <li>• Simplified navigation menu</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">Interaction Design</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• One-click add to cart</li>
                <li>• Progressive disclosure of details</li>
                <li>• Clear CTAs throughout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CupcakeWireframes;