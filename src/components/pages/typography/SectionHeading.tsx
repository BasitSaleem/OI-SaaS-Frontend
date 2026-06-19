import React from "react";
import MainHeading from "./MainHeading";
import Paragraph from "./Paragraph";

interface SectionHeadingProps {
  /** Section title — rendered with MainHeading (h2). */
  heading: React.ReactNode;
  /** Optional section description — rendered with Paragraph. Omit to hide it. */
  description?: React.ReactNode;
  /** Spacing/color/alignment classes passed through to MainHeading. */
  headingClassName?: string;
  /** Spacing/color/alignment classes passed through to Paragraph. */
  descriptionClassName?: string;
}

/**
 * The repeated "section heading" block: a MainHeading followed by an optional
 * Paragraph. Renders a Fragment (no wrapper element) so it drops into an
 * existing layout container without changing the DOM structure. className
 * props are passed straight through to the underlying typography components —
 * they must stay spacing/color/alignment only (never font-size/weight).
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  description,
  headingClassName,
  descriptionClassName,
}) => (
  <>
    <MainHeading className={headingClassName}>{heading}</MainHeading>
    {description && (
      <Paragraph className={descriptionClassName}>{description}</Paragraph>
    )}
  </>
);

export default SectionHeading;
