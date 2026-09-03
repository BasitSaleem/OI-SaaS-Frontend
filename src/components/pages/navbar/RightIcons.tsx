import Image from "next/image";
import Tooltip from "@/components/toolTip/Tooltip";
import Link from "next/link";
import { getPackageLink } from "@/utils/getPackageLink";

type RightIconsProps = {
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const RightIcons: React.FC<RightIconsProps> = ({
  searchOpen,
  setSearchOpen,
  setSearchQuery,
}) => {
  return (
    <div className="header-right-col hidden lg:flex justify-end items-center gap-1.5 xl:gap-4 lg:gap-[6px] ps-1 md:absolute right-2 z-50" style={{ opacity: 0, transform: "translateY(-150px)" }}>
      {/* Search icon hidden from the header — the /search route, SearchField
          component, and this trigger's wiring (searchOpen/setSearchOpen)
          are intentionally left in place, just not rendered. */}

      {/* User Icon */}
      <div className="relative group">
        <Link href={getPackageLink("login")} aria-label="Log in to your account">
          <Image
            src="https://d2qlv5xtew5ayb.cloudfront.net/assets/header-images/user.svg"
            alt="User"
            width={16}
            height={16}
          />
        </Link>
        <Tooltip text="Login" />

        {/* <div className="absolute left-[50%] -translate-x-[50%] top-[120%] z-[999] hidden group-hover:flex flex-col items-left">
          <div className="w-2 h-2 rotate-45 bg-white border-l border-t border-[var(--primary-purple)] -mb-1 mx-auto"></div>
          <div className="rounded-xl border border-[var(--primary-purple)] bg-white px-4 py-2 text-sm leading-4 font-['Onest'] font-semibold text-[var(--text-dark)] shadow-lg w-fit">
            Login
          </div>
        </div> */}
      </div>

      <Link
        href={getPackageLink("signup")}
        className="px-3.5 py-1.5 xl:px-[18px] xl:py-[9px] md:text-[10px] xl:text-sm font-bold font-['Onest'] text-white bg-[var(--text-dark)] rounded-full border hover:bg-white hover:text-[var(--text-dark)] hover:border-[var(--text-dark)] transition-all whitespace-nowrap"
      >
        Start for Free
      </Link>
    </div>
  );
};

export default RightIcons;
