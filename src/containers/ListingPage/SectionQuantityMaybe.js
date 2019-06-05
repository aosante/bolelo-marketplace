import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.css';

const SectionQuantityMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.quantity ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.quantityTitle" />
      </h2>
      <p className={css.rules}>{publicData.quantity}</p>
    </div>
  ) : null;
};

SectionQuantityMaybe.defaultProps = { className: null, rootClassName: null };

SectionQuantityMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    quantity: Number,
  }),
};

export default SectionQuantityMaybe;
