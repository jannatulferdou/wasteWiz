
import BusinessPreview from "../pages/Home/BusinessPreview";
import CTA from "../pages/Home/CTA";
import Hero from "../pages/Home/Hero";
import ImpactCounter from "../pages/Home/Impact";
import ImpactPreview from "../pages/Home/ImpactPreview";
import ProblemSolution from "../pages/Home/ProblemSolution";
import TechnologyPreview from "../pages/Home/TechnologyPreview";

const HomeLayouts = () => {
  return (
    <>
      <Hero />
      <ImpactCounter />
      <ProblemSolution />
      <TechnologyPreview />
      <BusinessPreview />
      <ImpactPreview />
      <CTA />
    </>
  );
};

export default HomeLayouts;