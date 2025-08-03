import { MessageCircle, User } from "lucide-react";

const CaseResearch = () => {
  const quotes = [
    {
      text: "I kept switching dates over and over — it felt like a guessing game just to find a good price.",
      author: "Sarah, 34",
      bg: "peach-light"
    },
    {
      text: "I wish there was a way to see the cheapest days at a glance instead of checking each one manually.",
      author: "Marcus, 28",
      bg: "mint-light"
    },
    {
      text: "It took me over 30 minutes to find a flight that fit my budget — I nearly gave up.",
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