import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseCTA = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-coral-light via-peach-light to-mint-light relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Want to chat UX or collaborate?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'd love to hear your thoughts on this case study or discuss how we might work together!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
            <MessageCircle className="w-5 h-5 mr-2" />
            Let's Talk
          </Button> */}
          
          <Button variant="outline" size="lg" className="border-2 border-foreground/20 px-8 py-4 rounded-full font-semibold hover:bg-card hover:shadow-lg transition-all">
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </Button>
        </div>
      </div>
      
      {/* Envelope doodle */}
      <div className="absolute bottom-8 right-8 transform rotate-12">
        <Mail className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default CaseCTA;