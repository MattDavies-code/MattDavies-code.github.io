import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
   return (
      <div id="Portfolio" className="flex flex-col">
         <div className="mb-30">
            <Title>Portfolio</Title>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map(project => (
               <PortfolioItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   )
}

export default Portfolio;