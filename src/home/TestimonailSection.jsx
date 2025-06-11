import React from "react";
import commentIcon from "../../public/comment-icon.svg";
import starIcon from "../../public/star-icon.svg";
import profileAvatar from "../../public/profile-avatar-img.svg";
import profileAvatar2 from "../../public/profile-avatar-img-2.svg";
import Image from "next/image";

const TestimonailSection = () => {
  let testimonialData1 = [
    {
      id: 0,
      name: "Dr. Farrin Manian",
      company: "Pearl 4 Peers",
      message:
        "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",
      img: profileAvatar,
      stars: 5,
    },

    {
      id: 1,
      name: "Casey Stewart",
      company: "Switch Poker",
      message:
        "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc",
      img: profileAvatar2,
      stars: 5,
    },

    {
      id: 2,
      name: "Dr. Farrin Manian",
      company: "Pearl 4 Peers",
      message:
        "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",
      img: profileAvatar,
      stars: 5,
    },
  ];

  let testimonialData2 = [
    {
      id: 0,
      name: "Casey Stewart",
      company: "Switch Poker",
      message:
        "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc",
      img: profileAvatar2,
      stars: 5,
    },
    {
      id: 1,
      name: "Dr. Farrin Manian",
      company: "Pearl 4 Peers",
      message:
        "Even though I am sure mine was a relatively small job for APPGENIE, I felt they took their job just as seriously. Personalized attention and reliability are attributes I appreciate and APPGENIE did not disappoint!",
      img: profileAvatar,
      stars: 5,
    },
    {
      id: 2,
      name: "Casey Stewart",
      company: "Switch Poker",
      message:
        "I had asked APPGENIE to create a mobile game application for iOS and Android platforms. Their team was professional throughout the entire mobile application development proc",
      img: profileAvatar2,
      stars: 5,
    },
  ];

  const renderStars = (count, starIcon) => {
    return Array.from({ length: count }, (_, index) => (
      <Image key={index} src={starIcon} width={26} height={26} />
    ));
  };

  const testimonialsBgStyle = {
    backgroundImage: `url("/testimonials-bg.svg")`,
    // backgroundImage: `url("/crafting-bg-lines.svg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "537px",
    // backgroundColor: "#D3D3D3",
    backgroundColor: "#251F1F",
  };

  return (
    <div className="">
      <div>
        <div className="2xl:text-center 2xl:text-[64px] !bg-white !text-[#121212] 2xl:py-[38px]">
          Clients That Trust Our Services
        </div>

        {/* <div style={testimonialsBgStyle}>ad</div> */}

        <div className="2xl:flex gap-10 justify-center 2xl:pb-10 bg-[#121212]">
          <div>
            {testimonialData1.map((testimonial) => (
              <div
                key={testimonial.id}
                className="!bg-white 2xl:mt-[40px] 2xl:w-[574px] 2xl:h-[337px] 2xl:rounded-[20px] 2xl:py-[30px] 2xl:px-[34px]"
              >
                <div>
                  <div className="2xl:flex justify-between">
                    <div>
                      <Image src={commentIcon} width={40} height={28} />
                    </div>
                    <div className="flex gap-1">
                      {renderStars(testimonial.stars, starIcon)}
                    </div>
                  </div>

                  <div className="!text-[#414141] 2xl:text-[17px] 2xl:leading-[200%] 2xl:w-[443px] 2xl:pt-[21px]">
                    {testimonial.message}
                  </div>

                  <div className="flex gap-2 2xl:pt-[54px]">
                    <div>
                      <Image src={testimonial.img} width={54} height={54} />
                    </div>
                    <div>
                      <div className="!text-[#414141] 2xl:text-[16px] font-bold">
                        {testimonial.name}
                      </div>
                      <div className="!text-[#414141]">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            {testimonialData2.map((testimonial) => (
              <div
                key={testimonial.id}
                className="!bg-white 2xl:mt-[40px] 2xl:w-[574px] 2xl:h-[337px] 2xl:rounded-[20px] 2xl:py-[30px] 2xl:px-[34px]"
              >
                <div>
                  <div className="2xl:flex justify-between">
                    <div>
                      <Image src={commentIcon} width={40} height={28} />
                    </div>
                    <div className="flex gap-1">
                      {renderStars(testimonial.stars, starIcon)}
                    </div>
                  </div>

                  <div className="!text-[#414141] 2xl:text-[17px] 2xl:leading-[200%] 2xl:w-[443px] 2xl:pt-[21px]">
                    {testimonial.message}
                  </div>

                  <div className="flex gap-2 2xl:pt-[54px]">
                    <div>
                      <Image src={testimonial.img} width={54} height={54} />
                    </div>
                    <div>
                      <div className="!text-[#414141] 2xl:text-[16px] font-bold">
                        {testimonial.name}
                      </div>
                      <div className="!text-[#414141]">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonailSection;
