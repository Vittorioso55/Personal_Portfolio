import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import HeroRenew from "../components/HeroRenew";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-1">
    
     {/* <Starscanvas /> */}

     
     <Navbar />
     <div>
    
     <HeroRenew />
     <Cursor />
     <br />
    
  
    </div>
    
    </main>

  );
}
