import { AlertCircle } from "lucide-react";

const CaseProblem = () => {
  return (
    <section className="py-16 px-6 bg-lavender-light">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Problem
          </h2>
          {/* Scribble underline */}
          <div className="absolute -bottom-2 left-0 right-0 h-2 bg-coral opacity-60 rounded-full transform -rotate-1"></div>
        </div>
        
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <AlertCircle className="w-8 h-8 text-coral" />
            <span className="text-coral font-semibold">Pain Point</span>
          </div>
          
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            Travelers struggle with booking and managing flights—confusing flows, 
            poor visibility of changes, and scattered info.
          </p>
        </div>
        
        {/* Mockup placeholder */}
        {/* <div className="mt-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 max-w-md mx-auto border">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-sm text-muted-foreground mb-4">Original App Screenshot</div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-300 rounded w-3/4"></div>
              <div className="h-4 bg-slate-300 rounded w-1/2"></div>
              <div className="h-8 bg-coral-light rounded w-full flex items-center justify-center">
                <span className="text-xs text-coral font-medium">Confusing Interface</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CaseProblem;