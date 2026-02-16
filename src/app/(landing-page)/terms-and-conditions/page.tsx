
"use client"; 

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CalltoActionBottom from "@/components/pages/landing-page/CalltoActionBottom";

const TermAndConditionPage = () => {
   const TermAndConditionData = [
    {
      title: "Introduction",
      content: [
        "Welcome to Owners Inventory! These Terms and Conditions apply to your use of our platform and services. By accessing or using Owners Inventory, you agree to abide by these Terms. If you do not agree, do not use our Services.",
        "Our platform offers inventory management, CRM, accounting, and other business operations tools. These Terms are designed to safeguard your rights and ours, as well as provide a safe and secure experience.",
      ],
    },
    {
      title: "Account Registration",
      content: [
        "Users are required to give correct, full, and updated information when registering, billing and maintaining business records. It is your duty to protect your login details and limit access to your account.",
        "All activities conducted through your account are your responsibility. In case you suspect unauthorized access, misuse, or security breach, you should immediately report to the Owners Inventory.",
      ],
    },
    {
      title: "Use of the Service",
      content: [
        "The Services may be used for lawful business activities such as inventory management, sales tracking, reporting, customer relationship management, and other legitimate platform capabilities. You will not participate in illegal activities like hacking, spamming, violation of intellectual property rights, or any other misuse that interferes with the integrity or functionality of the platform.",
        "Your data belongs to you. Nevertheless, through the Services, you license Owners Inventory to process, store, and use your data as necessary to deliver, sustain, and enhance the Services.",
      ],
    },
    {
      title: "Subscriptions & Billing",
      content: [
        "The Services are provided under free and paid subscription plans, which may include limited trial periods to new users. The subscription charges should be paid in accordance with the selected plan, including applicable taxes and billing cycles. Our Refund Policy on the site regulates refunds and cancellations. Late payments can lead to suspension or cancellation of paid features and access to accounts.",
      ],
    },
    {
      title: "User Content & Intellectual Property",
      content: [
        "All the content and data you upload or post on the platform remain your property. Through the Services, you license Owners Inventory to use, display, store, and process your content only to the extent of providing and supporting the Services.",
        "You will not violate third-party intellectual property rights and will not infringe on copyrights, trademarks, or other proprietary rights.",
      ],
    },
    {
      title: "Data Privacy & Security",
      content: [
        "We value your privacy. Our Privacy Policy describes the way we collect, use, process, and store your information. By using the Services, you consent to these data practices.",
        "Owners Inventory implements reasonable technical and organizational security measures to protect user data. Nevertheless, there is no system that can provide complete security, and users are aware of the risks that are involved in online data storage.",

      ],
    },
     {
      title: "Third-Party Services",
      content: [
        "The Services can be connected to third-party applications, including payment gateways, accounting software, ecommerce platforms, or cloud services. These providers are independent and are regulated by their terms and policies.",
        "Owners Inventory does not regulate and is not liable for service interruptions, data loss, delays, and errors due to the third-party integrations. Such services are used at your own risk.",
      ],
    },
    {
      title: "Service Modifications",
      content: [
        "Owners Inventory reserves the right to add, modify, suspend, or discontinue features of the Services at any time. We can make updates to enhance functionality, security, or performance. Where necessary, major changes will be announced beforehand. The use of the platform following changes amounts to acceptance of the changes.",
      ],
    },
     {
      title: "Termination",
      content: [
        "Users can terminate their accounts whenever they want through the specified account closure procedure. Owners Inventory reserves the right to suspend or cancel accounts in case of breach of these Terms or misuse of the Services.",
        "Upon termination, access to the services will cease. User data can be stored temporarily to meet legal, regulatory or operational requirements in line with our data retention policies and will be deleted safely thereafter.",
      ],
    },
    {
      title: "Disclaimers & Limitation of Liability",
      content: [
        "The Services are offered on an “as is” and “as available” basis without any warranty of any type, either express or implied. We do not promise continuous, faultless, and absolutely safe functioning of the platform.",
        "Owners Inventory shall not be liable, to the fullest extent permitted by law, for business losses, lost profits, downtime, data inaccuracies, or problems related to third-party integrations.",
      ],
    },
    {
      title: "Indemnification",
      content: [
        "You agree to indemnify and hold harmless Owners Inventory, its affiliates, and representatives against any claims, liabilities, damages, or expenses incurred as a result of your misuse of the platform, breach of these Terms or infringement of third-party rights.",
        "This indemnification obligation survives termination of your account.",
      ],
    },
    {
      title: "Changes to Terms",
      content: [
        "These Terms may be revised by the Owners Inventory periodically. Where it is reasonable, material changes will be communicated.",
        "Your continued use of the Services after the updates take effect is an acceptance of the revised Terms.",
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let heroBreak = gsap.matchMedia();

    // Mobile
    heroBreak.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top top",
          end: "+=" + window.innerHeight * 1,
          trigger: ".pinned-section-1",
          scrub: 2,
        },
      });

      tl.to(".mobile-iventory", { width: "100%", duration: 1 }, 0);
      tl.to("header", { y: -30, duration: 1 }, 1);
    });

    // Tablet
    // heroBreak.add("(min-width: 768px) and (max-width: 1023px)", () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       scroller: "body",
    //       start: "top top",
    //       end: "+=" + window.innerHeight * 1,
    //       trigger: ".pinned-section-1",
    //       scrub: 2,
    //     },
    //   });

    //   tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0);
    //   tl.to(".inventory-menu", { width: "100%", duration: 1 }, 0);
    //   tl.to(".header-right-col", { x: "0%", duration: 1 }, 0);
    //   tl.to(".header-left-col", { x: "0%", duration: 1 }, 0);

    //   tl.to(".top-section", { autoAlpha: 0, duration: 1 }, 0);
    //   tl.to(".owner-inventory-hero", { y: -150, paddingLeft: 0, paddingRight: 0, duration: 1.5, ease: "power2.out" }, 0);
    //   tl.to(".owner-inventory-hero__content", { y: -800, duration: 2, ease: "power2.out" }, 1);
    //   tl.to(".owner-inventory-hero__video", { y: -100, duration: 2, ease: "power2.out" }, 1);
    // });

    // Desktop
    heroBreak.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "body",
          start: "top top",
          end: "+=" + window.innerHeight * 1,
          trigger: ".pinned-section-1",
          scrub: 2,
        },
      });

      tl.to("header", { y: -20, duration: 1.5, ease: "power2.out" }, 0);
      tl.to(".inventory-menu", { width: "100%", duration: 1 }, 0);
      tl.to(".header-right-col", { x: "0%", duration: 1 }, 0);
      tl.to(".header-left-col", { x: "0%", duration: 1 }, 0);

      tl.to(".top-section", { autoAlpha: 0, duration: 1 }, 0);
      tl.to(".owner-inventory-hero", { y: -150, paddingLeft: 0, paddingRight: 0, duration: 1.5, ease: "power2.out" }, 0);
      tl.to(".owner-inventory-hero__content", { y: -800, duration: 2, ease: "power2.out" }, 1);
      tl.to(".owner-inventory-hero__video", { y: -300, duration: 2, ease: "power2.out" }, 1);
    });

    return () => {
      heroBreak.revert(); 
    };
  }, []);

  return (
    <>
      <div className="pinned-section-1">
        <div className="md:h-6 h-8"></div>
      </div>

      <section className="mt-20 md:mt-28 lg:mt-40">
        <div className="wrapper">
          <h3 className="text-center text-4xl md:text-[40px] lg:text-5xl xl:text-[64px] leading-[48px] lg:leading-[60px] xl:leading-[76px] mb-5 lg:mb-6 xl:mb-10 font-['Onest'] font-semibold text-[#231F20]">
            Terms and Condition
          </h3>

          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            {TermAndConditionData.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h4 className="xl:text-2xl text-xl font-semibold text-[#231F20] font-['Onest'] mb-4">
                  {section.title}
                </h4>
                {section.content.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 font-['Onest'] font-normal text-[#231F20]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CalltoActionBottom />
    </>
  );
};

export default TermAndConditionPage;
