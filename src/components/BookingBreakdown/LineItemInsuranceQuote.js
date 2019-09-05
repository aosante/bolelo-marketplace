import React from 'react';
import { FormattedMessage } from 'react-intl';
import { formatMoney } from '../../util/currency';
import { string } from 'prop-types';

import css from './BookingBreakdown.css';

const LineinsuranceQuoteMaybe = ({ insuranceQuote, intl }) => {
  const translationKey = 'BookingBreakdown.insuranceQuote';
  var formattedInsuranceQuote;
  if (insuranceQuote) {
    formattedInsuranceQuote = formatMoney(intl, insuranceQuote);
  } else formattedInsuranceQuote = 'Added on request';
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
