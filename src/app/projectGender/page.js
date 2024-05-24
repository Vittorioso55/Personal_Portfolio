
import Navbar from "../components/Navbar";
import HeroGender from "../components/HeroGender";
import Cursor from "../components/Cursor";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-1">
   
    

     
     <Navbar />
     <div>
      <HeroGender />
      <Cursor />
    
     
  
    </div>
    
    </main>

  );
}
