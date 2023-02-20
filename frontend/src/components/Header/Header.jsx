import React from 'react';
import { Head } from './Head';
import NavBar from '../Navbar/NavBar';
import SearchBar from '../SearchBar';
export const Header = () => {
  return (
    <>
      <Head />
      <SearchBar />
      <NavBar />
    </>
  );
};