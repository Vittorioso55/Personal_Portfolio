"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import MovingText from "react-moving-text";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C & C++</li>
        <li>MicroPhyton</li>
        <li>HTML & CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Fusion360</li>
        <li>Figma</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FABIO BESTA Corporate Information Systems, Ragusa Italy </li>
        <li>IULM Bachelor in Corporate communication and Pubblic Relations, Milan Italy </li>
        <li>SUSPSI Master in Interaction Design, Mendrisio Swiss</li>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (

    
    <section className="text-white" id="about" >
      <div className="mt-0 md:grid md:grid-cols-1 gap-8 items-center py-8 px-3 xl:gap-20 sm:py-60 xl:px-16 ">
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full  ">
    
          <h2 className="text-4xl font-bold text-white mb-4 animated:spin align-center text-center ">
          <div className="flex justify-center">
              {"About-Me".split("").map((letter, index) => (

                <MovingText
                  key={index}
                  className="animate-rotate align-center text-center "
                  type="popIn,rotate"
                  duration="3000ms"
                  delay={`${index * 0.7}s`} // Delay diverso per ogni lettera
                  timing="ease"
                  iteration="1"
                  fillMode="reverse"
                >
                  {letter}
                </MovingText>
              ))}
            </div>
          </h2>  
          <p className="text-base lg:text-lg align-Left text-Left">
          I am Vittorio Gennuso, a multidisciplinary specialist with a passion for design and technology. With a background in Corporate Information Systems and Corporate Communication in Milan, I am currently completing a Master in Interaction Design in Switzerland.

My skills range from coding (HTML, CSS, JavaScript, C++) to product design using Fusion 360. Recently, I have gained knowledge in programming Arduino to create interactive objects and IoT devices.
          </p>
          <div className="flex flex-row justify-left mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
           
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      
    </section>
  );
};


export default AboutSection;

