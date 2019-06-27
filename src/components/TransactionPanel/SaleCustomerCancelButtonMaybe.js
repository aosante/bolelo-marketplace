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
    startDate,
  } = props;

  //startDate comes in as one day before, so one day needs to be added to calculate hours
  const realStartingDate = new Date(startDate);
  realStartingDate.setDate(realStartingDate.getDate() + 1);

  console.log(realStartingDate, startDate);

  const currentDate = new Date();

  const getHoursToStart = (start, now) => {
    return Math.abs(start - now) / 36e5;
  };

  const cantCancelBooking = _ => {
    let cantCancel = false;
    const hoursToStart = getHoursToStart(realStartingDate, currentDate);
    console.log(hoursToStart);
    if (hoursToStart < 24) cantCancel = true;
    return cantCancel;
  };

  const buttonsDisabled = cancelBookingInProgress || cantCancelBooking();

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
