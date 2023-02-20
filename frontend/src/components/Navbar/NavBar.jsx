import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import NavLinks from './NavLinks';
import Misalogo from './Misalogo.png';
import { useState } from 'react';
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-t border-blue">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between ">
          <img src={Misalogo} alt="Logo" className="md:cursor-pointer h-10" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        <ul className=" md:flex hidden items-center gap-8  ">
          <NavLinks />
          <li className="flex ">
            <Link to="/" className="py-7 px-3 hover:text-blue ">
              Accueil
            </Link>
            <Link to="/" className="py-7 px-3 hover:text-blue ">
              Promotions %
            </Link>
            <Link to="/" className="py-7 px-3  hover:text-blue">
              À propos
            </Link>
            <Link to="/Contact" className="py-7 px-3 hover:text-blue ">
              Contactez-nous
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile Nav  */}
        <ul
          className={`md:hidden bg-white fixed w-full h-auto bottom-0 py-0 pl-4 duration-500 ${
            open ? 'left-0 ' : 'left-[-100%]'
          }`}
        >
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 flex ">
              Accueil
            </Link>
            <Link to="/" className="py-7 px-3  flex">
              Promotions %
            </Link>
            <Link to="/" className="py-7 px-3 flex ">
              À propos
            </Link>
            <Link to="/Contact" className="py-7 px-3 flex">
              Contactez-nous
            </Link>
          </li>

          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
