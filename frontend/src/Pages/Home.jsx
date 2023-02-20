import React from 'react';
import Carouselcontainer from '../components/Home/Carousel';
import Carouselcontainer2 from '../components/Home/Carousel2';
import { ProductsContainer } from '../components/Home/ProductsContainer';
import { ProductsContainer2 } from '../components/Home/ProductsContainer2';
import { Slider } from '../components/Home/Slider';
const Home = () => {
  return (
    <>
      <Slider />
      <ProductsContainer />
      <Carouselcontainer />
      <ProductsContainer2 />
      <Carouselcontainer2 />
    </>
  );
};
export default Home;
