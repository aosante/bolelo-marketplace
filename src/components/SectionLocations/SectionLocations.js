import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import mixerImage from './images/household.jpg';
import officeImage from './images/office.jpg';
import diyImage from './images/ladder.jpg';
import sportsImage from './images/sports.jpg';
import specialEventImage from './images/specialEvent.jpg';

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
            <span className={css.green}>O</span>
            <span className={css.blue}>r</span>
            <span className={css.green}>r</span>
            <span className={css.blue}>o</span>
            <span className={css.green}>w</span>
          </div>{' '}
          <div>
            <span className={css.blue}>L</span>
            <span className={css.green}>E</span>
            <span className={css.blue}>n</span>
            <span className={css.green}>d</span>
          </div>{' '}
          <div>
            <span className={css.blue}>L</span>
            <span className={css.green}>O</span>
            <span className={css.blue}>c</span>
            <span className={css.green}>a</span>
            <span className={css.blue}>l</span>
          </div>
        </span>
      </div>
      <div className={css.locations}>
        {locationLink(
          'Household',
          mixerImage,
          's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999'
        )}
        {locationLink(
          'Office',
          officeImage,
          's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999'
        )}
        {locationLink(
          'DIY',
          diyImage,
          's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999'
        )}
        {locationLink(
          'Sports',
          sportsImage,
          's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999'
        )}
        {locationLink(
          'Special Event',
          specialEventImage,
          's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999'
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
