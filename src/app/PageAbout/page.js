import Image from "next/image";

import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import HeroCharlie from "../components/HeroCharlie";
import PageAbout from "../components/PageAbout";
import Cursor from "../components/Cursor";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-0 ">
   
    

     
     <Navbar />
     <div>
    <PageAbout />
    <Cursor />
    
     
  
    </div>
    
    </main>

  );
}
