import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { NamedLink } from '../../components';
// import classNames from 'classnames';
//import Carousel from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import image1 from '../../assets/carousel1.jpg';
import image2 from '../../assets/carousel2.jpg';
import image3 from '../../assets/carousel3.jpg';
// import image4 from '../../assets/carousel4.jpg';
// import image5 from '../../assets/carousel5.jpg';
// import image6 from '../../assets/carousel6.jpg';
// import image7 from '../../assets/carousel7.jpg';
// import image8 from '../../assets/carousel8.jpg';

import css from './SectionHero.css';

const SectionHero = props => {
  // const { rootClassName, className } = props;

  // const classes = classNames(rootClassName || css.root, className);

  return (
    <div>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999',
          }}
          className={css.heroButton}
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
      </div>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className={css.image}
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={css.image}
            src={image2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={css.image}
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

    </div>






  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
