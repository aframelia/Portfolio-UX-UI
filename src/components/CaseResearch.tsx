import { MessageCircle, User } from "lucide-react";

const CaseResearch = () => {
  const quotes = [
    {
      text: "I get so confused trying to find my booking confirmation. Where is everything?",
      author: "Sarah, 34",
      bg: "peach-light"
    },
    {
      text: "The app doesn't tell me when my gate changes. I almost missed my flight!",
      author: "Marcus, 28",
      bg: "mint-light"
    },
    {
      text: "Booking a flight takes forever. Too many steps and confusing options.",
      author: "Elena, 42",
      bg: "sky-light"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Talking to Travelers
          </h2>
          <p className="text-xl text-muted-foreground">Real feedback from real users</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className={`bg-${quote.bg} rounded-2xl p-6 border shadow-sm relative`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <User className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{quote.author}</div>
                  <div className="text-sm text-muted-foreground">Traveler</div>
                </div>
              </div>
              
              <div className="relative">
                <MessageCircle className="w-5 h-5 text-muted-foreground mb-2" />
                <p className="text-foreground leading-relaxed">
                  "{quote.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseResearch;