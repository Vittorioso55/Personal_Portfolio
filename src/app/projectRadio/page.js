
import HeroProjects from "../components/HeroRadio";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-1">
    
     {/* <Starscanvas /> */}

     
     <Navbar />
     <div>
    <Cursor />
     <HeroProjects />
     <br />
    
  
    </div>
    
    </main>

  );
}
