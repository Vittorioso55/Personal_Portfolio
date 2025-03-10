"use client";
import React from "react";
import { motion } from "framer-motion";


const Herogenesi = () => {
;
return (
<section className="lg:py-2 mb: py-0 flex flex-col md:flex-row items-left">
{/* Colonna sinistra per il testo */}
<div className="md:w-1/2 md:px-8 md:pr-16 md:overflow-auto h-screen mt-20">
<div
       className="text-white  mb-2 text-sm lg:text-2xl font-light text-left"
     >
<p>
Name: Genesi-01   <br /> Year:   2024   <br /> Scope:   Project
for "Creating for Tangible Interface" Course  
</p>
</div>
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.5, duration: 0.5 }}
className="text-white text-left font-light mb-80"
>
<p>
Inspired by the Genesis of the Bible and the Original Sin, Genesi-01 is the witness of unknown sins from unknown people. A mysterious box delivered by The Creator to the Sinner 1, intended for traveling and record sins from all over the world.
< br />
The concept of this box revolves around the original sin of Genesis. The box is always delivered and shipped inside its transport box. Genesi.01 opens like a book (reference to the Bible) and allows the user to record their sin, for a maximum of 10 seconds. The sin will be transcribed on a sheet of paper which will always remain inside the box and no one will be able to take it. Sin is also codified so that no one will ever discover it, and the sinner will be freed from its burden. A confessional, a traveling witness which will one day return to his creator.
</p>
</motion.div>

php
Copia codice
    <div className=" mt-96 text-white mb-2 text-left font-light"
    >
      <p> Co-Designer: &nbsp; Alessandro Plantera
        , Alice Mioni
      </p>
    </div>

  </div>
  {/* Colonna destra per le immagini e il video */}
  <div className="  md:w-1/2 md:px-8 md:pl-16 md:overflow-auto h-screen mt-20">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="text-white mb-2 flex justify-center"
    >
      <video controls src="/image/Genesi/Genesi.mp4" className="w-full max-h-full" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="text-white mb-2 flex justify-center"
    >
      <img src="/image/Genesi/Genesi0.png" alt="Description of the image" className="w-full max-h-full" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.7, duration: 1 }}
      className="text-white mb-2 flex justify-center"
    >
      <img src="/image/Genesi/Genesinew1.jpg" alt="Description of the image" className="w-full max-h-full" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 1 }}
      className="text-white mb-2 flex justify-center"
    >
      <img src="/image/Genesi/Genesinew2.jpg" alt="Description of the image" className="w-full max-h-full" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 1 }}
      className="text-white mb-2 flex justify-center"
    >
      <img src="/image/Genesi/Genesinew3.jpg" alt="Description of the image" className="w-full max-h-full" />
    </motion.div>
  </div>
</section>
);
};

export default Herogenesi;