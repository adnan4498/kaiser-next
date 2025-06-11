import React from "react";

const VideoSection = () => {
  return (
    <div>
      <div className="2xl:h-[px] 2xl:w-full">
        <video
          src="/video-section-video.mp4" // place video in /public/videos/demo.mp4
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          height=""
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
