import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import NavLinks from './NavLinks';
import Misalogo from './Misalogo.png';
import { useState } from 'react';
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-300 ">
      <div className=" font-semibold  ">
        <div className="  md:w-auto ">
          <img
            src={Misalogo}
            alt="Logo"
            className="md:cursor-pointer md:hidden  "
          />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        <ul className=" md:flex hidden text-xl px-36 py-4 border-t border-gray-300 justify-evenly">
          <li className="flex ">
            <Link to="/Devis" className="z-50">
              <NavLinks />
            </Link>
            <Link
              to="/"
              className="  ml-8 mr-4 px-3 hover:text-cyan-600 hover:underline hover:underline-offset-4 "
            >
              Accueil
            </Link>
            <Link
              to="/Promo"
              className=" mx-4 px-3 hover:text-cyan-600 hover:underline hover:underline-offset-4"
            >
              Promotions %
            </Link>
            <Link
              to="/"
              className="mx-4 px-3 hover:text-cyan-600 hover:underline hover:underline-offset-4"
            >
              À propos
            </Link>
            <Link
              to="/Contact"
              className=" mx-10 pr-1  hover:text-cyan-600 hover:underline hover:underline-offset-4"
            >
              Contactez-nous
            </Link>
            <div className="md:block hidden text-base ml-12 px-4 -mt-1">
              <Link to="/Devis">
                <Button />
              </Link>
            </div>
          </li>
        </ul>

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
