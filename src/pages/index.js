import CraftingSection from "@/home/CraftingSection";
import HomePage from "@/home/HomePage";
import MarketingSection from "@/home/MarketingSection";
import OurServiceSection from "@/home/OurServiceSection";
import TestimonailSection from "@/home/TestimonailSection";
import VideoSection from "@/home/VideoSection";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";

export default function Home() {
  const navbarBgStyle = {
    backgroundImage: `url("/heroSectionBg.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "1009px",
  };

  const craftingBgStyle = {
    backgroundImage: `url("/crafting-bg-lines.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "1105px",
    // backgroundColor : "#0f0f0f"
    backgroundColor : "#121212"
  };

  return (
    <>
      <div style={navbarBgStyle}>
        <div className="2xl:pt-[40px] 2xl:px-[62px]">
          <Navbar />
        </div>
        <div className="2xl:px-[62px]">
          <HomePage />
        </div>
      </div>

      <div style={craftingBgStyle} className='2xl:px-[62px]'>
        <CraftingSection />
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
    </>
  );
}
