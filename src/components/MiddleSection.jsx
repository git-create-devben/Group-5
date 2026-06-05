import { useState, useRef } from "react";
import "../styles/MiddleSection.css";
import videoSrc from "../assets/video.mp4";

const MiddleSection = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleToggle = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying((p) => !p);
  };

  return (
    <section className="middle-section">
      <div className="middle-section__container">
        <div className="middle-section__video-wrapper">
          <div className="middle-section__video-card">
            <video
              ref={videoRef}
              src={videoSrc}
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
            />

            <button
              className={`video-play-btn${playing ? " video-play-btn--active" : ""}`}
              aria-label="Play video"
              onClick={handleToggle}
            >
              <span className="video-play-btn__ring video-play-btn__ring--1" />
              <span className="video-play-btn__ring video-play-btn__ring--2" />
              <span className="video-play-btn__icon">
                {playing ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="5" y="4" width="4" height="16" rx="1" />
                    <rect x="15" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 4.75a.75.75 0 0 1 1.14-.638l12 7.25a.75.75 0 0 1 0 1.276l-12 7.25A.75.75 0 0 1 6 19.25V4.75Z" />
                  </svg>
                )}
              </span>
            </button>
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