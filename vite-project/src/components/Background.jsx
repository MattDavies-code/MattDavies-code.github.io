import React from 'react';

const Background = ({ theme }) => {
  const stars = Array.from({ length: 70 }); // Adjust the number of stars as needed

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((_, i) => (
        <svg
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${Math.random()})`,
            opacity: Math.random(),
          }}
          width="8"
          height="8"
          viewBox="0 0 50 50"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#FFFFFF" />
        </svg>
      ))}
    </div>
  );
};

export default Background;