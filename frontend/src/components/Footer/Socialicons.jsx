import React from 'react';
export const Socialicons = ({ Icons }) => {
  return (
    <div className="text-white ">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full  mx-2 text-xl hover:text-gray-100 hover:bg-cyan-600
         "
        >
          <a href={icon.link} target="_blank" rel="noopener noreferrer">
            <ion-icon name={icon.name}></ion-icon>
          </a>
        </span>
      ))}
    </div>
  );
};
