import Image from "next/image";
import React from "react";
import logo from "../../public/main-logo.png";
import cartIcon from "../../public/cart-icon.svg";
import downVector from "../../public/down-vector.svg";

const Navbar = () => {
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
              <div className="2xl:flex 2xl:items-center"><Image src={downVector} width={18} height={10}/></div>
            </div>
            <div>Testimonial</div>
            <div>About</div>
            <div>Blog</div>
          </div>

          <div className="flex gap-6">
            <div>
              <Image src={cartIcon} width={26} height={19} />
            </div>

            <div className="2xl:w-[132px] 2xl:h-[44px] 2xl:rounded-[76px] 2xl:bg-[#E6E6E6] 2xl:flex 2xl:justify-center 2xl:items-center">
              <div className="!text-[#1E1E1E]  2xl:text-[20px]">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
