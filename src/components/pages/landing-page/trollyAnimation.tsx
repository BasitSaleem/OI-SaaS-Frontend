"use client";

import Image from "next/image";
import { useTrollyAnimation } from "@/hooks/useTrollyAnimation";


const TrollyAnimation = () => {
    const {
        containerRef,
        p1Ref,
        p2Ref,
        p3Ref,
        p4Ref,
        cartImgRef,
        mobileIconRef,
        starIconRef,
        cartsIconsRef,
        cartIcon1Ref,
        cartIcon2Ref,
        cartIcon3Ref,
        cartIcon4Ref,
        cartIcon5Ref,
        arrowRef,
        graphRef,
    } = useTrollyAnimation();


    return (
        <div
            ref={containerRef}
            className="w-full max-w-[358px] md:max-w-full relative grid grid-cols-2 mx-auto gap-0 gap-y-0 h-full"
        >

            <div className=" w-full min-h-[200px] lg:min-h-[290px] xl:min-h-[322px] rounded-tl-[20px] md:rounded-tl-[40px] relative bg-[#F3F4F6]">
                <p
                    ref={p1Ref}
                    className="text-[10px] lg:text-base xl:text-xl leading-[110%] font-medium font-['onest'] text-[var(--text-dark)] text-start absolute top-7 w-full max-w-[120px] lg:max-w-[200px] xl:max-w-[239px] left-6 xl:left-10 paragraph1"
                >
                    Sell online with built in, fully synced e-commerce
                </p>

                <Image
                    ref={cartImgRef}
                    src="/assets/home-page-images/trolly-animation/cart-image.webp"
                    alt="Smart sync and sell"
                    width={743}
                    height={460}
                    className="w-full max-w-[110px] lg:max-w-[200px] absolute bottom-7 right-8 xl:left-[72px] xl:top-24  h-auto cart-image"
                    priority
                />
            </div>

            <div className="w-full min-h-[200px] lg:min-h-[290px] rounded-tr-[20px] md:rounded-tr-[40px] xl:min-h-[322px] bg-[#795CF5] relative clip-path-rounded">
                <p
                    ref={p2Ref}
                    className="text-[10px] lg:text-base xl:text-xl leading-[110%] font-medium font-['onest'] text-white text-start absolute top-[42px] lg:top-24 w-full max-w-[110px] lg:max-w-[190px] xl:max-w-[220px] right-2.5 lg:left-6 xl:left-10 paragraph2"
                >
                    Smart POS system for modern retail
                </p>

                <Image
                    ref={mobileIconRef}
                    src="/assets/home-page-images/trolly-animation/mobile-icon.svg"
                    alt="Smart sync and sell"
                    width={743}
                    height={460}
                    className="w-[22px] h-[22px] lg:w-9 lg:h-9 xl:w-[50px] xl:h-[50px] object-contain absolute right-2.5 lg:right-[22px] top-[70px] lg:top-[154px] mobile-icon"
                />
            </div>
            <div className="w-full min-h-[200px] lg:min-h-[290px] rounded-bl-[20px] md:rounded-bl-[40px] xl:min-h-[322px] bg-[#231F20] clip-path-rounded2">
                <div className="flex flex-col items-start justify-start gap-4 lg:gap-7 absolute left-6 xl:left-10 bottom-[30px]">
                    <Image
                        ref={starIconRef}
                        src="/assets/home-page-images/trolly-animation/star-icon.svg"
                        alt="Smart sync and sell"
                        width={743}
                        height={460}
                        className="w-8 h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14 star-icon"
                    />

                    <p
                        ref={p3Ref}
                        className="text-[10px] lg:text-base xl:text-xl leading-[100%] font-medium font-['onest'] text-white text-start w-full max-w-[110px] lg:max-w-[190px] xl:max-w-[220px] paragraph3"
                    >
                        Inventory management to stay in control of every product
                    </p>

                    <div
                        ref={cartsIconsRef}
                        className="flex items-center justify-start carts-icons"
                    >
                        <Image
                            ref={cartIcon1Ref}
                            src="/assets/home-page-images/trolly-animation/trolly-icon1.svg"
                            alt="Smart sync and sell"
                            width={743}
                            height={460}
                            className="w-[26px] h-[26px] lg:w-10 lg:h-10 xl:w-14 xl:h-14 cart-icon1"
                        />
                        <Image
                            ref={cartIcon2Ref}
                            src="/assets/home-page-images/trolly-animation/trolly-icon2.svg"
                            alt="Smart sync and sell"
                            width={743}
                            height={460}
                            className="w-[26px] h-[26px] lg:w-10 lg:h-10 xl:w-14 xl:h-14 cart-icon2"
                        />
                        <Image
                            ref={cartIcon3Ref}
                            src="/assets/home-page-images/trolly-animation/trolly-icon3.svg"
                            alt="Smart sync and sell"
                            width={743}
                            height={460}
                            className="w-[26px] h-[26px] lg:w-10 lg:h-10 xl:w-14 xl:h-14 cart-icon3"
                        />
                        <Image
                            ref={cartIcon4Ref}
                            src="/assets/home-page-images/trolly-animation/trolly-icon4.svg"
                            alt="Smart sync and sell"
                            width={743}
                            height={460}
                            className="w-[26px] h-[26px] lg:w-10 lg:h-10 xl:w-14 xl:h-14 cart-icon4"
                        />
                        <Image
                            ref={cartIcon5Ref}
                            src="/assets/home-page-images/trolly-animation/trolly-icon5.svg"
                            alt="Smart sync and sell"
                            width={743}
                            height={460}
                            className="w-[26px] h-[26px] lg:w-10 lg:h-10 xl:w-14 xl:h-14 cart-icon5"
                        />
                    </div>
                </div>
            </div>
            <div className=" w-full min-h-[200px] lg:min-h-[290px] xl:min-h-[322px] relative bg-[#F3F4F6] rounded-br-[20px] md:rounded-br-[40px]">
                <div className="flex flex-col items-end justify-end gap-1.5 lg:gap-3 absolute right-6 xl:right-10 bottom-4 lg:bottom-[30px]">
                    <Image
                        ref={arrowRef}
                        src="/assets/home-page-images/trolly-animation/arrow-up-icon.svg"
                        alt="Smart sync and sell"
                        width={743}
                        height={460}
                        className="w-[26px] h-5 mb-3 arrow-icon"
                    />

                    <p
                        ref={p4Ref}
                        className="text-[10px] lg:text-base xl:text-xl leading-[100%] font-medium font-['onest'] text-[var(--text-dark)] text-start w-full max-w-[110px] lg:max-w-[190px] xl:max-w-[220px] paragraph4"
                    >
                        Inventory management to stay in control of every product
                    </p>

                    <Image
                        ref={graphRef}
                        src="/assets/home-page-images/trolly-animation/graph-line.svg"
                        alt="Smart sync and sell"
                        width={743}
                        height={460}
                        className="w-full max-w-[108px] lg:max-w-[190px] xl:max-w-[242px] h-14 lg:h-[100px] xl:h-[120px] graph-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default TrollyAnimation;
