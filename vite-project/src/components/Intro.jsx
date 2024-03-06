import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Matthew Davies</h1>
         <p className="text-base md:text-xl mb-3 font-medium">CS Student</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            Hello! I'm a 3rd year Computer Science student at the University of Edinburgh. I am fueled by a passion for technology and a genuine desire to connect with people. I thrive on the opportunity to merge these two worlds, using my skills to solve problems and enhance lives through innovative solutions.
            <br />
            I'm interested in pursuing a career in software engineering and cloud engineering.
            In my spare time I enjoy playing the piano and football, working out and learning Swedish.
             <br />
         </p>
      </div>
   )
}

export default Intro;