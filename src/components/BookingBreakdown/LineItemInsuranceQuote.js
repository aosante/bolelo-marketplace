import React from 'react';
import { FormattedMessage } from 'react-intl';
import { formatMoney } from '../../util/currency';
import { string } from 'prop-types';

import css from './BookingBreakdown.css';

const LineinsuranceQuoteMaybe = ({ insuranceQuote, intl }) => {
  const translationKey = 'BookingBreakdown.insuranceFee';
  var formattedInsuranceFee;
  if (insuranceQuote) {
    formattedInsuranceFee = formatMoney(intl, insuranceQuote);
  } else
    formattedInsuranceFee = intl.formatMessage({
      id: 'BookingBreakdown.insurancePlaceholder',
    });
  return (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>
        <FormattedMessage id={translationKey} />
      </span>
      <span className={css.itemValue}>{formattedInsuranceFee}</span>
    </div>
  );
};

LineinsuranceQuoteMaybe.propTypes = {
  insuranceQuote: string,
};

export default LineinsuranceQuoteMaybe;
