import React from 'react';
import { ProductContainerData } from './ProductContainerData';
import { Link } from 'react-router-dom';
export const ProductsContainer = () => {
  return (
    <div className="my-20">
      <div className="flex flex-row justify-between pb-2 mx-10  border-b border-stone-400">
        <Link className=" text-2xl font-semibold " to="/">
          Promotions:
        </Link>
        <Link className=" text-2xl flex flex-row font-semibold" to="/">
          Voir tout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-7 ml-1 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      </div>
      <div className="mr-7">
        <ProductContainerData />
      </div>
    </div>
  );
};
