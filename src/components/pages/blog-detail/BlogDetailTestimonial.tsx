import React from "react";
import Image from "next/image";
import { BlogAuthorQuote } from "@/constant/blogData/blogData";

interface BlogDetailTestimonialProps {
  testimonial: BlogAuthorQuote;
}

const BlogDetailTestimonial: React.FC<BlogDetailTestimonialProps> = ({ testimonial }) => (
  <div
    className="industriestest-gradient-shadow-right w-full py-[80px] lg:py-[100px] rounded-t-[40px] mt-[90px] lg:mt-[130px]"
    style={{ background: "#ffffff" }}
  >
    <section className="wrapper">
      <div className="flex flex-col items-center gap-6 mb-10">
        <p className="text-xs font-semibold font-['Onest'] text-[#999] uppercase tracking-widest">
          What Our Readers Say
        </p>
        <h2 className="text-center lg:text-[40px] md:text-[32px] text-[26px] font-semibold font-['Onest'] text-[#231F20] leading-tight max-w-2xl">
          Real results from real businesses
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.05)] rounded-[30px] p-6 md:p-8 flex flex-col gap-6 relative">
          <Image
            src="/assets/review-section/double-coma-icon.svg"
            alt="Quote"
            width={26}
            height={26}
            className="absolute top-6 right-6"
            style={{ width: "auto", height: "auto" }}
          />

          <p className="text-base md:text-lg leading-[1.7] font-['Onest'] text-[#444]">
            {testimonial.text}
          </p>

          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 p-[2px]"
              style={{ borderColor: "#795CF5" }}
            >
              <Image
                src={testimonial.authorAvatar ?? "/assets/blog-images/first-blog.webp"}
                alt={testimonial.author}
                width={56}
                height={56}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div>
              <p className="font-semibold text-lg font-['Onest'] text-[#231F20]">
                {testimonial.author}
              </p>
              <p className="font-medium font-['Onest'] text-[#795CF5]">
                {testimonial.authorTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default BlogDetailTestimonial;
