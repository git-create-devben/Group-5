import {  useRef } from "react";
import "../components/MiddleSection.css";
import videoSrc from "../assets/video.mp4";

const MiddleSection = () => {
  
  const videoRef = useRef(null);

 

  return (
    <section className="middle-section">
      <div className="middle-section__container">
        <div className="middle-section__video-wrapper">
          <div className="middle-section__video-card">
            <video
              ref={videoRef}
              src={videoSrc}
              playsInline
              autoPlay
              loop
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
            />

           
          </div>
        </div>

        {/* Text Content */}
        <div className="middle-section__content">
          <h2 className="middle-section__title">
            How Planetary Data Helps Us{" "}
            <span className="middle-section__title-break">Understand Space</span>
          </h2>
          <p className="middle-section__body">
            Planetary science goes beyond images. Comparing{" "}
            <strong className="middle-section__highlight">mass</strong>,{" "}
            <strong className="middle-section__highlight">diameter</strong>,{" "}
            <strong className="middle-section__highlight">gravity</strong>, and{" "}
            <strong className="middle-section__highlight">density</strong>, we gain
            insight into how planets form, behave, and interact within the solar
            system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;