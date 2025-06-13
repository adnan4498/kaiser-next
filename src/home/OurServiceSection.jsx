import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import furnitureImg from "../../public/custom-furniture-img.svg";
import rectangleImg from "../../public/rectangle-box.svg";
import magicWandImg from "../../public/magic-wand.svg";
import { gsap } from "gsap";

const OurServiceSection = () => {
  const wandRef = useRef();
  const boxRef = useRef();
  const overlayRefs = useRef([]);
  const urbanDivRefs = useRef([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { y: 0, x: 0 },
      {
        y: 10,
        x: 10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      wandRef.current,
      { y: 0, x: 0 },
      {
        y: -30,
        x: -30,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    overlayRefs.current.forEach((overlay, index) => {
      if (!overlay) return;
      const parent = overlay.parentNode;

      const onEnter = () => {
        gsap.to(overlay, {
          y: 0,
          opacity: 0.6,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(urbanDivRefs.current[index], {
          paddingLeft: "30px",
          paddingRight: "30px",
          duration: 0.5,
          ease: "power2.out",
        });

        videoRefs.current[index]?.play();

        gsap.to(videoRefs.current[index], {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(overlay, {
          y: "100%",
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });

        gsap.to(urbanDivRefs.current[index], {
          paddingLeft: "0px",
          paddingRight: "0px",
          duration: 0.5,
          ease: "power2.inOut",
        });

        gsap.to(videoRefs.current[index], {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      };

      parent.addEventListener("mouseenter", onEnter);
      parent.addEventListener("mouseleave", onLeave);

      return () => {
        parent.removeEventListener("mouseenter", onEnter);
        parent.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  const furnitureCards = [
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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ];

  const modernUrbanData = [
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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="2xl:pt-[202px] 2xl:relative">
      <div
        className="2xl:absolute 2xl:right-[100px] 2xl:top-[53px]"
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

        <div className="2xl:mt-[137px] 2xl:text-center">
          <div className="2xl:text-[20px] font-semibold">Our Work</div>
          <div className="2xl:flex justify-center 2xl:mt-[23px]">
            <div className="2xl:w-[995px] 2xl:text-[64px] 2xl:leading-[64px] 2xl:tracking-tighter">
              EXQUISITE CUSTOM FURNITURE AND INTERIOR DESIGNS TAILORED TO YOU
            </div>
          </div>
        </div>

        <div className="2xl:mt-[97px] 2xl:pb-[120px]">
          {modernUrbanData.map((item, index) => (
            <div
              key={index}
              className="relative  border-t border-gray-400"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                ref={(el) => (overlayRefs.current[index] = el)}
                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-[#151800] to-[#596700] opacity-0 translate-y-full z-0"
              />

              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-1/2 scale-0 opacity-0 z-0 rounded-xl"
                width="350"
                height="230"
                muted
                playsInline
                loop
                src="/playing-game.mp4"
              />

              <div
                ref={(el) => (urbanDivRefs.current[index] = el)}
                className="relative z-10 2xl:flex items-center justify-between 2xl:py-[22px]"
              >
                <div>
                  <div
                    className={`text-[12px] 2xl:w-[109px] 2xl:h-[47px] border-2 border-gray-500 rounded-full flex justify-center items-center transition duration-300 ${
                      hoveredIndex === index
                        ? "bg-white !text-black"
                        : "bg-transparent text-white"
                    }`}
                  >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection;
