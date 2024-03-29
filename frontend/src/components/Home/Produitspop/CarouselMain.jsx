import React from 'react';
import Carouselcontainer from './Carousel';
const CarouselMain = () => {
  return (
    <div className=" flex flex-col m-5">
      <div className="ml-4 pb-2 -mb-16 mt-12 border-b border-stone-400">
        <h3 className="text-2xl font-semibold">Produits Populaires :</h3>
      </div>
      <div className="-ml-6 z-10">
        <Carouselcontainer />
      </div>
    </div>
  );
};

export default CarouselMain;
