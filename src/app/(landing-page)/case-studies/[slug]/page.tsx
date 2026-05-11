import { caseStudiesData, Challenge, StrategyStep } from "@/constant/caseStudiesData/caseStudiesData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import MainHeading from "@/components/pages/typography/MainHeading";
import Paragraph from "@/components/pages/typography/Paragraph";
import CaseStudyHero from "@/components/pages/landing-page/CaseStudyHero";
import CaseStudyOverview from "@/components/pages/landing-page/CaseStudyOverview";
import UnifiedPlatform from "@/components/pages/landing-page/UnifiedPlatform";
import CaseStudyOutcomes from "@/components/pages/landing-page/CaseStudyOutcomes";
import IndustryWorkflowSection from "@/components/pages/industries-page/IndustryWorkflowSection";
import ResultsInNumbers from "@/components/pages/landing-page/ResultsInNumbers";

export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const caseStudy = caseStudiesData.find(
    (study) => study.slug === resolvedParams.slug
  );

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Owners Inventory",
    };
  }

  return {
    title: `${caseStudy.companyName} | Owners Inventory`,
    description: caseStudy.subtitle,
    alternates: {
      canonical: `https://ownersinventory.com/case-studies/${caseStudy.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Find the case study by matching the slug
  const caseStudy = caseStudiesData.find(
    (study) => study.slug === resolvedParams.slug
  );

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
       <CaseStudyHero
        title={caseStudy.companyName}
        subTitle={caseStudy.tagline}
        description={caseStudy.subtitle}
        heroStats={caseStudy.heroStats}
        variant="animation2"
        primaryColor={caseStudy.primaryColor}
        secondaryColor={caseStudy.secondaryColor}
       />
       <CaseStudyOverview 
         heading={caseStudy.founderQuote?.heading || ""}
         study={caseStudy} 
       />
       <UnifiedPlatform
         isCaseStudy={true}
         title={caseStudy.challengesTitle || "The Challenge"}
         heading={caseStudy.challengesHead || "Operational Challenges"}
         paragraph={caseStudy.challengesIntro || ""}
         cards={caseStudy.challenges?.map((challenge: Challenge) => ({
           icon: challenge.icon,
           title: challenge.title,
           description: challenge.description,
         })) || []}
         iconSet={caseStudy.challengesIconSet}
       />

        <IndustryWorkflowSection
          title={caseStudy.strategyHead || "A Structured Path to Success"}
          miniTitle= {caseStudy.strategyTitle || "Our Approach"}
          description={caseStudy.strategyIntro || "We engineered a systematic transition strategy designed to eliminate the manual bottlenecks."}
          items={caseStudy.strategySteps?.map((step: StrategyStep, index: number) => ({
            id: index + 1,
            title: step.title,
            description: step.description,
          })) || []}
        />

        <CaseStudyOutcomes
         badge={caseStudy.outcomesTitle || "The Difference Made"}
          heading={caseStudy.outcomesHeading || "How Everything Changed"}
          description={caseStudy.outcomesIntro || ""}
          outcomes={caseStudy.outcomes || []}
          iconSet={caseStudy.outcomesIconSet}
          bottomImage={caseStudy.outcomesBanner || "/assets/case-studies/outcome-banner.webp"}
        />

        <ResultsInNumbers 
          badge={caseStudy.resultTitle || "Results in Numbers"}
          title={caseStudy.resultsHeading}
          description={caseStudy.resultsSubheading}
          metrics={caseStudy.resultMetrics}
        />
    </>
  );
}
