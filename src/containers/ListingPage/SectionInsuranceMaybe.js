import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.css';

const SectionInsuranceMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.categoryInsurance ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.insuranceCategoryTitle" />
      </h2>
      <p className={css.rules}>{publicData.categoryInsurance}</p>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.insuranceSubcategoryTitle" />
      </h2>
      <p className={css.rules}>{publicData.subcategoryInsurance}</p>
    </div>
  ) : null;
};

SectionInsuranceMaybe.defaultProps = { className: null, rootClassName: null };

SectionInsuranceMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    categoryInsurance: string,
    subcategoryInsurance: string,
  }),
};

export default SectionInsuranceMaybe;
