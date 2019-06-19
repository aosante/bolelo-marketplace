import React from 'react';
import { FormattedMessage } from 'react-intl';
import { string } from 'prop-types';

import css from './BookingBreakdown.css';

const LineItemQuantityMaybe = ({ itemQuantity }) => {
  const translationKey = 'BookingBreakdown.numberOfItems';

  return (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>
        <FormattedMessage id={translationKey} />
      </span>
      <span className={css.itemValue}>{itemQuantity}</span>
    </div>
  );
};

LineItemQuantityMaybe.propTypes = {
  itemQuantity: string,
};

export default LineItemQuantityMaybe;
