import Navigation from "@/components/Navigation";
import CaseCTA from "@/components/CaseCTA";

const CaseStudyLayout = ({
  hero,
  meta,
  problem,
  research,
  goals,
  journeys,
  wireframes,
  designs,
  results,
  takeaways,
}: {
  hero: React.ReactNode;
  meta: React.ReactNode;
  problem: React.ReactNode;
  research: React.ReactNode;
  goals: React.ReactNode;
  journeys:React.ReactNode;
  wireframes: React.ReactNode;
  designs: React.ReactNode;
  results: React.ReactNode;
  takeaways: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {hero}
        {meta}
        {problem}
        {research}
        {goals}
        {journeys}
        {wireframes}
        {designs}
        {results}
        {takeaways}
        <CaseCTA />
      </main>
    </div>
  );
};

export default CaseStudyLayout;
