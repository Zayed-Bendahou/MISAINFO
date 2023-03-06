import React from 'react';
import Carouselcontainer2 from '../components/Home/Carousel2';
import { ProductsContainer } from '../components/Home/ProductsContainer';
import { Slider } from '../components/Home/Slider';
import { Servicebanner } from '../components/Home/Servicebanner';
import CarouselMain from '../components/Home/CarouselMain';
const Home = () => {
  return (
    <>
      <Slider />
      <Servicebanner />
      <CarouselMain />
      <ProductsContainer />
      <Carouselcontainer2 />
    </>
  );
};
export default Home;
