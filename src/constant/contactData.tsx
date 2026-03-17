import PhilosophyIcons from "@/components/icons/philosophyIcons";
import { Mail, Phone, MapPin } from "lucide-react";

export const CONTACT_HERO_CONTENT = {
  title: "Contact Us",
  description: "We’re here to help! You can contact us with a question, support, or simply to get to know more about our products, and we are only a message away.",
  variant: "animation2" as const,
};

export const CONTACT_METHODS = [
    {
        id: "contact-email",
        title: "Email Us",
        description: "Our team is here to help with any inquiries or support needs.",
        contact: "support@ownersinventory.com",
        icon: <Mail className="w-6 h-6" />,
        link: "mailto:support@ownersinventory.com"
    },
    {
        id: "contact-phone",
        title: "Call Us",
        description: "Mon-Fri from 9am to 6pm for immediate assistance.",
        contact: "+1 (555) 000-0000",
        icon: <Phone className="w-6 h-6" />,
        link: "tel:+15550000000"
    },
    {
        id: "contact-office",
        title: "Visit Us",
        description: "Visit our headquarters or drop by for a coffee.",
        contact: "123 Business Ave, Tech City, TC 12345",
        icon: <MapPin className="w-6 h-6" />,
        link: "https://maps.google.com"
    }
];

export const CONTACT_CARDS = [
  {
    icon: <PhilosophyIcons name="emailSupport" size={48} />,
    title: "Email Support",
    description: "support@ownersinventory.com",
    url: "mailto:support@ownersinventory.com",
  },
  {
    icon: <PhilosophyIcons name="locationIcon" size={48} />,
    title: "Visit Us",
    description: "4254 Normandy Ct, Fredericksburg, VA 22408, United States",
    url: "https://www.google.com/maps/search/?api=1&query=4254+Normandy+Ct,+Fredericksburg,+VA+22408,+United+States",
  },
];

export const CONTACT_SUPPORT_CARDS = [
  {
    iconName: "helpCenter",
    icon2: "/assets/about-us/arrow-link.svg",
    title: "Privacy Policy",
    description: "Data Protection Guidelines",
    url: "/privacy-policy",
  },
  {
    iconName: "documentation",
    icon2: "/assets/about-us/arrow-link.svg",
    title: "Terms & Conditions",
    description: "User Agreement Terms",
    url: "/terms-and-conditions",
  },
];
