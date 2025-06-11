import Image from "next/image";
import React from "react";
import furnitureImg from "../../public/custom-furniture-img.svg";

const OurServiceSection = () => {
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
    <div className="2xl:pt-[202px] ">
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
  );
};

export default OurServiceSection;
