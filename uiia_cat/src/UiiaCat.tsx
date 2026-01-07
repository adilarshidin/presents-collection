import "./UiiaCat.css";
import { useRef } from "react";

const UiiaCat = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    if (videoRef.current) videoRef.current.play();
  };

  return (
    <video
      ref={videoRef}
      className="uiia-cat"
      src="/uiia-cat.mp4"
      loop
      playsInline
      onClick={handlePlay}
    />
  );
};

export default UiiaCat;
