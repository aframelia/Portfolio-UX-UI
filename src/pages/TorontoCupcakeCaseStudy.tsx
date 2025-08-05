import CaseStudyLayout from "@/components/CaseStudyLayout";
import CupcakeHero from "@/components/case-studies/cupcake/CupcakeHero";
import CupcakeMeta from "@/components/case-studies/cupcake/CupcakeMeta";
import CupcakeProblem from "@/components/case-studies/cupcake/CupcakeProblem";
import CupcakeResearch from "@/components/case-studies/cupcake/CupcakeResearch";
import CupcakeGoals from "@/components/case-studies/cupcake/CupcakeGoals";
import CupcakePersona from "@/components/case-studies/cupcake/CupcakePersona";
import CupcakeJourney from "@/components/case-studies/cupcake/CupcakeJourney";
import CupcakeWireframes from "@/components/case-studies/cupcake/CupcakeWireframes";
import CupcakeDesigns from "@/components/case-studies/cupcake/CupcakeDesigns";
import CupcakeTesting from "@/components/case-studies/cupcake/CupcakeTesting";
import CupcakeResults from "@/components/case-studies/cupcake/CupcakeResults";
import CupcakeTakeaways from "@/components/case-studies/cupcake/CupcakeTakeaways";
import CupcakeNextSteps from "@/components/case-studies/cupcake/CupcakeNextSteps";

const TorontoCupcakeCaseStudy = () => {
  return (
    <CaseStudyLayout
      hero={<CupcakeHero />}
      meta={<CupcakeMeta />}
      problem={<CupcakeProblem />}
      research={<CupcakeResearch />}
      goals={<CupcakeGoals />}
      journeys={<CupcakeJourney/>}
      wireframes={<CupcakeWireframes />}
      designs={<CupcakeDesigns />}
      results={<CupcakeResults />}
      takeaways={<CupcakeTakeaways />}
    />
  );
};

export default TorontoCupcakeCaseStudy;