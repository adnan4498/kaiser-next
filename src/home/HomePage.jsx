import React from "react";
import MarketingSection from "@/home/MarketingSection";
import OurServiceSection from "@/home/OurServiceSection";
import TestimonailSection from "@/home/TestimonailSection";
import VideoSection from "@/home/VideoSection";
import Footer from "@/shared/Footer";
import CraftingSection from "@/home/CraftingSection";

const HomePage = () => {

    const craftingBgStyle = {
    // backgroundImage: `url("/crafting-bg-lines.svg")`,
    backgroundImage: `url("/grouped-lines.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "1105px",
    // height: "1485px",
    backgroundColor: "#121212",
  };

  return (
    <div>
      <div className="h-[1460px] bg-[#121212]">
        <div style={craftingBgStyle} className="2xl:px-[62px]">
          <CraftingSection />
        </div>
      </div>

      <div className="">
        <VideoSection />
      </div>

      <div className="bg-[#121212] 2xl:px-[62px]  ">
        <OurServiceSection />
      </div>

      <div className="testimonial-bg-class">
        <TestimonailSection />
      </div>

      <div className="">
        <MarketingSection />
      </div>

      <div className="2xl:px-[62px] bg-[#121212]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
