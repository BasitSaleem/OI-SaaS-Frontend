import Image from "next/image";
import HeroImageSlider from "./HeroImageSlider";
import HeroModuleBadge from "./HeroModuleBadge";
import { HeroEntranceRefs } from "@/hooks/useHeroEntranceAnimation";

const HERO_IMAGES = [
  "/assets/home-page-images/hero-animation/animation-img1.webp",
  "/assets/home-page-images/hero-animation/animation-img2.webp",
  "/assets/home-page-images/hero-animation/animation-img3.webp",
  "/assets/home-page-images/hero-animation/animation-img4.webp",
  "/assets/home-page-images/hero-animation/animation-img5.webp",
];

const HERO_BACKGROUNDS = [
  "#E2D9F3",
  "#F1DBD5",
  "#E7E2D4",
  "#DAE6F1",
  "#E4E7D4",
];

interface HeroShowcaseProps {
  refs: HeroEntranceRefs;
}

const HeroShowcase = ({ refs }: HeroShowcaseProps) => {
  const {
    productsImageRef,
    advanceReportImageRef,
    inventorySystemImageRef,
    reportsImageRef,
    fastServiceImageRef,
    fastServiceDescRef,
    safeSecureDescRef,
    safeSecureImageRef,
    inventoryBlurIconRef,
    inventoryIconRef,
    growthBoxRef,
  } = refs;

  return (
    <div
      className="owner-inventory-hero__lower relative w-full lg:max-w-[1000px] xl:max-w-[1200px] wrapper  pt-10 md:pt-10 xl:pt-10 "
    >
      <div
        className="w-full h-[376px] lg:h-[650px] max-w-[250px] md:max-w-[300px] lg:max-w-[498px] mx-auto relative z-[1] backdrop-blur-xl  px-3.5 py-3 lg:px-6 lg:py-5 border-[3px] border-[rgba(255,255,255,0.5)] bg-[rgba(255, 255, 255, 0.12)] rounded-[40px] -mb-34 -lg:mb-20"
      >

        <div className="w-full h-full rounded-[40px] relative overflow-hidden owner-inventory-hero__video">
          <HeroImageSlider
            images={HERO_IMAGES}
            backgrounds={HERO_BACKGROUNDS}
          />
        </div>

        <HeroModuleBadge
          ref={productsImageRef}
          src="/assets/home-page-images/products.svg"
          alt="Products module icon"
          label="Products"
          className="flex w-fit items-center justify-center gap-1.5 md:gap-4 px-2.5 py-1.5 md:px-4 md:py-3 glass-background absolute top-[90px] lg:top-20 xl:top-[120px] -left-5 lg:left-[-50px] xl:left-[-60px]"
        />

        <HeroModuleBadge
          ref={advanceReportImageRef}
          src="/assets/home-page-images/advance-report.svg"
          alt="Advance Reports module icon"
          label="Advance Reports"
          className="flex w-fit items-center justify-center gap-1.5 md:gap-4 px-2.5 py-1.5 md:px-4 md:py-3 glass-background absolute top-[180px] -left-5 lg:top-[220px] lg:-left-14 xl:top-[300px] xl:left-[-60px]"
        />

        <HeroModuleBadge
          ref={inventorySystemImageRef}
          src="/assets/home-page-images/inventory-system.svg"
          alt="Inventory Operations module icon"
          label="Inventory Operations"
          className="flex w-fit items-center justify-center gap-1.5 md:gap-4 px-2.5 py-1.5 md:px-4 md:py-3 glass-background absolute top-[55px] -right-10 md:top-[110px] lg:top-[130px] md:right-[-110px] lg:-right-40 xl:right-[-150px] 2xl:top-[120px] 2xl:right-[-200px]"
        />
        <HeroModuleBadge
          ref={reportsImageRef}
          src="/assets/home-page-images/reports.svg"
          alt="Reports module icon"
          label="Reports"
          className="flex w-fit items-center justify-center gap-1.5 md:gap-4 px-2.5 py-1.5 md:px-4 md:py-3 glass-background absolute top-[148px] -right-10 md:top-[200px] md:right-[-60px] lg:top-[250px] lg:-right-20 xl:top-[300px] xl:right-[-120px]"
        />
      </div>

      <div
        ref={fastServiceDescRef}
        style={{ opacity: 0 }}
        className="hidden lg:flex w-fit items-center justify-center gap-4 px-4 py-2 backdrop-blur-xl bg-[rgba(255, 255, 255, 0.25)] border-[1.5px]  border-[rgba(255,255,255,1)] rounded-full absolute top-[200px] left-0 2xl:top-[120px] 2xl:left-0"
      >
        <p className="text-base leading-5 font-medium font-['Onest'] text-[#581C87]">
          Fast Service
        </p>
      </div>
      <Image
        src="/assets/home-page-images/fast-service.svg"
        alt="Fast Service"
        ref={fastServiceImageRef}
        width={51}
        height={64}
        style={{ opacity: 0 }}
        className="w-[51px] h-16 hidden lg:block absolute top-[110px] left-[30px] 2xl:top-[50px] 2xl:left-[60px]"
      />
      <div
        ref={safeSecureDescRef}
        style={{ opacity: 0 }}
        className="hidden lg:flex w-fit items-center justify-center gap-4 px-4 py-2 backdrop-blur-xl bg-[rgba(255, 255, 255, 0.25)] border-[1.5px]  border-[rgba(255,255,255,1)] rounded-full absolute bottom-10 right-2 xl:bottom-[250px] 2xl:bottom-[200px] 2xl:right-0"
      >
        <p className="text-base leading-5 font-medium font-['Onest'] text-[#581C87]">
          Safe & Secure
        </p>
      </div>
      <Image
        src="/assets/home-page-images/safe-secure.svg"
        alt="Safe and Secure"
        ref={safeSecureImageRef}
        width={100}
        height={118}
        style={{ opacity: 0 }}
        className="2xl:w-[100px] hidden lg:block 2xl:h-[118px] w-20 h-[90px] absolute bottom-[85px] right-0 xl:bottom-[300px] 2xl:bottom-[250px] 2xl:right-[60px]"
      />

      <Image
        src="/assets/home-page-images/inventory-blur-icon.svg"
        alt="Inventory icon decorative"
        ref={inventoryBlurIconRef}
        width={120}
        height={120}
        style={{ opacity: 0 }}
        className="2xl:w-[120px] lg:w-[90px] lg:h-[90px] md:w-[63px] md:h-[63px] w-[46px] h-[46px] 2xl:h-[120px] absolute top-4 right-2 md:-top-2.5 2xl:-top-7 2xl:right-[200px] md:right-10"
      />

      <Image
        src="/assets/home-page-images/inventory-icon.svg"
        alt="Inventory management icon"
        ref={inventoryIconRef}
        width={120}
        height={120}
        style={{ opacity: 0 }}
        className="2xl:w-[120px] 2xl:h-[120px] lg:w-[90px] lg:h-[90px] md:w-[63px] md:h-[63px] w-[46px] h-[46px] absolute top-7  right-3.5 md:top-2.5 md:right-15 lg:top-2.5 lg:right-5 2xl:top-0 2xl:right-[220px]"
      />

      <div
        ref={growthBoxRef}
        style={{ opacity: 0 }}
        className="hidden lg:flex flex-col w-full max-w-[300px] xl:max-w-[400px] 2xl:max-w-[480px] p-4 absolute bottom-0  -z-20"
      >
        <div>
          <p className="text-[#2E263DE5] font-['Onest'] font-semibold text-5xl leading-[53px]">42.5k</p>
        </div>
        <Image
          src="/assets/home-page-images/total-growth.svg"
          alt="Total Growth Chart"
          width={800}
          height={600}
          className="w-full "
        />
        <div>
          <p className="text-[rgba(46, 38, 61, 0.9)] text-left xl:text-center mt-3 text-[21px] leading-[30px] font-medium font-['Onest']">
            Total Growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
