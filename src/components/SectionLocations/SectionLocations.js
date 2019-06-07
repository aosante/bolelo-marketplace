import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import grinderImage from './images/grinder.jpg';
import ladderImage from './images/ladder.jpg';
import tentImage from './images/tent.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <span className={css.container}>
          <div>
            <span className={css.blue}>B</span>
            <span className={css.green}>o</span>
            rrow
          </div>{' '}
          <div>
            <span className={css.blue}>L</span>
            <span className={css.green}>e</span>
            nd
          </div>{' '}
          <div>
            <span className={css.blue}>L</span>
            <span className={css.green}>o</span>
            cal
          </div>
        </span>
      </div>
      <div className={css.locations}>
        {locationLink(
          'Raleigh',
          grinderImage,
          '?address=Raleigh%2C%20North%20Carolina&bounds=38.30653843%2C-75.8435422%2C33.30230225%2C-81.446569626'
        )}
        {locationLink(
          'Charlotte',
          tentImage,
          '?address=Charlotte%2C%20North%20Carolina&bounds=35.39313300000001%2C-80.67010399999998%2C35.0131739%2C-81.00955390000001'
        )}
        {locationLink(
          'Durham',
          ladderImage,
          '?address=Durham%2C%20North%20Carolina&bounds=36.1369289%2C-78.76217200000002%2C35.8667249%2C-79.00765000000001'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
