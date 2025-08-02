import { PenTool } from "lucide-react";

const CaseWireframes = () => {
  const wireframes = [
    { title: "Home Screen", stage: "Initial sketch" },
    { title: "Search Flow", stage: "User journey" },
    { title: "Booking Form", stage: "Form design" },
    { title: "Confirmation", stage: "Success state" },
    { title: "Flight Status", stage: "Live updates" }
  ];

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Grid paper background */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sketching Ideas
          </h2>
          <p className="text-xl text-muted-foreground">From concept to wireframes</p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {wireframes.map((wireframe, index) => (
            <div key={index} className="flex-none w-64">
              <div className="bg-card rounded-2xl p-6 shadow-sm border h-80">
                <div className="text-sm text-muted-foreground mb-3">{wireframe.stage}</div>
                <h3 className="font-semibold text-foreground mb-4">{wireframe.title}</h3>
                
                {/* Wireframe mockup */}
                <div className="space-y-3">
                  <div className="h-3 bg-border rounded w-3/4"></div>
                  <div className="h-3 bg-border rounded w-1/2"></div>
                  <div className="h-16 bg-border rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-3 bg-border rounded w-1/3"></div>
                    <div className="h-3 bg-border rounded w-1/3"></div>
                  </div>
                  <div className="h-8 bg-primary/20 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pen doodle */}
      <div className="absolute bottom-8 right-8 transform rotate-12">
        <PenTool className="w-8 h-8 text-coral" />
      </div>
    </section>
  );
};

export default CaseWireframes;