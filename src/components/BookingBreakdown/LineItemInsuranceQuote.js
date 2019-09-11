import React from 'react';
import { FormattedMessage } from 'react-intl';
import { formatMoney } from '../../util/currency';
import { string } from 'prop-types';

import css from './BookingBreakdown.css';

const LineinsuranceQuoteMaybe = ({ insuranceQuote, intl }) => {
  const translationKey = 'BookingBreakdown.insuranceFee';
  var formattedInsuranceFee;
  var formattedInsuranceFeeMessage;
  if (insuranceQuote) {
    formattedInsuranceFee = formatMoney(intl, insuranceQuote);
    formattedInsuranceFeeMessage = '';
  } else {
    formattedInsuranceFee = intl.formatMessage({
      id: 'BookingBreakdown.insurancePlaceholder',
    });
    formattedInsuranceFeeMessage = intl.formatMessage({
      id: 'BookingBreakdown.insuranceAddedOnRequest',
    });
  }
  return (
    <React.Fragment>
      <div className={css.lineItem}>
        <span className={css.itemLabel}>
          <FormattedMessage id={translationKey} />
        </span>
        <span className={css.itemValue}>{formattedInsuranceFee}</span>
      </div>
      <p className={css.smallPrint}>{formattedInsuranceFeeMessage}</p>
    </React.Fragment>
  );
};

LineinsuranceQuoteMaybe.propTypes = {
  insuranceQuote: string,
};

export default LineinsuranceQuoteMaybe;
