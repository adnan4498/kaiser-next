"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import craftingImg from "../../public/crafting-img.svg";
import customerServingIcon from "../../public/customer-service-icon.svg";
import inovationIcon from "../../public/inovation-icon.svg";
import sustainIcon from "../../public/sustain-icon.svg";
import qualityIcon from "../../public/quality-icon.svg";
import rightUpVector from "../../public/upper-right-vector.svg";
import circleIcon from "../../public/crafting-circle-icon.svg";
import gsap from "gsap";

const CraftingSection = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const arrowDivRef = useRef(null);
  const arrowRef = useRef(null);

  const kesarMarquee1 = useRef();
  const kesarMarquee2 = useRef();

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const arrowDiv = arrowDivRef.current;
    const arrow = arrowRef.current;

    const kesarMarquee1El = kesarMarquee1.current;
    const kesarMarquee2El = kesarMarquee2.current;

    // Get the width of the text element
    const kesarTextWidth1 = kesarMarquee1El.offsetWidth;
    const kesarContainerWidth1 = kesarMarquee1El.parentElement.offsetWidth;

    gsap.fromTo(
      kesarMarquee1El,
      { x: kesarContainerWidth1 }, // start off-screen right
      {
        x: -kesarTextWidth1, // scroll all the way left
        duration: 50,
        ease: "none",
        repeat: -1,
      }
    );

    // Get the width of the 2nd text element
    const kesarTextWidth2 = kesarMarquee2El.offsetWidth;
    const kesarContainerWidth2 = kesarMarquee2El.parentElement.offsetWidth;

    gsap.fromTo(
      kesarMarquee2El,
      { x: kesarContainerWidth2 }, // start completely hidden to the left
      {
        x: -kesarTextWidth2, // scroll all the way to the right
        duration: 50,
        ease: "none",
        repeat: -1,
      }
    );

    const handleEnter = () => {
      gsap.fromTo(
        text,
        { color: "white" },
        { color: "black", duration: 0.3, ease: "none" }
      );

      gsap.fromTo(
        arrowDiv,
        { width: 57 },
        { width: 250, duration: 0.3, ease: "none" }
      );

      gsap.fromTo(arrow, { rotate: 0 }, { rotate: 49, duration: 0.4 });
    };

    const handleLeave = () => {
      gsap.fromTo(
        text,
        { color: "black" },
        { color: "white", duration: 0.3, ease: "none" }
      );

      gsap.fromTo(
        arrowDiv,
        { width: 250 },
        { width: 57, duration: 0.5, ease: "none" }
      );

      gsap.fromTo(arrow, { rotate: 49 }, { rotate: 0, duration: 0.4 });
    };

    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);

    return () => {
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="2xl:pt-[164px] ">
      <div className="2xl:flex 2xl:gap-[66px]">
        {/* <div className="bg-white pt-[16px] pl-[16px] inline-block"> */}
        <div className="border-t-[16px] border-l-[16px] border-[#D9D9D9] inline-block 2xl:h-[880]">
          <Image src={craftingImg} width={642} height={863} />
        </div>

        <div>
          <div className="2xl:text-[20px]">About Us</div>
          <div className="2xl:w-[551px] 2xl:h-[192px] 2xl:text-[64px] 2xl:leading-[64px] 2xl:tracking-tighter 2xl:mt-[23px]">
            CRAFTING TIMELESS FURNITURE AND INTERIOR DESIGNS
          </div>
          <div className="2xl:text-[16px] 2xl:leading-[16px] 2xl:w-[376px] 2xl:mt-[54px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </div>

          <div className="2xl:mt-[139px]">
            <div className="2xl:flex gap-[54px]">
              <div className="flex gap-[20px] items-center">
                <div>
                  <Image src={qualityIcon} width={41} height={33} />
                </div>
                <div className="2xl:text-[16px]">Quality Craftsmanship</div>
              </div>

              <div className="flex gap-[20px] items-center">
                <div>
                  <Image src={sustainIcon} width={41} height={33} />
                </div>
                <div className="2xl:text-[16px]">Sustainability</div>
              </div>
            </div>

            <div className="flex gap-[54px] 2xl:mt-[54px]">
              <div className="flex gap-[20px] items-center">
                <div>
                  <Image src={inovationIcon} width={41} height={33} />
                </div>
                <div className="2xl:text-[16px]">Innovation & Creativity</div>
              </div>

              <div className="flex gap-[20px] items-center">
                <div>
                  <Image src={customerServingIcon} width={41} height={33} />
                </div>
                <div className="2xl:text-[16px]">Customer-Centered</div>
              </div>
            </div>
          </div>

          <div className="2xl:mt-[99px] 2xl:w-[493px] 2xl:h-[146px] 2xl:flex gap-[146px] 2xl:relative justify-center items-center">
            <div className=" 2xl:w-[210px] 2xl:h-[60px] relative">
              <div
                ref={buttonRef}
                className="flex overflow-hidden border-2 border-white 2xl:rounded-[10px] relative cursor-pointer"
              >
                <div className="bg-transparent 2xl:w-[151px] 2xl:h-[56px] flex items-center justify-center">
                  <span
                    ref={textRef}
                    className="text-white 2xl:text-[16px] font-medium z-30"
                  >
                    Learn More
                  </span>
                </div>

                <div
                  ref={arrowDivRef}
                  className="bg-white h-[56px] absolute right-0 z-10 rounded-l-[10px] overflow-hidden"
                  style={{ width: "57px" }}
                >
                  <div className="absolute right-[18px] h-full flex items-center justify-center pointer-events-none">
                    <Image
                      ref={arrowRef}
                      src={rightUpVector}
                      width={20}
                      height={23}
                      alt="Arrow Icon"
                      className="static-arrow z-40"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <Image src={circleIcon} width={146} height={146} />
            </div>
          </div>

          <div className="2xl:relative">
            <div className="2xl:absolute 2xl:top-[-400px] 2xl:left-[-450px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="766"
                height="766"
                viewBox="0 0 766 766"
                fill="none"
              >
                <g filter="url(#filter0_f_300_659)">
                  <circle cx="383" cy="383" r="83" fill="white" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_300_659"
                    x="0"
                    y="0"
                    width="766"
                    height="766"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="150"
                      result="effect1_foregroundBlur_300_659"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* <div className=" 2xl:w-[110%] 2xl:h-[150px] 2xl:absolute 2xl:right-[0px] 2xl:top-[50px]"> */}
        <div className="">
          <div className="overflow-hidden bg-black py-2 2xl:my-[120px] rotate-[-3.4deg] 2xl:w-[120%] 2xl:relative 2xl:left-[-100px] 2xl:top-[-40px]">
            <div
              className="w-fit whitespace-nowrap 2xl:text-[51px] italic text-white"
              ref={kesarMarquee1}
            >
              JOIN THE KESAR DESIGN • JOIN THE KESAR DESIGN • JOIN THE KESAR
              DESIGN • JOIN THE KESAR DESIGN • JOIN THE KESAR DESIGN • JOIN THE
              KESAR DESIGN • JOIN THE KESAR DESIGN • JOIN THE KESAR DESIGN •
              JOIN THE KESAR DESIGN • JOIN THE KESAR DESIGN • JOIN THE KESAR
              DESIGN • JOIN THE KESAR DESIGN • JOIN THE KESAR DESIGN • JOIN THE
              KESAR DESIGN • JOIN THE KESAR DESIGN •
            </div>
          </div>

          <div className="overflow-hidden bg-black py-2 2xl:my-[120px] rotate-[9.5deg] 2xl:w-[120%] 2xl:relative 2xl:left-[-100px] 2xl:top-[-170px]">
            <div
              className="w-fit whitespace-nowrap 2xl:text-[51px] italic text-white"
              ref={kesarMarquee2}
            >
              JOIN THE KESAR DESIGN • JOIN THE KESAR DESIGN • JOIN THE KESAR
              DESIGN • JOIN THE KESAR DESIGN • JOIN THE KESAR DESIGN • JOIN THE
              KESAR DESIGN • JOIN THE KESAR DESIGN • JOIN THE KESAR DESIGN •
              JOIN THE KESAR DESIGN • JOIN THE KESAR DESIGN • JOIN THE KESAR
              DESIGN • JOIN THE KESAR DESIGN • JOIN THE KESAR DESIGN • JOIN THE
              KESAR DESIGN • JOIN THE KESAR DESIGN •
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftingSection;

//  <div className="2xl:mt-[99px] 2xl:w-[493px] 2xl:h-[146px] 2xl:flex gap-[146px] justify-center items-center">
//           <div className=" 2xl:w-[210px] 2xl:h-[60px]">
//             <div className="flex overflow-hidden border-2 border-white 2xl:rounded-[10px]">
//               <div className="bg-transparent 2xl:w-[151px] 2xl:h-[56px] flex items-center justify-center">
//                 <span className="text-white 2xl:text-[16px] font-medium">
//                   Learn More
//                 </span>
//               </div>

//               <div className="!bg-white 2xl:w-[57px] 2xl:h-[56px] flex items-center justify-center rounded-l-[10px]">
//                 <Image
//                   ref={arrowRef}
//                   src={rightUpVector}
//                   width={20}
//                   height={23}
//                   alt="Arrow Icon"
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <Image src={circleIcon} width={146} height={146} />
//           </div>
//         </div>
