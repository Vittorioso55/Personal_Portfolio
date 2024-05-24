import Navbar from "../components/Navbar";
import HeroMatrix from "../components/HeroMatrix";
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-1">
    
     {/* <Starscanvas /> */}

     
     <Navbar />
     <div>
    
     <HeroMatrix />
     <Cursor />
     <br />

    </div>
    
    </main>

  );
}
