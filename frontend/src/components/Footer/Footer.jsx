import React from 'react';
import { Socialicons } from './Socialicons';
import { Icons } from './Icons';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-auto ">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8 "
      >
        <Socialicons Icons={Icons} />
        <span className="mt-4 ">Copyright © 2023 Misadat</span>
        <span className="mt-4 ">Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};
