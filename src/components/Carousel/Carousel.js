import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import CarouselItem from './CarouselItem';
import './Carousel.css'

export default (props) => {
  const {
    filteredOptions = []
  } = props;

  const responsive ={
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  }

  return (
    <Carousel
      responsive={ responsive }
      showDots={ false }
      arrows
      containerClass="Carousel_Container"
      itemClass="Carousel_Item"
    >
      { filteredOptions
        // .filter(o => o.numeric <= carouselLength)
        .map(o => <CarouselItem key={ o.numeric } item={ o } />) 
      }
    </Carousel>
  );
}