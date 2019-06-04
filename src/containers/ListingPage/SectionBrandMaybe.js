import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.css';

const SectionBrandMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.brand ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.brandTitle" />
      </h2>
      <p className={css.rules}>{publicData.brand}</p>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.modelTitle" />
      </h2>
      <p className={css.rules}>{publicData.model}</p>
    </div>
  ) : null;
};

SectionBrandMaybe.defaultProps = { className: null, rootClassName: null };

SectionBrandMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    brand: string,
    model: string,
  }),
};

export default SectionBrandMaybe;
