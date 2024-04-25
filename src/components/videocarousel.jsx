import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState([]);
  const [progress, setProgress] = useState(0); // Progress as a percentage
  const [startTime, setStartTime] = useState(null); // Store when video starts

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);






   // Update the progress bar
   const updateProgress = () => {
    if (!videoRef.current[videoId]) {
      return; // Early exit if videoRef is not available
    }
    const currentTime = videoRef.current[videoId].currentTime;
    const duration = hightlightsSlides[videoId].videoDuration;
    const progress = currentTime / duration;

    // Set the background color of the progress bar
    gsap.to(videoSpanRef.current[videoId], {
      width: `${progress * 100}%`,
      backgroundColor: "#101010",
    });

    // When the video ends, replace the progress bar with the indicator and change the background color
    if (progress >= 1) {
      gsap.to(videoDivRef.current[videoId], {
        width: "12px",
        backgroundColor: "#afafaf",
      });
    }
  };

  // Ticker to update the progress bar
  useEffect(() => {
    if (isPlaying) {
      gsap.ticker.add(updateProgress);
    } else {
      // Remove the ticker when the video is paused (progress bar is stopped)
      gsap.ticker.remove(updateProgress);
    }

    return () => {
      // Cleanup ticker on component unmount
      gsap.ticker.remove(updateProgress);
    };
  }, [isPlaying, videoId]);

  useEffect(() => {
    if (videoRef.current[videoId] && isPlaying) {
      setStartTime(Date.now());
      requestAnimationFrame(updateProgress); // Start progress updating
    }
  }, [videoId, isPlaying]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({ ...prev, isEnd: true, videoId: i + 1 }));
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((prev) => ({ ...prev, videoId: 0, isLastVideo: false }));
        break;
      case "pause":
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((prev) => [...prev, e]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  className={`${list.id === 2 && "translate-x-44"} pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() => handleProcess(i !== 3 ? "video-end" : "video-last", i)}
                  onPlay={() => setVideo((prev) => ({ ...prev, isPlaying: true }))}
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, idx) => (
                  <p key={idx} className="md:text-2xl text-xl font-medium">{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span key={i} className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer" ref={(el) => (videoDivRef.current[i] = el)}>
              <span className="absolute h-full w-full rounded-full" ref={(el) => (videoSpanRef.current[i] = el)}/>
            </span>
          ))}
        </div>
        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={() => handleProcess(isLastVideo ? "video-reset" : !isPlaying ? "play" : "pause")}
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;