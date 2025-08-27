import { useState } from "react";
import { Heart } from "lucide-react";

const CaseDesigns = () => {
  const designs = [
    {
      title: "Flight Booking",
      description: "Streamlined search and selection",
      category: "Core Flow",
      image: "/Search.png"
    },
    {
      title: "Flight Booking",
      description: "Streamlined search and selection",
      category: "Core Flow",
      image: "/Calendar.png"
    },
    {
      title: "Confirmation Screen",
      description: "Clear booking details",
      category: "Booking State",
      image: "/Seat.png"
    },
    {
      title: "Flight Summary",
      description: "Description and fees",
      category: "Your Info",
      image: "/Summary.png"
    }
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
    <section className="py-16 px-6 bg-sky-light relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Final UI
          </h2>
          <p className="text-xl text-muted-foreground">The polished designs</p>
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
      </div>

      {/* Doodles */}
      <div className="absolute top-8 right-8">
        <Heart className="w-6 h-6 text-coral animate-pulse" />
      </div>
      <div className="absolute top-12 right-16 animate-bounce delay-150">
        <div className="w-2 h-2 bg-coral rounded-full"></div>
      </div>
      <div className="absolute top-16 right-12 animate-bounce delay-300">
        <div className="w-2 h-2 bg-peach rounded-full"></div>
      </div>
    </section>
  );
};

export default CaseDesigns;
