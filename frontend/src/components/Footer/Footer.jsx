import React from 'react';
import { Socialicons } from './Socialicons';
import { Icons } from './Icons';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-auto ">
      <div className="flex flex-row justify-between p-4 items-center ">
        <div className="mx-12 ">
          <Socialicons Icons={Icons} />
        </div>
        <div className="flex">
          <span className="mt-4 items-center text-sm text-gray-500 ">
            <span className="text-white ">Registre du commerce :</span> 348283 -
            <span className="text-white "> Patente :</span> 3542321 -
            <span className="text-white "> Identifiant Fiscal :</span> 18767514
            - <span className="text-white ">ICE :</span> 001557090000019
          </span>
        </div>
        <div className="flex flex-col items-center mx-6 text-sm text-gray-400">
          <span className=" ">Copyright © 2023 Misadat</span>
          <span className=" ">Terms · Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};
