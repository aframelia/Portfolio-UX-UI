import Navigation from "@/components/Navigation";
import CaseHero from "@/components/case-studies/flight/CaseHero";
import CaseMeta from "@/components/case-studies/flight/CaseMeta";
import CaseProblem from "@/components/case-studies/flight/CaseProblem";
import CaseResearch from "@/components/case-studies/flight/CaseResearch";
import CaseGoals from "@/components/case-studies/flight/CaseGoals";
import CaseWireframes from "@/components/case-studies/flight/CaseWireframes";
import CaseDesigns from "@/components/case-studies/flight/CaseDesigns";
import CaseResults from "@/components/case-studies/flight/CaseResults";
import CaseTakeaways from "@/components/case-studies/flight/CaseTakeaways";
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