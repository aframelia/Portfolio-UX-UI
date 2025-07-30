import Navigation from "@/components/Navigation";
import CaseHero from "@/components/CaseHero";
import CaseMeta from "@/components/CaseMeta";
import CaseProblem from "@/components/CaseProblem";
import CaseResearch from "@/components/CaseResearch";
import CaseGoals from "@/components/CaseGoals";
import CaseWireframes from "@/components/CaseWireframes";
import CaseDesigns from "@/components/CaseDesigns";
import CaseResults from "@/components/CaseResults";
import CaseTakeaways from "@/components/CaseTakeaways";
import CaseCTA from "@/components/CaseCTA";

const FlightCaseStudy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <CaseHero />
        <CaseMeta />
        <CaseProblem />
        <CaseResearch />
        <CaseGoals />
        <CaseWireframes />
        <CaseDesigns />
        <CaseResults />
        <CaseTakeaways />
        <CaseCTA />
      </main>
    </div>
  );
};

export default FlightCaseStudy;