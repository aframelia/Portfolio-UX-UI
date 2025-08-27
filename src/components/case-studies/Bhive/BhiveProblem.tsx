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
          The original website focused on introducing the company as a concept but did not effectively encourage users to download or engage with the app. The landing page was static and minimal, offering limited interaction beyond joining a waitlist.
          For new visitors, the app’s purpose and value were not immediately clear, and the lack of strong calls-to-action (CTAs) meant missed opportunities to convert interest into app installs.          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseProblem;