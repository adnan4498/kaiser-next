import Image from "next/image";
import React, { useEffect, useRef } from "react";
import logo from "../../public/main-logo.png";
import cartIcon from "../../public/cart-icon.svg";
import downVector from "../../public/down-vector.svg";
import gsap from "gsap";

const Navbar = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const arrowDivRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const arrowDiv = arrowDivRef.current;
    const arrow = arrowRef.current;

    const handleEnter = () => {
      gsap.fromTo(
        text,
        { color: "white" },
        { color: "black", duration: 0.3, ease: "none" }
      );

      gsap.fromTo(
        arrowDiv,
        { width: 0 },
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
        { width: 0, duration: 0.5, ease: "none" }
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
    <div className="">
      {/* <div className="2xl:flex 2xl:items-center 2xl:justify-between"> */}
      <div className="2xl:flex 2xl:justify-between items-center">
        <div className=" 2xl:relative">
          <Image src={logo} width={300} height={336} />
        </div>

        <div className="2xl:flex 2xl:gap-14 ">
          <div className="2xl:text-[20px] 2xl:text-white flex  2xl:gap-16">
            <div>Home</div>
            <div className="2xl:flex 2xl:gap-3">
              <div className="">Product</div>
              <div className="2xl:flex 2xl:items-center">
                <Image src={downVector} width={18} height={10} />
              </div>
            </div>
            <div>Testimonial</div>
            <div>About</div>
            <div>Blog</div>
          </div>

          <div className="flex gap-6">
            <div>
              <Image src={cartIcon} width={26} height={19} />
            </div>

            {/* <div className="2xl:w-[132px] 2xl:h-[44px] 2xl:rounded-[76px] 2xl:bg-[#E6E6E6] 2xl:flex 2xl:justify-center 2xl:items-center">
              <div className="!text-[#1E1E1E]  2xl:text-[20px]">Login</div>
            </div> */}

            <div className="relative">
              <div
                ref={buttonRef}
                className="flex overflow-hidden border-2 border-white 2xl:rounded-[76px] relative cursor-pointer"
              >
                <div className="bg-transparent 2xl:w-[151px] 2xl:h-[44px] flex items-center justify-center z-20">
                  <span
                    ref={textRef}
                    className="text-white 2xl:text-[16px] font-medium z-30"
                  >
                    Login
                  </span>
                </div>

                <div
                  ref={arrowDivRef}
                  className="bg-[#fdfdfd] h-[56px] absolute right-0 z-10 rounded-l-[10px] overflow-hidden"
                >
                  <div className="absolute right-[18px] h-full flex items-center justify-center pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
