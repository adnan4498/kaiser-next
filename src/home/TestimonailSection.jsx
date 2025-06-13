import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import commentIcon from "../../public/comment-icon.svg";
import starIcon from "../../public/star-icon.svg";
import profileAvatar from "../../public/profile-avatar-img.svg";
import profileAvatar2 from "../../public/profile-avatar-img-2.svg";
import Image from "next/image";

const testimonialData1 = [
  // truncate: fill with your original data as in the example
  {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
  {
    id: 1,
    name: "Casey Stewart",
    company: "Switch Poker",
    message:
 "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",    img: profileAvatar2,
    stars: 5,
  },
   {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
   {
    id: 1,
    name: "Casey Stewart",
    company: "Switch Poker",
    message:
 "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",    img: profileAvatar2,
    stars: 5,
  },
     {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
   {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
  {
    id: 1,
    name: "Casey Stewart",
    company: "Switch Poker",
    message:
 "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",    img: profileAvatar2,
    stars: 5,
  },
   {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
   {
    id: 1,
    name: "Casey Stewart",
    company: "Switch Poker",
    message:
 "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",    img: profileAvatar2,
    stars: 5,
  },
     {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
   {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
  {
    id: 1,
    name: "Casey Stewart",
    company: "Switch Poker",
    message:
 "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",    img: profileAvatar2,
    stars: 5,
  },
   {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
   {
    id: 1,
    name: "Casey Stewart",
    company: "Switch Poker",
    message:
 "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",    img: profileAvatar2,
    stars: 5,
  },
     {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
   {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
  {
    id: 1,
    name: "Casey Stewart",
    company: "Switch Poker",
    message:
 "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",    img: profileAvatar2,
    stars: 5,
  },
   {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
   {
    id: 1,
    name: "Casey Stewart",
    company: "Switch Poker",
    message:
 "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",    img: profileAvatar2,
    stars: 5,
  },
     {
    id: 0,
    name: "Dr. Farrin Manian",
    company: "Pearl 4 Peers",
    message:
       "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc"
,
    img: profileAvatar,
    stars: 5,
  },
];

const testimonialData2 = [...testimonialData1]; // or your second list

const TestimonialCard = ({ data }) => (
  <div className="bg-white 2xl:mt-[40px] 2xl:w-[574px] 2xl:h-[337px] 2xl:rounded-[20px] 2xl:py-[30px] 2xl:px-[34px]">
    <div className="2xl:flex justify-between">
      <Image src={commentIcon} width={40} height={28} alt="comment" />
      <div className="flex gap-1">
        {Array.from({ length: data.stars }).map((_, i) => (
          <Image key={i} src={starIcon} width={26} height={26} alt="star" />
        ))}
      </div>
    </div>
    <div className="!text-[#414141] 2xl:text-[17px] 2xl:leading-[200%] 2xl:w-[443px] 2xl:pt-[21px]">
      {data.message}
    </div>
    <div className="flex gap-2 2xl:pt-[54px]">
      <Image src={data.img} width={54} height={54} alt="avatar" />
      <div>
        <div className="!text-[#414141] 2xl:text-[16px] font-bold">{data.name}</div>
        <div className="!text-[#414141]">{data.company}</div>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const scrollRef1 = useRef();
  const scrollRef2 = useRef();

  useEffect(() => {
    const el1 = scrollRef1.current;
    const el2 = scrollRef2.current;

    gsap.to(el1, {
      y: `-${el1.scrollHeight / 2}px`,
      duration: 60,
      ease: "none",
      repeat: -1,
    });

    gsap.to(el2, {
      y: `${el2.scrollHeight / 2}px`,
      duration: 60,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="bg-[#121212]">
      <div className="2xl:text-center 2xl:text-[64px] bg-white !text-[#121212] 2xl:py-[38px]">
        Clients That Trust Our Services
      </div>

      <div className="2xl:h-[800px] overflow-hidden relative">
        <div className="2xl:flex justify-center gap-10">
          <div className="2xl:overflow-hidden h-full">
            <div ref={scrollRef1}>
              {[...testimonialData1, ...testimonialData1].map((t, i) => (
                <TestimonialCard key={i} data={t} />
              ))}
            </div>
          </div>

          <div className="2xl:overflow-hidden h-full 2xl:-translate-y-[14000px]">
            <div ref={scrollRef2}>
              {[...testimonialData2, ...testimonialData2].map((t, i) => (
                <TestimonialCard key={i} data={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
