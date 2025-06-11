import Image from "next/image";
import React from "react";
import craftingImg from "../../public/crafting-img.svg";
import customerServingIcon from "../../public/customer-service-icon.svg";
import inovationIcon from "../../public/inovation-icon.svg";
import sustainIcon from "../../public/sustain-icon.svg";
import qualityIcon from "../../public/quality-icon.svg";
import rightUpVector from "../../public/upper-right-vector.svg";
import circleIcon from "../../public/crafting-circle-icon.svg";

const CraftingSection = () => {
  return (
    <div className="2xl:pt-[164px]">
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

          <div className="2xl:mt-[99px] 2xl:w-[493px] 2xl:h-[146px] 2xl:flex gap-[146px] justify-center items-center">
            <div className=" 2xl:w-[210px] 2xl:h-[60px]">
              <div className="flex overflow-hidden border-2 border-white 2xl:rounded-[10px]">
                <div className="bg-transparent 2xl:w-[151px] 2xl:h-[56px] flex items-center justify-center">
                  <span className="text-white 2xl:text-[16px] font-medium">
                    Learn More
                  </span>
                </div>

                <div className="!bg-white 2xl:w-[57px] 2xl:h-[56px] flex items-center justify-center rounded-l-[10px]">
                  <Image
                    src={rightUpVector}
                    width={20}
                    height={23}
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>

            <div>
              <Image src={circleIcon} width={146} height={146} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftingSection;
