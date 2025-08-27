import BhiveHero from "@/components/case-studies/Bhive/BhiveHero";
import Navigation from "@/components/Navigation";
import BhiveMeta from "@/components/case-studies/Bhive/BhiveMeta";
import BhiveProblem from "@/components/case-studies/Bhive/BhiveProblem";
import BhiveDesign from "@/components/case-studies/Bhive/BhiveDesign";
import BhiveGoals from "@/components/case-studies/Bhive/BhiveGoals";
import CaseCTA from "@/components/CaseCTA";

const Bhive = () => {
    return (
        <div className="min-h-screen">
          <Navigation />
          <main className="pt-16">
            <BhiveHero />
            <BhiveMeta />
            <BhiveProblem />
            <BhiveGoals />
            <BhiveDesign />
            <CaseCTA />
          </main>
        </div>
      );
  };
  
  export default Bhive;