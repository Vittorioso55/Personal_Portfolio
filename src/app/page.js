"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Cursor from "./components/Cursor";

const slides = [
  { type: "image", src: "/image/Background/Back8.MOV" },
  { type: "video", src: "/media/video1.mp4" },
  { type: "image", src: "/media/img2.jpg" },
  { type: "video", src: "/media/video2.mp4" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // cambia ogni 5 secondi

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden relative">
      
      {/* BACKGROUND SLIDER */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                className="w-full h-full object-cover"
                alt=""
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* CONTENUTO */}
      <main className="relative z-10 flex min-h-screen flex-col justify-between">
        
        <Cursor />
        <Navbar />

        {/* Qui puoi aggiungere contenuto sopra lo slider */}
        <div className="flex items-center justify-center h-full text-white text-4xl font-bold">
          {/* eventuale titolo */}
        </div>

      </main>
    </section>
  );
}