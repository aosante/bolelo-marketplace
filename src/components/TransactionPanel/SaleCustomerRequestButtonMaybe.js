import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { PrimaryButton } from '..';

import css from './TransactionPanel.css';

// Functional component as a helper to build ActionButtons for
// provider when state is preauthorized
const SaleCustomerRequestButtonMaybe = props => {
  const {
    className,
    rootClassName,
    showButtons,
    cancelRequestInProgress,
    cancelRequestError,
    onCancelRequest,
  } = props;

  const buttonsDisabled = cancelRequestInProgress;

  const cancelErrorMessage = cancelRequestError ? (
    <p className={css.actionError}>
      <FormattedMessage id="TransactionPanel.cancelRequestFailed" />
    </p>
  ) : null;

  const classes = classNames(rootClassName || css.actionButtons, className);

  return showButtons ? (
    <div className={classes}>
      <div className={css.actionErrors}>{cancelErrorMessage}</div>
      <div className={css.actionButtonWrapper}>
        <PrimaryButton
          inProgress={cancelRequestInProgress}
          disabled={buttonsDisabled}
          onClick={onCancelRequest}
        >
          <FormattedMessage id="TransactionPanel.cancelRequest" />
        </PrimaryButton>
      </div>
    </div>
  ) : null;
};

export default SaleCustomerRequestButtonMaybe;
