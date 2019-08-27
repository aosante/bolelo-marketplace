import React from 'react';
import { FormattedMessage } from 'react-intl';
import { formatMoney } from '../../util/currency';
import { string } from 'prop-types';

import css from './BookingBreakdown.css';

const LineinsuranceQuoteMaybe = ({ insuranceFee, intl }) => {
  const translationKey = 'BookingBreakdown.insuranceQuote';
  var formattedInsuranceQuote = '$0.00';
  if (insuranceFee) {
    formattedInsuranceQuote = formatMoney(intl, insuranceFee);
  }
  return (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>
        <FormattedMessage id={translationKey} />
      </span>
      <span className={css.itemValue}>{formattedInsuranceQuote}</span>
    </div>
  );
};

LineinsuranceQuoteMaybe.propTypes = {
  insuranceQuote: string,
};

export default LineinsuranceQuoteMaybe;
