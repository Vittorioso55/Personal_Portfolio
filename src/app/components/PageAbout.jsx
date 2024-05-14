"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import MovingText from "react-moving-text";
import Navbar from "./Navbar";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 mt-10">
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
        <li>FABIO BESTA Corporate Information Systems, Ragusa, Italy </li>
        <li>IULM Bachelor in Corporate communication and Pubblic Relations, Milan, Italy </li>
        <li>SUPSI Master in Interaction Design, Mendrisio, Swiss</li>
      </ul>
    ),
  },
  
];

const PageAbout = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about ">
      <div className=" mt-40 flex flex-col md:flex-row mx-2">
        <div className="md:w-1/2 ">
          
          <p className="text-base lg:text-lg">
            I am Vittorio Gennuso, a multidisciplinary specialist with a passion for design and technology. With a background in Corporate Information Systems and Corporate Communication in Milan, I am currently completing a Master in Interaction Design in Switzerland. My skills range from coding (HTML, CSS, JavaScript, C++) to product design using Fusion 360. Recently, I have gained knowledge in programming Arduino to create interactive objects and IoT devices.
          </p>
          <div className="flex flex-row mt-72">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
          </div>
          <div className="mt-2">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
        <div className="md:w-1/2 mx-0">
          <Image src="/image/Foto_Me/Vittorio.png"  width={800} height={800} />
        </div>
      </div>
    </section>
  );
};

export default PageAbout;