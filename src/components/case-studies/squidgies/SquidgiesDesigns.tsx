const SquidgiesDesigns = () => {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            🎨 Final Designs
          </h2>
          <p className="text-lg text-muted-foreground">
            Smart e-commerce app designed for busy parents
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Main App Screens */}
          <div className="space-y-8">
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Main App Flow</h3>   
             <img 
                src="/squidgiesUI.png" 
                alt="Squidgies app main screens"
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-muted-foreground text-sm">
                From child registration to product discovery and checkout
              </p>
            </div>
          </div>

          {/* Design Decisions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Key Design Decisions</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Child-Centric Registration</h4>
                <p className="text-muted-foreground text-sm">
                  Simple profile creation that captures size, age, and preferences to enable smart filtering
                </p>
              </div>
              
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Smart Product Display</h4>
                <p className="text-muted-foreground text-sm">
                  Only shows items available in the registered child's size, reducing decision fatigue
                </p>
              </div>
              
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">One-Tap Checkout</h4>
                <p className="text-muted-foreground text-sm">
                  Streamlined payment flow with saved payment methods for busy parents
                </p>
              </div>
              
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Visual Progress Indicators</h4>
                <p className="text-muted-foreground text-sm">
                  Clear progress tracking throughout the shopping and checkout process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SquidgiesDesigns;