
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import HeroLuna from "../components/HeroLuna";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-1">
   
    

     
     <Navbar />
     <div>
      <HeroLuna />
      <Cursor />
    
     
  
    </div>
    
    </main>

  );
}
