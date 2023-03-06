import React from 'react';
import { Head } from './Head';
import NavBar from '../Navbar/NavBar';
import SearchBar from '../SearchBar';
import Misalogo from '../Navbar/Misalogo.png';
export const Header = () => {
  return (
    <>
      <Head />
      <div className="flex flex-row">
        <div className="md:cursor-pointer border-r border-b pt-4 px-1 border-gray-300 ">
          <img src={Misalogo} alt="Logo" />
        </div>
        <div className="flex flex-col ">
          <SearchBar />
          <NavBar />
        </div>
      </div>
    </>
  );
};
//
