import React from 'react';
import skills from '../data/skills';
import SkillItem from './SkillItem';
import Title from './Title';

function Skills() {
   return (
      <div id="Skills" className="flex flex-col">
         <div className="mb-50">
            <Title></Title>
         </div>
         <div className="bg-black-900 p-4 rounded-lg">
            <div className="grid grid-cols-5 gap-10 justify-center items-center justify-items-center justify-content-center mb-20">
               {skills.map(skill => (
                  <SkillItem 
                     imgUrl={skill.imgUrl}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}


export default Skills;