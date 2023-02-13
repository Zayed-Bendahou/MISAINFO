import React from 'react';
export const Socialicons = ({ Icons }) => {
  return (
    <div className="text-white mt-3">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-blue
        duration-300 "
        >
          <a href={icon.link} target="_blank">
            {' '}
            <ion-icon name={icon.name}></ion-icon>
          </a>
        </span>
      ))}
    </div>
  );
};
