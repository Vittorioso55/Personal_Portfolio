import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


const ProjectCard = ({ imgUrl, title, description, gitUrl,previewUrl }) => {
  return (
    <div>
      <div
        className="h-72 md:h-72 relative group mt-0"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      > 
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
        
          <Link
            href={previewUrl}
            className="h-full w-full  border-[#ADB7BE] hover:border-white group/link"
          >
          
          </Link>
  
        </div>
       
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#ADB7BE] ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

