"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";



const projectsData = [
  {
    id: 9,
    title: "",
    description: "Mxline - 2024 - Frontend Developer",
    image: "/image/Mxline/Mx0.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "./projectMxline",
  },
  {
    id: 8,
    title: "",
    description: "Edee  - 2024 - Creating Intelligente Experience",
    image: "/image/Edee/Edeenew2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "./projectEdee",
  },
  {
    id: 3,
    title: "",
    description: "Genesi.01 - 2024 - Creating Tangible Interface",
    image: "/image/Genesi/GenesiLogo.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "./projectGenesis",

  },
  {
    id: 1,
    title: "",
    description: "Infinite Strolling - 2024 - Prototyping Interactive Installation ",
    image: "/image/Strolling/Strolling7.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "./projectStrolling",
  },
  {
    id: 2,
    title: "",
    description: "Charlie - 2024 - Machine Learing for Designers",
    image: "/image/Charlie/Charlie2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "./projectCharlie",
  },

  {
    id: 9,
    title: "",
    description: "Luna Care- 2024 - Multimodal User Exprience",
    image: "/image/LunaCare/Luna3.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "./projectLuna",
  },

  {
    id: 7,
    title: "",
    description: "Renew - 2023 - Designing Intelligence Experience",
    image: "/image/ReNew/ReNew.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "./ProjectRenew",
  },

  {
    id: 4,
    title: "",
    description: "RadioCast - 2024 - Digitally Objects for Fast Prototyping",
    image: "/image/RadioImages/Pic2.png",
    tag: ["All", "Web"],
    gitUrl: " RadioCast - 2024 - Digitally Objects for Fast Prototyping",
    previewUrl: "./projectRadio",
  },
  {
    id: 6,
    title: "",
    description: "Gender Inequality - 2024 - Coding P5.Js",
    image: "/image/gender/gender3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "./projectGender",
  },
  {
    id: 5,
    title: "",
    description: "Morce-Code - 2024 - Programming interactive Objects",
    image: "/image/matrice/m1.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "./projectMatrix",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="text-white flex flex-row justify-right items-right"></div>
      <ul ref={ref} className="grid md:grid-cols-2 gap:0 ml-0  md-0 mt-20">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            initial="initial"
            animate="animate"
            variants={cardVariants}
            transition={{ delay: index * 1, duration: 0.7 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              imgStyle={{ width: '110%', height: '110%' }}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
