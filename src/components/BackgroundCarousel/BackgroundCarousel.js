import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-bootstrap/Carousel';

import image1 from '../../assets/_carousel1.jpg';
import image2 from '../../assets/_carousel2.jpg';
import image3 from '../../assets/_carousel3.jpg';
import image4 from '../../assets/_carousel4.jpg';
import image5 from '../../assets/_carousel5.jpg';
import image6 from '../../assets/_carousel6.jpg';
import image7 from '../../assets/_carousel7.jpg';
import image8 from '../../assets/_carousel8.jpg';
import image9 from '../../assets/_carousel9.jpg';
import image10 from '../../assets/_carousel10.jpg';
import image11 from '../../assets/_carousel11.jpg';
import image12 from '../../assets/_carousel12.jpg';
import image13 from '../../assets/_carousel13.jpg';
import image14 from '../../assets/_carousel14.jpg';
import image15 from '../../assets/_carousel15.jpg';

import css from '../SectionHero/SectionHero.css';

const BackgroundCarousel = _ => {
  const carouselImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];

  return (
    <Carousel controls={false} indicators={false}>
      {carouselImages.map((value, index) => {
        return (
          <Carousel.Item key={index}>
            <img className={css.image} src={value} alt={index} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default BackgroundCarousel;
