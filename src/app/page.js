"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

const IMAGE_DURATION = 5000;

const slides = [
  { type: "video", src: "/image/Background/Back_Intro.mp4" },
  { type: "image", src: "/image/Background/Back2.JPG" },
  { type: "video", src: "/image/Background/Back8.mp4" },
  { type: "image", src: "/image/Background/Back3.JPG" },
  { type: "video", src: "/image/Background/Back_intro_2.mp4" },
  { type: "image", src: "/image/Background/Back4.JPG" },
  { type: "image", src: "/image/Background/Back5.JPG" },
  { type: "image", src: "/image/Background/Back6.JPG" },
  { type: "image", src: "/image/Background/Back7.JPG" },
  { type: "image", src: "/image/Background/Back9.JPG" },
  { type: "image", src: "/image/Background/Back12.JPG" },
  { type: "video", src: "/image/Background/Back13.mp4" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const slide = slides[current];

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (slide.type === "image") {
      timeoutRef.current = setTimeout(nextSlide, IMAGE_DURATION);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const activeSlide = slides[current];

  return (
    <section
      className="relative w-full min-h-[100svh] overflow-hidden bg-black"
      onClick={() => setShowNavbar(true)}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {activeSlide.type === "image" ? (
          <img
            key={activeSlide.src}
            src={activeSlide.src}
            alt="Background"
            onError={nextSlide}
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            key={activeSlide.src}
            src={activeSlide.src}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={nextSlide}
            onError={nextSlide}
            className="h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENUTO */}
      <main className="relative z-10 flex min-h-[100svh] flex-col justify-between">
        <Cursor />

        {/* NAVBAR */}
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