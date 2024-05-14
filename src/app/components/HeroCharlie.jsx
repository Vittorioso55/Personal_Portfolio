"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

const HeroCharlie = () => {
  ;

    return (

        <section className="lg:py-2 mb: py-0 flex flex-col md:flex-row items-left mt-20">
          {/* Colonna sinistra per il testo */}
          <div className="md:w-1/2 md:px-8 md:pr-16 md:overflow-auto h-screen">
            <div className="text-white  mb-2 text-sm lg:text-2xl font-light text-left">
              <p>
                Name: Charlie &nbsp;<br /> Year: &nbsp; 2024 &nbsp;<br /> Scope: &nbsp; Project
                for "Machine Learning for Designers" Course &nbsp; 
                </p>
              
            </div>
            <div className="text-white mb-2 text-left font-light">
              <p>
                The brief of this workshop was “Unlock” and it was aimed to ideate
                and develop alternative unlocking interactions powered by machine
                learning. Our final concept was “Charlie, the Secret Guardian”.
              </p>
            </div>
            <div className="text-white mb-2 text-left font-light">
              <p>
                Charlie is designed with the primary objective of safeguarding the
                confidential entries made by the user in their diary. He lives
                within a website constructed with p5.js, and employs two distinct
                machine learning algorithms to identify the rightful owner of the
                diary. To fulfill its mission, Charlie employs two different
                strategies.
              </p>
              <p>
                Strategically positioning the Charlie box, for instance, near the
                entrance of a room, it remotely monitors the surrounding area to
                ensure no unauthorized individuals are present. In the event of
                someone approaching, Charlie promptly alerts its master, giving him
                time to hide the diary.
              </p>
              <p>
                The second control acts directly from the user's computer webcam: if
                a person unrelated to the diary owner stands in front of the
                screen, the machine learning algorithm will detect this as a threat
                and Charlie will conceal the contents of the screen by lowering a
                shutter.
              </p>
              <div className="mt-80 text-[#ADB7BE] mb-2 text-left font-light">
              <p> Co-Designer: &nbsp; Raffaele
                Ammietta, Alessia La Rocca
              </p>
              </div>
            </div>
          </div>
          {/* Colonna destra per le immagini e il video */}
          <div className="md:w-1/2 md:px-8 md:pl-16 mt-0 md:overflow-auto h-screen">
            <div 
              
              className="text-white mb-2 flex justify-center"
            >
              <video autoPlay src="/image/Charlie/charlie.mp4" className="w-full max-h-full" />
            </div>
            <div
              
              className="text-white mb-2 flex justify-center"
            >
              <img src="/image/Charlie/Charlie4.jpg" alt="Description of the image" className="w-full max-h-full" />
            </div>
            <div
             
              className="text-white mb-2 flex justify-center"
            >
              <img src="/image/Charlie/Charlie2.jpg" alt="Description of the image" className="w-full max-h-full" />
            </div>
            <div
             
              className="text-white mb-2 flex justify-center"
            >
              <img src="/image/Charlie/Charlie.jpg" alt="Description of the image" className="w-full max-h-full" />
            </div>
            <div
              
              className="text-white mb-2 flex justify-center"
            >
              <img src="/image/Charlie/Charlie1.jpg" alt="Description of the image" className="w-full max-h-full" />
            </div>
          </div>
        </section>
      );
    };
    
    export default HeroCharlie;