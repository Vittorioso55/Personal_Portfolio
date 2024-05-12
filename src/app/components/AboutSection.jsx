// "use client";
// import React, { useTransition, useState } from "react";
// import Image from "next/image";
// import TabButton from "./TabButton";
// import MovingText from "react-moving-text";

// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>C & C++</li>
//         <li>MicroPhyton</li>
//         <li>HTML & CSS</li>
//         <li>Javascript</li>
//         <li>React</li>
//         <li>Fusion360</li>
//         <li>Figma</li>
        
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>FABIO BESTA Corporate Information Systems, Ragusa Italy </li>
//         <li>IULM Bachelor in Corporate communication and Pubblic Relations, Milan Italy </li>
//         <li>SUSPSI Master in Interaction Design, Mendrisio Swiss</li>
//       </ul>
//     ),
//   },
  
// ];

// const AboutSection = () => {
//   const [tab, setTab] = useState("skills");
//   const [isPending, startTransition] = useTransition();

//   const handleTabChange = (id) => {
//     startTransition(() => {
//       setTab(id);
//     });
//   };

//   return (
//     <section className="text-white" id="about">
//       <div className="container mx-auto flex flex-col md:flex-row items-center py-8 px-3 xl:px-16 mt-40">
//         <div className="md:w-1/2">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             <MovingText>About Me</MovingText>
//           </h2>
//           <p className="text-base lg:text-lg">
//             I am Vittorio Gennuso, a multidisciplinary specialist with a passion for design and technology. With a background in Corporate Information Systems and Corporate Communication in Milan, I am currently completing a Master in Interaction Design in Switzerland. My skills range from coding (HTML, CSS, JavaScript, C++) to product design using Fusion 360. Recently, I have gained knowledge in programming Arduino to create interactive objects and IoT devices.
//           </p>
//           <div className="flex flex-row mt-8">
//             <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
//               Skills
//             </TabButton>
//             <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
//               Education
//             </TabButton>
//           </div>
//           <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
//         </div>
//         <div className="md:w-1/2">
//           <Image src="/image/Foto_Me/Vittorio.png" alt="Your Image Alt" width={500} height={500} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;