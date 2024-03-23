import React from 'react';
import photoLight from '/assets/Summer.jpg';
import photoDark from '/assets/photo-cropped.jpg';
import { Fade } from 'react-awesome-reveal'; // import Fade

function Intro({ theme, introRef}) {
   return (
      <div id="Intro" className="flex items-center justify-center flex-col text-center pt-20 pb-6 mt-10 mb-5">
         <div className="flex flex-col md:flex-row items-center"> 
            <Fade delay={1500}>
               <img 
               src={theme === 'light' ? photoLight : photoDark} 
               alt="Matthew Davies" 
               className="w-80 h-80 object-cover rounded-lg border-white border-1 mr-10 mb-4 md:mb-10 mt-2"
               />
            </Fade>
            <div>
            <Fade delay={500}>
               <h1 className="text-4xl md:text-7xl text-blueGray-300 dark:text-white mb-1 md:mb-3 font-bold text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>Matthew Davies</h1>    
            </Fade>
            <Fade delay={1500}>
               <p className="text-base md:text-xl text-blueGray-200 dark:text-white mb-3 font-medium text-left">CS Student</p>
               <p className="text-sm max-w-xl text-blueGray-100 dark:text-white mb-6 font-bold text-left">
                  
                  Hi, I'm a 3rd year Computer Science student at the University of Edinburgh.
                  <br />
                  I'm interested in Full-Stack Development, Networking, and Cloud Engineering.
                  <br />
                  In my spare time I enjoy playing the piano and football, working out and learning Swedish.
                  <br />
               </p>
               <a href="/assets/CV.pdf" download className={`text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-stone-700 to-stone-800 drop-shadow-md ${theme === 'light' ? 'hover:animate-glow-light' : 'hover:animate-glow-dark'}`} >              
                  Download CV 
               </a>
            </Fade>
            </div>
         </div>
      </div>
   )
}

export default Intro;