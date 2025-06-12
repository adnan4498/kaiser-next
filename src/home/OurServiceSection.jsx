import Image from "next/image";
import React, { useEffect, useRef } from "react";
import furnitureImg from "../../public/custom-furniture-img.svg";
import rectangleImg from "../../public/rectangle-box.svg";
import magicWandImg from "../../public/magic-wand.svg";
import { gsap } from "gsap";

const OurServiceSection = () => {
  const wandRef = useRef();
  const boxRef = useRef();

  useEffect(() => {

        gsap.fromTo(
      boxRef.current,
      {
        y: 0, // Start at original Y
        x: 0, // Start at original X
      },
      {
        y: 10, // Move up 30px
        x: 10, // Move right 30px
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );


    gsap.fromTo(
      wandRef.current,
      {
        y: 0, // Start at original Y
        x: 0, // Start at original X
      },
      {
        y: -30, // Move up 30px
        x: -30, // Move right 30px
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  let furnitureCards = [
    {
      id: 0,
      img: furnitureImg,
      heading: "CUSTOM FURNITURE DESIGN",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      id: 1,
      img: furnitureImg,
      heading: "FULL INTERIOR DESIGN & CONSULTATION",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 2,
      img: furnitureImg,
      heading: "SUSTAINABLE DESIGN SOLUTIONS",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
  ];

  let modernUrbanData = [
    {
      id: 0,
      btnName: "Transformation",
      heading: "MODERN URBAN LOFT",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim",
    },
    {
      id: 1,
      btnName: "Transformation",
      heading: "MODERN URBAN LOFT",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim",
    },
    {
      id: 2,
      btnName: "Transformation",
      heading: "MODERN URBAN LOFT",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim",
    },
    {
      id: 3,
      btnName: "Transformation",
      heading: "MODERN URBAN LOFT",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim",
    },
  ];

  return (
    <div className="2xl:pt-[202px] 2xl:relative">
      <div
        className="2xl:absolute 2xl:right-[100px] 2xl:top-[53px] "
        ref={boxRef}
      >
        <Image src={rectangleImg} width={220} height={220} />
      </div>
      <div
        className="2xl:absolute 2xl:top-[170px] 2xl:right-[-105px]"
        ref={wandRef}
      >
        <Image src={magicWandImg} width={250} height={100} />
      </div>

      <div>
        <div>
          <div className="2xl:text-[20px]">OurServiceSection</div>
          <div className="2xl:w-[882px] 2xl:mt-[23px] 2xl:tracking-tighter 2xl:text-[64px] 2xl:leading-[64px]">
            CUSTOM FURNITURE & TAILORED INTERIOR SOLUTIONS
          </div>
        </div>

        <div className="2xl:flex gap-[79px]">
          {furnitureCards.map((item, index) => (
            <div
              key={index}
              className="2xl:mt-[128px] 2xl:flex flex-col gap-[35px]"
            >
              <div>
                <Image
                  src={item.img}
                  width={385}
                  height={274}
                  alt={item.heading}
                />
              </div>
              <div className="2xl:text-[32px] 2xl:w-[381px] 2xl:tracking-tighter 2xl:leading-[32px]">
                {item.heading}
              </div>
              <div className="2xl:w-[381px] 2xl:text-[16px] 2xl:leading-[24px] 2xl:min-h-[144px]">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        <div className="2xl:mt-[137px] 2xl:text-center ">
          <div className="2xl:text-[20px] font-semibold">Our Work</div>
          <div className="2xl:flex justify-center 2xl:mt-[23px]">
            <div className="2xl:w-[995px] 2xl:text-[64px] 2xl:leading-[64px] 2xl:tracking-tighter ">
              EXQUISITE CUSTOM FURNITURE AND INTERIOR DESIGNS TAILORED TO YOU
            </div>
          </div>
        </div>

        <div className="2xl:mt-[97px]">
          {/* MODERN URBAN LOFT SECTION */}
          {modernUrbanData.map((item, index) => (
            <>
              <div className=" border-t-1 border-gray-400 ">
                <div className="2xl:flex items-center justify-between 2xl:py-[22px]">
                  <div>
                    <div className="text-[12px] 2xl:w-[109px] 2xl:h-[47px] border-2 border-gray-500 rounded-full flex justify-center items-center">
                      <div>{item.btnName}</div>
                    </div>
                    <div className="2xl:text-[28px] 2xl:mt-[27px] 2xl:font-bold">
                      {item.heading}
                    </div>
                  </div>

                  <div className="2xl:text-[15px] 2xl:leading-[28px] 2xl:w-[504px]">
                    {item.text}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection;
