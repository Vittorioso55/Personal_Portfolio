"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";



const projectsData = [
  {
    id: 3,
    title: "",
    description: "Genesi.01 - 2024 - Creating Tangible Interface",
    image: "/image/Genesi/Genesinew2.jpg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "./projectGenesis",
  
  },
  {
    id: 2,
    title: "",
    description: "Charlie - 2024 - Machine Learing for Designers",
    image: "/image/Charlie/Charlie1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "./projectCharlie",
  
  },
  {
    id: 1,
    title: "",
    description: "Infinite Strolling - 2024 - Prototyping Interactive Installation ",
    image: "/image/Strolling/Strolling1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "./projectStrolling",
  },
  
  
  {
   

    id: 4,
    title: "",
    description: "RadioCast - 2024 - Digitally Objects for Fast Prototyping",
    image:  "/image/RadioImages/Pic2.png",
    tag: ["All", "Web"],
    gitUrl: " RadioCast - 2024 - Digitally Objects for Fast Prototyping",
    previewUrl: "./projectRadio",
  },
  
  
  {
    id: 6,
    title: "",
    description: "Gender Inequality - 2024 - Coding P5.Js",
    image: "/image/gender/gender1.png",
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
    <section id="projects ">
      
    <div className="text-white flex flex-row justify-right items-right  ">
      {/* <ProjectTag
        onClick={handleTagChange}
        name="All"
        isSelected={tag === "All"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Web"
        isSelected={tag === "Web"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Mobile"
        isSelected={tag === "Mobile"}
      /> */}
    </div>
    <ul ref={ref} className="grid md:grid-cols-2 gap:0 ml-0">
      {filteredProjects.map((project, index) => (
        <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 2, delay: index * 0.8 }}
        >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            imgStyle={{ objectFit: 'cover', width: '200%', height: '200%'  }}
            previewUrl={project.previewUrl}
          
            
    
         
          />
        </motion.li>
      ))}
    </ul>
  </section>
  );
};

export default ProjectsSection;
