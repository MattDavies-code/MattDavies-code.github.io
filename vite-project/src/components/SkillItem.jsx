import React from 'react';

function SkillItem({ imgUrl }) {
   return (
      <div className="w-24 h-24 transition-transform duration-500 ease-in-out transform hover:scale-110">
         <img
            src={imgUrl}
            alt="Skill" 
            className="w-full h-full object-cover rounded-lg"
         />
      </div>
   );
}

export default SkillItem;