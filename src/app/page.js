"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
// import ProjectsSection from "./components/ProjectsSection";

const IMAGE_DURATION = 5000;

const slides = [
  { type: "video", src: "/image/Background/Back_Intro.MOV" },
  { type: "image", src: "/image/Background/Back2.JPG" },
  { type: "video", src: "/image/Background/Back8.MOV" },
  { type: "image", src: "/image/Background/Back3.JPG" },
  { type: "video", src: "/image/Background/Back_intro_2.MOV" },
  { type: "image", src: "/image/Background/Back4.JPG" },
  { type: "image", src: "/image/Background/Back5.JPG" },
  { type: "image", src: "/image/Background/Back6.JPG" },
  { type: "image", src: "/image/Background/Back7.JPG" },
  { type: "image", src: "/image/Background/Back9.JPG" },
  { type: "image", src: "/image/Background/Back12.JPG" },
  { type: "image", src: "/image/Background/Back13.MOV" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);

  const safeSlides = useMemo(() => {
    return slides.filter((slide) => slide?.src && slide?.type);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % safeSlides.length);
  }, [safeSlides.length]);

  const clearExistingTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!safeSlides.length) return;

    clearExistingTimeout();

    const activeSlide = safeSlides[current];

    if (activeSlide.type === "image") {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, IMAGE_DURATION);
    }

    return () => {
      clearExistingTimeout();
    };
  }, [current, nextSlide, safeSlides, clearExistingTimeout]);

  useEffect(() => {
    if (!safeSlides.length) return;

    safeSlides.forEach((slide) => {
      if (slide.type === "image") {
        const img = new Image();
        img.src = slide.src;
      } else if (slide.type === "video") {
        const video = document.createElement("video");
        video.src = slide.src;
        video.preload = "auto";
      }
    });
  }, [safeSlides]);

  useEffect(() => {
    const video = videoRef.current;
    const activeSlide = safeSlides[current];

    if (!video || !activeSlide || activeSlide.type !== "video") return;

    video.currentTime = 0;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.error("Errore autoplay video:", err);
      }
    };

    playVideo();
  }, [current, safeSlides]);

  if (!safeSlides.length) {
    return null;
  }

  const activeSlide = safeSlides[current];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        {activeSlide.type === "image" ? (
          <img
            key={activeSlide.src}
            src={activeSlide.src}
            alt="Background slide"
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <video
            key={activeSlide.src}
            ref={videoRef}
            src={activeSlide.src}
            muted
            playsInline
            preload="auto"
            autoPlay
            onEnded={nextSlide}
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main className="relative z-20 flex min-h-screen flex-col justify-between p-0">
        <Cursor />
        <Navbar />

        <div className="flex-1" />

        {/* <ProjectsSection /> */}
      </main>
    </section>
  );
}