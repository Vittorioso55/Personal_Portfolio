import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-0 relative group mt-0"
        style={{
          paddingBottom: '79%', // Imposta l'altezza come rapporto 1:1
          background: `url(${imgUrl})`,
          backgroundSize: "cover"
        }}
      > 
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link href={previewUrl}
          className="h-full w-full  border-[#ADB7BE] hover:border-white group/link">
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl md-0 mt-0 ">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-[#ADB7BE] ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
