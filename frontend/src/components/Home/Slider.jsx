import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
export const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={2500}
    >
      <div data-src="https://assets.hardwarezone.com/img/2021/01/model-o-wireless-2.jpg" />
      <div data-src="https://i.ytimg.com/vi/RMiBuqYje2w/maxresdefault.jpg" />
      <div data-src="https://esportlandet.se/wp-content/uploads/Allting/Artiklar/2019-10-12_dota2uppdatering/00100lPORTRAIT_00100_BURST20191012213318643_COVER-min_2_34-2.jpg" />
    </AutoplaySlider>
  );
};
