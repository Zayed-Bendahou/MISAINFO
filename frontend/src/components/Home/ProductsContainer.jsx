import React from 'react';
import { ProductContainerData } from './ProductContainerData';
import { Link } from 'react-router-dom';
export const ProductsContainer = () => {
  return (
    <div className="my-20">
      <div className="flex flex-row justify-between mx-5 my-5">
        <h2 className="ml-5 text-2xl">Collection</h2>
        <Link className="mr-5 text-xl flex flex-row" href="#">
          Voir tout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-7 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-flow-row grid-cols-1 md:grid-clos-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5">
        <ProductContainerData />
      </div>
    </div>
  );
};
