import CaseStudyLayout from "@/components/CaseStudyLayout";
import SquidgiesHero from "@/components/case-studies/squidgies/SquidgiesHero";
import SquidgiesMeta from "@/components/case-studies/squidgies/SquidgiesMeta";
import AIHealthProblem from "@/components/case-studies/AI_HealthApp/AIHealthProblem";
import SquidgiesResearch from "@/components/case-studies/AI_HealthApp/AI-HealthReaserch";
import AIHealthGoals from "@/components/case-studies/AI_HealthApp/AIHealthGoals";
import SquidgiesPersona from "@/components/case-studies/squidgies/SquidgiesPersona";
import SquidgiesJourney from "@/components/case-studies/squidgies/SquidgiesJourney";
import SquidgiesWireframes from "@/components/case-studies/squidgies/SquidgiesWireframes";
import SquidgiesDesigns from "@/components/case-studies/squidgies/SquidgiesDesigns";
import SquidgiesTesting from "@/components/case-studies/squidgies/SquidgiesTesting";
import SquidgiesResults from "@/components/case-studies/squidgies/SquidgiesResults";
import SquidgiesTakeaways from "@/components/case-studies/squidgies/SquidgiesTakeaways";
import SquidgiesNextSteps from "@/components/case-studies/squidgies/SquidgiesNextSteps";
import AIHealthResearch from "@/components/case-studies/AI_HealthApp/AI-HealthReaserch";

const SquidgiesCaseStudy = () => {
  return (
    <CaseStudyLayout
      hero={<SquidgiesHero />}
      meta={<SquidgiesMeta />}
      problem={<AIHealthProblem />}
      research={<AIHealthResearch/>}
      goals={<AIHealthGoals />}
      journeys={<SquidgiesJourney/>}
      wireframes={<SquidgiesWireframes />}
      designs={<SquidgiesDesigns />}
      results={<SquidgiesResults />}
      takeaways={<SquidgiesTakeaways />}
    />
  );
};

export default SquidgiesCaseStudy;