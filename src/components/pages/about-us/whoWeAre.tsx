"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSm from "@/components/button/ButtonSm";
import Image from "next/image";
import MainHeading from "../typography/MainHeading";
import Paragraph from "../typography/Paragraph";
import whoWeBanner from "../../../../public/assets/about-us/who-we-banner.webp";
import CardHeading from "../typography/CardHeading";
import CardDesc from "../typography/CardDesc";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureItem {
  id: number;
  heading: string;
  description: string;
}

interface WhoWeAreProps {
  featureItems?: FeatureItem[];
  title?: string;
  description?: string;
  mission?: string;
  imageSrc?: any; // Next.js Image component type
  imageAlt?: string;
}

function WhoWeAre({
  featureItems = [
    {
      id: 1,
      heading: "360°",
      description: "Visibility",
    },
    {
      id: 2,
      heading: "Real-time",
      description: "Syncing",
    },
  ],
  title = "Who We Are",
  description = "Owners Inventory is more than just software; we are a technology partner for modern commerce. We built a platform that seamlessly integrates Point of Sale (POS), eCommerce, and advanced inventory management into a single, cohesive ecosystem.",
  mission = "Our mission is simple: to provide retailers, wholesalers, and manufacturers with the precision tools they need to streamline daily operations and scale their businesses with absolute confidence.",
  imageSrc = whoWeBanner,
  imageAlt = "Hero Image",
}: WhoWeAreProps) {
  useEffect(() => {
    // optional: we can add small scroll-based subtle animation later.
    // For now keep this simple and ensure it doesn't affect layout calculation.
    // If you need gif/anime timeline, create a gsap.context and matchMedia here similarly.
    return () => {};
  }, []);

  return (
    <div className="who-we-shadow">
      <section className="wrapper lg:pt-[100px] md:pt-20 pt-[60px]">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-14 xl:gap-32 items-center justify-center w-full">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center">
            <MainHeading className=" mb-0 md:mb-10 lg:mb-[50px]">
              {title}
            </MainHeading>

            <Paragraph className="mb-6">{description}</Paragraph>
            <Paragraph>{mission}</Paragraph>

            {featureItems.length > 0 && (
              <div className="flex gap-6 items-center justify-start mt-6">
                {featureItems.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-6">
                    <div className="flex flex-col items-start justify-center gap-2">
                      <CardHeading>{item.heading}</CardHeading>
                      <p className="text-sm leading-[170%] font-['onest'] font-normal text-[var(--text-grey)]">{item.description}</p>
                    </div>

                    {/* Add separator line between items except after the last one */}
                    {index < featureItems.length - 1 && (
                      <div className="w-px h-10 bg-[#E2E8F0]"></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={whoWeBanner}
              alt="Hero Image"
              width={1200}
              height={675}
              className={`w-full object-cover rounded-3xl `}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoWeAre;
