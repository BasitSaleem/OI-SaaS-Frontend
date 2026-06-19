import React from "react";
import SectionHeading from "../typography/SectionHeading";
import CaseStudyCard from "./CaseStudyCard";
import { CaseStudy } from "./CaseStudy";

interface CaseStudyOverviewProps {
  heading: string;
  study: CaseStudy;
}

const CaseStudyOverview: React.FC<CaseStudyOverviewProps> = ({
  heading,
  study,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeading heading={heading} headingClassName="text-center" />
        </div>
        <CaseStudyCard study={study} hideCTA={true} hideNavigation={true} />
      </div>
    </section>
  );
};

export default CaseStudyOverview;
