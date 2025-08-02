import Navigation from "@/components/Navigation";
import CaseHero from "@/components/CaseHero";
import CaseMeta from "@/components/CaseMeta";
import CaseProblem from "@/components/CaseProblem";
import CaseResearch from "@/components/CaseResearch";
import CaseGoals from "@/components/CaseGoals";
import CasePersona from "@/components/CasePersona";
import CaseJourney from "@/components/CaseJourney";
import CaseWireframes from "@/components/CaseWireframes";
import CaseDesigns from "@/components/CaseDesigns";
import CaseTesting from "@/components/CaseTesting";
import CaseResults from "@/components/CaseResults";
import CaseTakeaways from "@/components/CaseTakeaways";
import CaseNextSteps from "@/components/CaseNextSteps";
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
        <CasePersona />
        <CaseJourney />
        <CaseWireframes />
        <CaseDesigns />
        <CaseTesting />
        <CaseResults />
        <CaseTakeaways />
        <CaseNextSteps />
        <CaseCTA />
      </main>
    </div>
  );
};

export default FlightCaseStudy;