import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CardItem } from "./SupportCard";

interface ContactConnectCardProps {
  card: CardItem;
}

const ContactConnectCard = ({ card }: ContactConnectCardProps) => (
  <div
    className="p-[1px] rounded-[20px]"
    style={{
      background:
        "linear-gradient(90deg, #1AD1B9 32.74%, #38ACCC 52.46%, #5588DF 76.39%, #795CF5 100%)",
    }}
  >
    <div className="bg-white rounded-[20px] transition-all duration-300 ease-in-out flex items-start justify-start gap-5 px-5 py-4 md:px-6 md:py-5 h-full w-full">
      <div className="h-10 w-10">
        {typeof card.icon === "string" ||
          (card.icon &&
            typeof card.icon === "object" &&
            "src" in card.icon) ? (
          <Image
            src={card.icon as string | StaticImageData}
            alt={card.title}
            width={40}
            height={40}
            className="h-10 w-10"
          />
        ) : (
          <div className="h-10 w-10 flex items-center justify-center">
            {card.icon as ReactNode}
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <h3 className="font-medium text-[var(--text-grey)] font-['Onest'] text-sm leading-[160%]">
          {card.title}
        </h3>
        <Link
          href={card.url || "#"}
          target={card.url?.startsWith("http") ? "_blank" : undefined}
          className="text-sm md:text-lg leading-[140%] font-medium font-['Onest'] text-[var(--text-dark)] hover:text-[var(--primary-purple)] transition-colors duration-300"
        >
          {card.description}
        </Link>
      </div>
    </div>
  </div>
);

export default ContactConnectCard;
