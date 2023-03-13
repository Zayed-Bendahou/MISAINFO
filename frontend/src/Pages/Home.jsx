import React from 'react';

import { ProductsContainer } from '../components/Home/Promocarousel/ProductsContainer';
import { Slider } from '../components/Home/Slider/Slider';
import { Servicebanner } from '../components/Home/Banners/Servicebanner';
import CarouselMain from '../components/Home/Produitspop/CarouselMain';
import Proservice from '../components/Home/Banners/Proservice';
import Brands from '../components/Home/Brands/Carouselbrands';
const Home = () => {
  return (
    <>
      <Slider />
      <Servicebanner />
      <div className="mx-[5%]">
        <CarouselMain />
      </div>
      <div className="w-full">
        <Proservice />
      </div>
      <div className="mx-[5%]">
        <ProductsContainer />
      </div>
      <div className="mr-[5%] ml-[3%]">
        <Brands />
      </div>
    </>
  );
};
export default Home;
