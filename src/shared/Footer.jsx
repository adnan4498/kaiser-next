import Image from "next/image";
import React from "react";
import footerImg from "../../public/footer-img.svg";

const Footer = () => {
  return (
    <div className="2xl:pt-[121px] 3xl:pt-[140px] pb-[23px]">
      <div className="2xl:flex 3xl:justify-between gap-[286px] 3xl:gap-[340px]">
        <div className="2xl:flex gap-[83px] 3xl:gap-[96px] 2xl:text-[16px] 3xl:text-[19px] 2xl:tracking-tight">
          <div className="2xl:flex 2xl:flex-col gap-2">
            <div>Home</div>
            <div>Works</div>
            <div>Testimonials</div>
            <div>Store</div>
            <div>How To</div>
          </div>

          <div className="2xl:flex 2xl:flex-col gap-2">
            <div>Home</div>
            <div>Works</div>
            <div>Testimonials</div>
            <div>Store</div>
            <div>How To</div>
            <div>Home</div>
            <div>Works</div>
            <div>Testimonials</div>
            <div>Store</div>
            <div>How To</div>
          </div>

          <div className="2xl:flex 2xl:flex-col gap-2">
            <div>Home</div>
            <div>Works</div>
            <div>Testimonials</div>
            <div>Store</div>
            <div>How To</div>
            <div>Home</div>
            <div>Works</div>
            <div>Testimonials</div>
            <div>Store</div>
            <div>How To</div>
          </div>
        </div>

        <div>
          <Image src={footerImg} width={614} height={403} className="2xl:w-[614px] 3xl:w-[820px] 3xl:h-auto" alt="Footer Graphic" />
        </div>
      </div>

      <div className="2xl:mt-[72px] 3xl:mt-[90px] 2xl:flex items-center justify-between ">
        <div className="text-[32px] 3xl:text-[36px] !text-[#E6E6E6]">KAISER DESIGN</div>
        <div className="2xl:flex 2xl:items-center gap-[220px] 3xl:gap-[400px]">
          <div className="!text-[#FFF] 2xl:text-[15px] 3xl:text-[17px] 2xl:leading-[15px] 3xl:leading-[17px]">
            © 2025 Your Brand. All rights reserved.
          </div>

          <div>
            {/* SVG remains unchanged */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="121"
              height="28"
              viewBox="0 0 121 28"
              fill="none"
            >
              {/* SVG paths */}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;