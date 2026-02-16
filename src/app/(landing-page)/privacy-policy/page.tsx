
"use client"; 

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CalltoActionBottom from "@/components/pages/landing-page/CalltoActionBottom";
import MainHeading from "@/components/pages/typography/MainHeading";
import SubHeading from "@/components/pages/typography/SubHeading";
import Paragraph from "@/components/pages/typography/Paragraph";

const PrivacyPolicyPage = () => {
   const privacyPolicyData = [
    {
      partTitle: "Part I: Information We Collect and Control",
      sections: [
        {
          title: "Information You Provide Actively",
          content: [
            "You can provide us with information voluntarily. It includes information about your account, such as name, email, phone, company, and password.",
            "We collect data from other interactions, such as contact forms, survey requests, registrations for events, or demo requests. Payments made through our Services are handled securely by third-party gateways. No full card numbers are stored by us.",
            "We may also collect any testimonials, reviews or feedback that you provide voluntarily. For service improvements, we may collect and store customer support communications such as emails, messages or other interactions.",
          ],
        },
        {
          title: "The Information That We Automatically Collect",
          content: [
            "We automatically collect technical information and usage data when you use or access our services.",
            "These include logs and device data, such as IP addresses, browser types, operating systems, device identifiers and timestamps. Cookies and tracking technologies are also used, such as session cookies, analytics and preference cookies. We use these technologies to improve the performance of our platform and analyse usage patterns in order to provide a better user experience.",
            "This data may include clicks and errors, as well as usage data. We use this information to improve the platform and monitor its performance.",
          ],
        },
        {
          title: "The Information We Receive From Third Parties",
          content: [
            "Information may be received from third parties that we trust. You may choose to use social login services such as Google, LinkedIn or Facebook.",
            "You may provide us with information through referral programs, partners in marketing, reselling, or public sources, such as review sites, social media, and other platforms. We also collect data from third party integrations, which you connect to the Services.",
          ],
        },
         {
          title: "What We Do With Your Information",
          content: [
            "Our Services are operated and maintained using the collected data. It includes managing and creating user accounts, processing subscriptions and payments, and communicating with you about support, service updates or marketing messages, where allowed by law.",
            "Your information is also used to improve platform performance, user experience, perform analytics, research, create new features, maintain security, avoid fraud and meet legal requirements.",
          ],
        },
        {
          title: "Legal Basis for Processing (GDPR / EEA Users)",
          content: [
            "We process the personal data of users in the European Economic Area. When necessary, we may use your data in order to fulfill a contract or to provide the services you have requested. To improve the platform's security functionality, we may use legitimate interest. You may be asked to consent to marketing or cookies. We may also process your personal data in order to comply with regulatory and legal requirements.",
          ],
        },
        {
          title: "Your Choices & Rights",
          content: [
            "You own your data and have full control. Unsubscribing from marketing messages is possible at any moment. Cookies can be managed through the browser's settings. You have the right, where applicable, to request access to your personal data and to request any corrections or deletions. You can withdraw consent to processing if it is done on the basis of consent.",
          ],
        },
         {
          title: "Sharing and Disclosure of Information",
          content: [
            "Your personal information is never sold. If applicable, we may also share your information with other members of our corporate family, as well with service providers you trust, such as cloud infrastructure providers, email service providers, hosting providers and payment processors. They are bound by strict confidentiality agreements.",
            "You may authorize us to share your information with other third parties, such as resellers and integrations. Information may also be shared with legal authorities if required to do so by law, to protect property, rights or safety. Your information could be shared as part of an asset sale, merger or acquisition.",
          ],
        },
        {
          title: "Data Retention",
          content: [
            "Our retention of personal data is limited to the time necessary for us to meet our stated purposes, which includes meeting all legal, regulatory, and accounting requirements. Once personal data is no longer required, they are securely removed or anonymized.",
          ],
        },
      ],
    },
    {
      partTitle: "Part II: Information We Process on Your Behalf",
      sections: [
        {
          title: `Definition of the Term "Service Data"`,
          content: [
            "Service Data is all the data you store or upload through our services. Included are inventory records, documents and files as well as customer data, employee information, and other information.",
          ],
        },
        {
          title: "What is Your Role & Ownership?",
          content: [
            "Ownership and control over your Service Data remains with you. Owners Inventory is a data processor and only processes Service Data according to your instructions and the applicable laws.",
          ],
        },
        {
          title: "What We Do With Service Data",
          content: [
            "Only authorized personnel can access Service Data. To protect this data, we implement the appropriate organizational and technical security measures. Sub-processors that meet our standards of security are engaged. Integrations with third-parties can only be enabled upon request.",
          ],
        },
        {
          title: "Retention and Deletion of Service Data",
          content: [
            "While your account is active, Service Data will be retained. After account cancellation, Service Data will be deleted within a reasonable period of time. Our retention schedules dictate how backup data will be securely deleted.",
          ],
        },
        {
          title: "Data Subject Requests for Service Data",
          content: [
            "In case a person whose information is stored in your Service Data makes a request (e.g., access or deletion), he/she is to contact you, being the data controller.",
          ],
        },
      ],
    },
    {
      partTitle: "Part III: GENERAL REQUIREMENTS",
      sections: [
        {
          title: "Children's Privacy",
          content: [
            "No one under 16 is targeted by our services. Children's personal data is not knowingly collected by us. We will delete any such information as soon as it is found.",
          ],
        },
        {
          title: "Data Security",
          content: [
            "To protect your data, we use industry-standard security measures including rest encryption, restricted access control, safe cloud infrastructure, frequent surveillance and risk evaluation.",
          ],
        },
         {
          title: "International Data Transfers",
          content: [
            "When you use our Services outside of your country, your data can be transferred across the borders. Your data is safeguarded by using proper protective measures, including Standard Contractual Clauses.",
          ],
        },
        {
          title: "Automation & AI",
          content: [
            "Automation or AI-assisted tools can be used to enhance efficiency and the quality of services. These systems are privacy-protected, such as anonymization where necessary.",
          ],
        },
         {
          title: "Third-Party Links & Public Forums",
          content: [
            "Our Services can include links to third-party websites or open forums (blogs, communities). The privacy of third-party websites and information that you post publicly is not our responsibility.",
          ],
        },
        {
          title: "Do Not Track (DNT)",
          content: [
            "Our Services are currently not responsive to browser Do Not Track signals.",
          ],
        },
         {
          title: "Changes to This Privacy Policy.",
          content: [
            "We can revise this Privacy Policy on a regular basis. Our site or email will be used to communicate material changes. The further use of our Services is the acceptance of the new policy.",
          ],
        },
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
          <h1 className="text-center text-4xl md:text-[40px] lg:text-5xl xl:text-[64px] leading-[48px] lg:leading-[60px] xl:leading-[76px] mb-5 lg:mb-6 xl:mb-10 font-['Onest'] font-semibold text-[#231F20]">
            Privacy Policy
          </h1>

          <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
            {privacyPolicyData.map((part, pIndex) => (
              <div key={pIndex} className="flex flex-col gap-6 md:gap-8 border-b border-gray-200 pb-10 last:border-0 last:pb-0">
                <SubHeading className="uppercase">
                  {part.partTitle}
                </SubHeading>
                
                <div className="flex flex-col gap-8 lg:gap-10">
                  {part.sections.map((section, sIndex) => (
                    <div key={sIndex} className="flex flex-col">
                      <h3 className="xl:text-2xl text-xl font-semibold text-[#231F20] font-['Onest'] mb-4">
                        {section.title}
                      </h3>
                      {section.content.map((para, idx) => (
                        <Paragraph
                          key={idx}
                          className="text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-9 font-['Onest'] font-normal text-[#231F20] mb-4 last:mb-0"
                        >
                          {para}
                        </Paragraph>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CalltoActionBottom />
    </>
  );
};

export default PrivacyPolicyPage;
