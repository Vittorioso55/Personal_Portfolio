
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Cursor from "./components/Cursor";




export default function Home() {
  return (
   <section className="w-full">

  
    <main className="flex min-h-screen flex-col items-left justify-between p-0">
   
    <div>

    
     
    </div>
    <Cursor />
    
     <Navbar />
     <ProjectsSection />
 
   
  
   
    </main>

    </section>

  );
}