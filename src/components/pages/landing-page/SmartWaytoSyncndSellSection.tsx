"use client";

import { useState } from "react";
import ButtonSm from "@/components/button/ButtonSm";
import MainHeading from "../typography/MainHeading";
import ContactModal from "@/components/models/ContactModal";
import TrollyAnimation from "./trollyAnimation";



function SmartWaytoSyncndSellSection() {
  const [openModal, setOpenModal] = useState(false);


  return (
    <div className="w-full smart-way-section">
      <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      <section className="wrapper lg:pt-[100px] md:pt-20 pt-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-10 xl:gap-12 items-center justify-center w-full">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center">
            <MainHeading className=" mb-0 md:mb-10 lg:mb-[50px]">
              Modern Features Designed for Real Owners and Real Growth
            </MainHeading>

            <div className="hidden md:flex gap-4 w-full items-center justify-start">
              <ButtonSm
                url="https://app.ownersinventory.com/"
                text="Book a Free Demo"
                bgColor="var(--primary-teal)"
                textColor="white"
                isBorder
                paddingLg="xl:px-[64px] lg:px-[40px] lg:py-5"
              />
              <ButtonSm
                url="#"
                text="Contact Sales"
                bgColor="var(--primary-purple)"
                textColor="white"
                isBorder
                paddingLg="xl:px-[64px] lg:px-[40px] lg:py-5"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>

          <TrollyAnimation />

          <div className="md:hidden flex gap-4 w-full items-center justify-start">
            <ButtonSm
              url="https://app.ownersinventory.com/"
              text="Book a Free Demo"
              bgColor="var(--primary-teal)"
              textColor="white"
              isBorder
              paddingLg="lg:px-[64px] lg:py-5"
              className="w-full"
            />
            <ButtonSm
              url="#"
              text="Contact Sales"
              bgColor="var(--primary-purple)"
              textColor="white"
              isBorder
              paddingLg="lg:px-[64px] lg:py-5"
              className="w-full"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmartWaytoSyncndSellSection;
