import React from 'react';
import Carouselcontainer from './Carousel';
const CarouselMain = () => {
  return (
    <div className=" flex flex-col m-5">
      <div className="px-5 -mb-16 mt-12">
        <h3 className="text-2xl font-semibold">Produits Populaire :</h3>
      </div>
      <div>
        <Carouselcontainer />
      </div>
    </div>
  );
};

export default CarouselMain;
