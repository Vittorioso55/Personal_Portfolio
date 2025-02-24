import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import HeroMxline from "../components/HeroMxline";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-0 ">
   
    

     
     <Navbar />
     <div>
   <HeroMxline />
    <Cursor />
    
     
  
    </div>
    
    </main>

  );
}
