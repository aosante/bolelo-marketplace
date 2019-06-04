import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.css';

const SectionDimensionsMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.dimensions ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.dimensionsTitle" />
      </h2>
      <p className={css.rules}>{publicData.dimensions}</p>
    </div>
  ) : null;
};

SectionDimensionsMaybe.defaultProps = { className: null, rootClassName: null };

SectionDimensionsMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    dimensions: string,
  }),
};

export default SectionDimensionsMaybe;
