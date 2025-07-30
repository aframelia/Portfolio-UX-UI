import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-light via-sky-light to-mint-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8">
        <Sparkles className="text-primary w-8 h-8 animate-pulse" />
      </div>
      
      <div className="text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Portfolio Preview ✨
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          Explore the Flight Case Study with beautiful pastel design
        </p>
        
        <Button 
          onClick={() => navigate('/flight-case-study')}
          size="lg" 
          className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          View Case Study
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
