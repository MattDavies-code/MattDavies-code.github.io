import React from 'react';
import photo from '/assets/photo-cropped.jpg'; 
import { Fade } from 'react-awesome-reveal'; // import Fade

function Intro() {
   return (
      <div id="Intro" className="flex items-center justify-center flex-col text-center pt-20 pb-6 mt-10">
         <div className="flex flex-col md:flex-row items-center"> {/* Add a flex container */}
            <Fade delay={2500}>
               <img src={photo} alt="Matthew Davies" className="w-80 h-80 object-cover rounded-lg border-white border-2 mr-10 mb-4 md:mb-10"/> {/* Add the photo */}
            </Fade>
            <div>
            <Fade delay={500}>
               <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold text-left">Matthew Davies</h1>
            </Fade>
            <Fade delay={1500}>
               <p className="text-base md:text-xl mb-3 font-medium text-left">CS Student</p>
               <p className="text-sm max-w-xl mb-6 font-bold text-left">
                  
                  Hi, I'm a 3rd year Computer Science student at the University of Edinburgh.
                  <br />
                  I'm interested in Web Development, Networking, and Cloud Engineering.
                  <br />
                  In my spare time I enjoy playing the piano and football, working out and learning Swedish.
                  <br />
               </p>
            </Fade>
            </div>
         </div>
      </div>
   )
}

export default Intro;