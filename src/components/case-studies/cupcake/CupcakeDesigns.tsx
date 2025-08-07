import { useState } from "react";
import { Palette, Eye, EyeOff, Star, ShoppingBag } from "lucide-react";

const CupcakeDesigns = () => {
  const [showBefore, setShowBefore] = useState(false);
  
  const designs = [

      {
        title: "Mobile-First Homepage",
        description: "Bold hero image, welcoming headline, and a clear 'Shop Now' button tailored for mobile users.",
        category: "Landing",
        image: "landing.png"
      },
      {
        title: "Cupcake Grid",
        description: "Card layout with filters by flavor, price, and dietary needs for easier browsing.",
        category: "Product Listing",
        image: "/cupcakes.png"
      },
      {
        title: "Cupcake Details",
        description: "Detailed ingredient info and allergen badges to build customer trust.",
        category: "Product Details",
        image: "/cupcake-info.png"
      },
      {
        title: "Your Cart",
        description: "Clear overview of selected cupcakes with quantity controls, pricing breakdown, and mini product thumbnails.",
        category: "Cart Preview",
        image: "/cart.png"
      },
      {
        title: "Streamlined Checkout",
        description: "One-page checkout with autofill support and visible progress steps for faster conversion.",
        category: "Checkout",
        image: "/payments.png"
      },
      
  ];
  

  const Card = ({ design }) => (
    <div className="min-w-[320px] max-w-[360px] bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-shadow h-[640px] flex flex-col justify-between">
        <div>
          <div className="text-sm text-primary font-medium mb-2">{design.category}</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{design.title}</h3>
          <p className="text-muted-foreground mb-4">{design.description}</p>
        </div>
        <div className="relative w-full flex justify-center items-end h-full overflow-hidden">
          <div className="h-[430px] w-auto overflow-hidden rounded-xl border shadow-md">
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
    <section className="py-16 px-6 bg-sky-light relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🎨 UI Design Decisions
          </h2>
          <p className="text-xl text-muted-foreground">Creating a delightful shopping experience</p>
        </div>
      
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
<br></br>
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