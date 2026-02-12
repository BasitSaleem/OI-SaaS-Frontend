import PhilosophyIcons from "@/components/icons/philosophyIcons";

export const CONTACT_HERO_CONTENT = {
  title: "Contact Us",
  description: "We’re here to help! You can contact us with a question, support, or simply to get to know more about our products, and we are only a message away.",
  variant: "animation2" as const,
};

export const CONTACT_CARDS = [
  {
    icon: <PhilosophyIcons name="emailSupport" size={48} />,
    title: "Email Support",
    description: "support@ownersinventory.com",
  },
  {
    icon: <PhilosophyIcons name="locationIcon" size={48} />,
    title: "Visit Us",
    description: "4254 Normandy Ct, Fredericksburg, VA 22408, United States",
  },
];

export const CONTACT_SUPPORT_CARDS = [
  {
    icon: <PhilosophyIcons name="helpCenter" size={40} />,
    icon2: "/assets/about-us/arrow-link.svg",
    title: "Privacy Policy",
    description: "Data Protection Guidelines",
    url: "/privacy-policy",
  },
  {
    icon: <PhilosophyIcons name="documentation" size={40} />,
    icon2: "/assets/about-us/arrow-link.svg",
    title: "Terms & Conditions",
    description: "User Agreement Terms",
    url: "/terms-and-conditions",
  },
];
