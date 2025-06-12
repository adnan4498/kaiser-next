// import Image from "next/image";
// import React from "react";
// import rightUpVector from "../../public/upper-right-vector.svg";

// const HeroSection = () => {
//   return (
//     <>
//       <div className="hero-section 2xl:pt-[100px]">
//         <div className="2xl:text-[128px] 2xl:leading-[128px] 2xl:tracking-tighter">
//           CRAFTING <br /> BEAUTIFUL
//         </div>
//         {/* <div className="flex 2xl:mt-[61px]">
//           <div className="2xl:w-[151px] 2xl:h-[60px] border-2 border-white 2xl:rounded-[10px] flex items-center">
//             <div className="2xl:text-[16px]">View Portfolio</div>
//           </div>
//           <div className="bg-white 2xl:w-[57px] 2xl:h-[58px] 2xl:rounded-[10px] flex justify-center items-center">
//             <div>
//               <Image src={rightUpVector} width={20} height={23} />
//             </div>
//           </div>
//         </div> */}

//         <div className="2xl:mt-[61px] 2xl:w-[210px] 2xl:h-[60px]">
//           <div className="flex overflow-hidden border-2 border-white 2xl:rounded-[10px]">
//             <div className="bg-transparent 2xl:w-[151px] 2xl:h-[56px] flex items-center justify-center">
//               <span className="text-white 2xl:text-[16px] font-medium">
//                 View Portfolio
//               </span>
//             </div>

//             <div className="bg-white 2xl:w-[57px] 2xl:h-[56px] flex items-center justify-center rounded-l-[10px]">
//               <Image
//                 src={rightUpVector}
//                 width={20}
//                 height={23}
//                 alt="Arrow Icon"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="2xl:mt-[210px] flex justify-between">
//           <div className="">
//             <div>
//               <div className="2xl:text-[20px] 2xl:w-[296px] 2xl:leading-[20px] font-[600px]">
//                 Crafting Beautiful, Personalized <br /> Spaces Just for You
//               </div>
//               <div className="2xl:w-[378px] 2xl:text-[16px] 2xl:mt-[23px] 2xl:leading-[16px]">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam,`
//               </div>
//             </div>
//           </div>

//           <div className="text-[128px] 2xl:top-[-150px] 2xl:relative 2xl:tracking-tighter 2xl:leading-[128px]">
//             <div className="text-end">JUST</div>
//             <div>FOR YOU</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;

"use client";
import Image from "next/image";
import React from "react";
import rightUpVector from "../../public/upper-right-vector.svg";
import scrollWheelImg from "../../public/heroSectionWheel.svg";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const arrowDivRef = useRef(null);
  const arrowRef = useRef(null);
  const wheelRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const arrowDiv = arrowDivRef.current;
    const arrow = arrowRef.current;

    gsap.to(wheelRef.current, {
      rotate: -360,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });

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
    <>
      <div className="hero-section 2xl:pt-[100px]">
        <div className="2xl:text-[128px] 2xl:leading-[128px] 2xl:tracking-tighter">
          CRAFTING <br /> BEAUTIFUL
        </div>
        {/* <div className="flex 2xl:mt-[61px]">
          <div className="2xl:w-[151px] 2xl:h-[60px] border-2 border-white 2xl:rounded-[10px] flex items-center">
            <div className="2xl:text-[16px]">View Portfolio</div>
          </div>
          <div className="bg-white 2xl:w-[57px] 2xl:h-[58px] 2xl:rounded-[10px] flex justify-center items-center">
            <div>
              <Image src={rightUpVector} width={20} height={23} />
            </div>
          </div>
        </div> */}

        {/* <div className="bg-transparent 2xl:w-[151px] 2xl:h-[56px] flex items-center justify-center">
              <span className="text-white 2xl:text-[16px] font-medium">
                View Portfolio
              </span>
            </div> */}

        <div className="2xl:mt-[61px] 2xl:w-[210px] 2xl:h-[60px] relative">
          <div
            ref={buttonRef}
            className="flex overflow-hidden border-2 border-white 2xl:rounded-[10px] relative cursor-pointer"
          >
            <div className="bg-transparent 2xl:w-[151px] 2xl:h-[56px] flex items-center justify-center z-20">
              <span
                ref={textRef}
                className="text-white 2xl:text-[16px] font-medium z-30"
              >
                View Portfolio
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

        <div className="2xl:mt-[210px] flex justify-between">
          <div className="">
            <div>
              <div className="2xl:text-[20px] 2xl:w-[296px] 2xl:leading-[20px] font-[600px]">
                Crafting Beautiful, Personalized <br /> Spaces Just for You
              </div>
              <div className="2xl:w-[378px] 2xl:text-[16px] 2xl:mt-[23px] 2xl:leading-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,`
              </div>
            </div>
          </div>

          <div className="text-[128px] 2xl:top-[-150px] 2xl:relative 2xl:tracking-tighter 2xl:leading-[128px]">
            <div className="text-end">JUST</div>
            <div>FOR YOU</div>
          </div>
        </div>

        <div className="2xl:relative">
          <div className="absolute top-[-138px] left-0 right-0 mx-auto w-fit">
            <Image
              ref={wheelRef}
              src={scrollWheelImg}
              width={134}
              height={134}
              alt="Scroll Wheel"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
