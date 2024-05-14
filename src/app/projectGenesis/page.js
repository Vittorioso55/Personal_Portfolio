import Image from "next/image";
import HeroProjects from "../components/HeroRadio";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import HeroGenesi from "../components/HeroGenesi";
import Cursor from "../components/Cursor";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-1">
   
    

     <Cursor />
     <Navbar />
     <div>
      <HeroGenesi />
    
     
  
    </div>
    
    </main>

  );
}
