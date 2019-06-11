import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { PrimaryButton } from '..';

import css from './TransactionPanel.css';

// Functional component as a helper to build ActionButtons for
// provider when state is preauthorized
const SaleCustomerCancelButtonMaybe = props => {
  const {
    className,
    rootClassName,
    showButtons,
    cancelBookingInProgress,
    cancelBookingError,
    onCancelBooking,
  } = props;

  const buttonsDisabled = cancelBookingInProgress;

  const cancelErrorMessage = cancelBookingError ? (
    <p className={css.actionError}>
      <FormattedMessage id="TransactionPanel.cancelBookingFailed" />
    </p>
  ) : null;

  const classes = classNames(rootClassName || css.actionButtons, className);

  return showButtons ? (
    <div className={classes}>
      <div className={css.actionErrors}>{cancelErrorMessage}</div>
      <div className={css.actionButtonWrapper}>
        <PrimaryButton
          inProgress={cancelBookingInProgress}
          disabled={buttonsDisabled}
          onClick={onCancelBooking}
        >
          <FormattedMessage id="TransactionPanel.cancelBooking" />
        </PrimaryButton>
      </div>
    </div>
  ) : null;
};

export default SaleCustomerCancelButtonMaybe;
