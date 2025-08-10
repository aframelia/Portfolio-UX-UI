const SquidgiesDesigns = () => {
  const designs = [
    {
      title: "Login Screen",
      description: "Quick login process.",
      category: "Core Flow",
      image: "/SquidRegisterKid.jpeg"
    },
    {
      title: "Signup Screen",
      description: "Quick Signup with clear prompts and minimal friction.",
      category: "Core Flow",
      image: "/SquidLogin.jpeg"
    },
    {
      title: "Registration – Kid’s Profile",
      description: "A simple register flow too register your kid.",
      category: "Booking State",
      image: "/SquidRegister.jpeg"
    },
    {
      title: "Product Listing",
      description: "An overview of available Squidgies with prices and quick add-to-cart options.",
      category: "Shopping Experience",
      image: "/SquidProducts.jpeg"
    },
    {
      title: "Navigation",
      description: "A visually engaging navigation menu for exploring categories.",
      category: "Navigation",
      image: "/SquidMenu.jpeg"
    },
    {
      title: "Product Detail",
      description: "Detailed view with images, descriptions, and customization choices.",
      category: "Shopping Experience",
      image: "/SquidProduct.jpeg"
    },
    
    {
      title: "Checkout – Step 1",
      description: "Simple and clear checkout flow to review items and proceed to payment.",
      category: "Purchase Flow",
      image: "/SquidChecout.jpeg"
    },
    {
      title: "Order Summary",
      description: "Final breakdown of costs, including fees and delivery details.",
      category: "Purchase Flow",
      image: "/SquidTotal.jpeg"
    },
    {
      title: "Order Confirmation",
      description: "Friendly confirmation message with order details and next steps.",
      category: "Booking State",
      image: "/SquidConfirmation.jpeg"
    },
  ];
  const Card = ({ design }) => (
    <div className="min-w-[320px] max-w-[360px] bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-shadow h-[640px] flex flex-col justify-between">
      <div>
        <div className="text-sm text-coral font-medium mb-2">{design.category}</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{design.title}</h3>
        <p className="text-muted-foreground mb-4">{design.description}</p>
      </div>
      <div className="relative w-full flex justify-center items-end h-full overflow-hidden">
        <div className="h-[480px] w-auto overflow-hidden rounded-xl border shadow-md">
          <img 
            src={design.image} 
            alt={design.title} 
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
  

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
         
          {/* Scrollable horizontal container for md+ screens */}
              <div className="md:hidden flex flex-col gap-6">
                {designs.map((design, index) => (
                  <Card key={index} design={design} />
                ))}
              </div>

              <div className="hidden md:block overflow-x-auto -mx-6 px-6">
                <div className="flex gap-6 w-max">
                  {designs.map((design, index) => (
                    <Card key={index} design={design} />
                  ))}
                </div>
              </div>
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