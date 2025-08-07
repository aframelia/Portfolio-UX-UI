import { User, Clock, AlertTriangle, Smartphone } from "lucide-react";

const CasePersona = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            👤 Meet Maya
          </h2>
          <p className="text-xl text-muted-foreground">Our primary user persona</p>
        </div>
        
        <div className="bg-gradient-to-br from-card via-card to-accent/5 rounded-3xl p-8 md:p-12 shadow-lg border max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Persona Avatar */}
            <div className="text-center md:text-left">
              <div className="w-32 h-32 bg-gradient-to-br from-coral to-peach rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                <User className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Maya Rodriguez</h3>
              <p className="text-lg text-muted-foreground mb-4">28, Marketing Manager</p>
              <p className="text-foreground">Casual traveler who flies 3-4 times per year for work and leisure</p>
            </div>
            
            {/* Persona Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-primary" />
                  Tech Comfort
                </h4>
                <p className="text-muted-foreground">Uses mobile apps daily but gets frustrated with complex interfaces</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-mint" />
                  Travel Needs
                </h4>
                <ul className="text-muted-foreground space-y-1">
                <li>• Find affordable flights across flexible dates</li>
                <li>• Compare prices quickly without repeating searches</li>
                <li>• See all essential travel info in one place</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-coral" />
                  Pain Points
                </h4>
                <ul className="text-muted-foreground space-y-1">
                <li>• Manually checking multiple dates is exhausting</li>
                <li>• Budget-friendly options are hard to spot</li>
                <li>• Info is scattered across tabs and apps</li>
                <li>• Repetitive, time-consuming booking process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasePersona;