import React from 'react';

import BackgroundSlideshow from 'react-background-slideshow';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../assets/carousel1.jpg';
import image2 from '../../assets/carousel2.jpg';
import image3 from '../../assets/carousel3.jpg';
import image4 from '../../assets/carousel4.jpg';
import image5 from '../../assets/carousel5.jpg';
import image6 from '../../assets/carousel6.jpg';
import image7 from '../../assets/carousel7.jpg';
import image8 from '../../assets/carousel8.jpg';

const BackgroundCarousel = props => {
  return (
    <BackgroundSlideshow
      images={[image1, image2, image3, image4, image5, image6, image7, image8]}
    />
  );
};

export default BackgroundCarousel;
