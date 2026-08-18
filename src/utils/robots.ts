import { Metadata } from "next";

export const getRobotsMetadata = (): Metadata["robots"] => {
  const isStaging = process.env.NEXT_PUBLIC_APP_ENV === "staging";
  return isStaging
    ? { index: false, follow: false }
    : { index: true, follow: true };
};
