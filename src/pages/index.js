import HeroSection from "@/home/HeroSection";
import HomePage from "@/home/HomePage";

import Navbar from "@/shared/Navbar";

export default function Home() {
  const navbarBgStyle = {
    backgroundImage: `url("/heroSectionBg.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "1009px",
  };

  return (
    <>
      <div style={navbarBgStyle}>
        <div className="2xl:pt-[40px] 2xl:px-[62px]">
          <Navbar />
        </div>
        <div className="2xl:px-[62px]">
          <HeroSection />
        </div>
      </div>

      <HomePage />
    </>
  );
}
