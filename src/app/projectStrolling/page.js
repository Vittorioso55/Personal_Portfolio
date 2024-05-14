
import HeroProjects from "../components/HeroStrolling";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-1">
    
     {/* <Starscanvas /> */}

     
     <Navbar />
     <div>
    
     <HeroProjects />
     <br />
    <Cursor />
  
    </div>
    
    </main>

  );
}
