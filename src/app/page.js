"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

const IMAGE_DURATION = 5000;
const VIDEO_MIN_DURATION = 10000; // durata minima per video brevi

const slides = [
  { type: "video", src: "/image/Background/Background.mov" },
  { type: "video", src: "/image/Background/Back_Intro.mp4" },
  { type: "image", src: "/image/Background/Back.JPG" },
  { type: "video", src: "/image/Background/Back8.mp4" },
  { type: "image", src: "/image/Background/Back2.JPG" },
  { type: "video", src: "/image/Background/Back_intro2.mp4" },
  { type: "image", src: "/image/Background/Back3.JPG" },
  { type: "image", src: "/image/Background/Back4.JPG" },
  { type: "image", src: "/image/Background/Back5.JPG" },
  { type: "image", src: "/image/Background/Back6.JPG" },
  { type: "image", src: "/image/Background/Back7.JPG" },
  { type: "image", src: "/image/Background/Back9.JPG" },
  { type: "image", src: "/image/Background/Back12.JPG" },
  { type: "image", src: "/image/Background/Back13.JPG" },
  { type: "video", src: "/image/Background/Back10.mp4" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const timeoutRef = useRef(null);
  const videoRef = useRef(null);

  // 👇 Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 👇 Filtra slides su mobile (solo immagini)
  const filteredSlides = isMobile
    ? slides.filter((slide) => slide.type === "image")
    : slides;

  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % filteredSlides.length);
      setIsFading(false);
    }, 500); // durata del fade
  };

  // 👇 gestione immagini
  useEffect(() => {
    const activeSlide = filteredSlides[current];

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (activeSlide?.type === "image") {
      timeoutRef.current = setTimeout(nextSlide, IMAGE_DURATION);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, filteredSlides]);

  // 👇 autoplay video (solo desktop)
  useEffect(() => {
    if (isMobile) return;

    const activeSlide = filteredSlides[current];

    if (activeSlide?.type !== "video") return;

    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.currentTime = 0;
        await video.play();

        // Assicurati durata minima
        const duration = video.duration * 1000;
        const minDuration = Math.max(duration, VIDEO_MIN_DURATION);
        setTimeout(nextSlide, minDuration);
      } catch (e) {
        console.log("video non parte");
        nextSlide();
      }
    };

    playVideo();
  }, [current, isMobile, filteredSlides]);

  if (!filteredSlides.length) return null;

  const activeSlide = filteredSlides[current];

  return (
    <section
      className="relative w-full min-h-[100svh] overflow-hidden bg-black"
      onClick={() => {
        if (!showNavbar) setShowNavbar(true);
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {activeSlide.type === "image" ? (
          <img
            key={activeSlide.src}
            src={activeSlide.src}
            alt="Background"
            onError={nextSlide}
            draggable={false}
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          />
        ) : (
          <video
            key={activeSlide.src}
            ref={videoRef}
            src={activeSlide.src}
            muted
            autoPlay
            playsInline
            preload="auto"
            onEnded={nextSlide}
            onError={nextSlide}
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENUTO */}
      <main className="relative z-10 flex min-h-[100svh] flex-col justify-between">
        <Cursor />

        <div
          className={`transition-opacity duration-500 ${
            showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Navbar />
        </div>

        <div className="flex-1" />
      </main>
    </section>
  );
}