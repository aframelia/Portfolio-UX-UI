import CaseStudyLayout from "@/components/CaseStudyLayout";
import SquidgiesHero from "@/components/case-studies/squidgies/SquidgiesHero";
import SquidgiesMeta from "@/components/case-studies/squidgies/SquidgiesMeta";
import SquidgiesProblem from "@/components/case-studies/squidgies/SquidgiesProblem";
import SquidgiesResearch from "@/components/case-studies/squidgies/SquidgiesResearch";
import SquidgiesGoals from "@/components/case-studies/squidgies/SquidgiesGoals";
import SquidgiesPersona from "@/components/case-studies/squidgies/SquidgiesPersona";
import SquidgiesJourney from "@/components/case-studies/squidgies/SquidgiesJourney";
import SquidgiesWireframes from "@/components/case-studies/squidgies/SquidgiesWireframes";
import SquidgiesDesigns from "@/components/case-studies/squidgies/SquidgiesDesigns";
import SquidgiesTesting from "@/components/case-studies/squidgies/SquidgiesTesting";
import SquidgiesResults from "@/components/case-studies/squidgies/SquidgiesResults";
import SquidgiesTakeaways from "@/components/case-studies/squidgies/SquidgiesTakeaways";
import SquidgiesNextSteps from "@/components/case-studies/squidgies/SquidgiesNextSteps";

const SquidgiesCaseStudy = () => {
  return (
    <CaseStudyLayout
      hero={<SquidgiesHero />}
      meta={<SquidgiesMeta />}
      problem={<SquidgiesProblem />}
      research={<SquidgiesResearch />}
      goals={<SquidgiesGoals />}
      journeys={<SquidgiesJourney/>}
      wireframes={<SquidgiesWireframes />}
      designs={<SquidgiesDesigns />}
      results={<SquidgiesResults />}
      takeaways={<SquidgiesTakeaways />}
    />
  );
};

export default SquidgiesCaseStudy;