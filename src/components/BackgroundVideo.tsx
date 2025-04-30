
import React, { useEffect, useRef } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-10"></div>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-w-full min-h-full object-cover"
        poster="https://placehold.co/1920x1080/e2f8ff/0099cc?text=Gym+Buddy+Background"
      >
        <source 
          src="https://cdn.pixabay.com/vimeo/328880139/workout-24538.mp4?width=1280&hash=a5a1ef296d13ff0adbf74b1b399d3c2c97ece3d5" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
