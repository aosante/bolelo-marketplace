import React from 'react';
import { bool, func, object, shape, string } from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import classNames from 'classnames';
import config from '../../config';
import { propTypes } from '../../util/types';
import { isStripeInvalidPostalCode, isStripeError } from '../../util/errors';
// import * as validators from '../../util/validators';
import { Button, ExternalLink, FieldTextInput, Form } from '../../components';

import css from './PayoutDetailsForm.css';

const PayoutDetailsUpdateBankAccountComponent = props => (
  <FinalForm
    {...props}
    mutators={{
      ...arrayMutators,
    }}
    render={fieldRenderProps => {
      const {
        className,
        createStripeAccountError,
        disabled,
        handleSubmit,
        inProgress,
        intl,
        invalid,
        pristine,
        ready,
        submitButtonText,
        currentUserId,
        values,
      } = fieldRenderProps;

      const classes = classNames(css.root, className, {
        [css.disabled]: disabled,
      });

      const submitInProgress = inProgress;
      const submitDisabled = pristine || invalid || disabled || submitInProgress;
      const showAsRequired = pristine;

      let error = null;

      if (isStripeInvalidPostalCode(createStripeAccountError)) {
        error = (
          <div className={css.error}>
            <FormattedMessage id="PayoutDetailsForm.createStripeAccountFailedInvalidPostalCode" />
          </div>
        );
      } else if (isStripeError(createStripeAccountError)) {
        const stripeMessage = createStripeAccountError.apiErrors[0].meta.stripeMessage;
        error = (
          <div className={css.error}>
            <FormattedMessage
              id="PayoutDetailsForm.createStripeAccountFailedWithStripeError"
              values={{ stripeMessage }}
            />
          </div>
        );
      } else if (createStripeAccountError) {
        error = (
          <div className={css.error}>
            <FormattedMessage id="PayoutDetailsForm.createStripeAccountFailed" />
          </div>
        );
      }

      const stripeConnectedAccountTermsLink = (
        <ExternalLink href="https://stripe.com/connect-account/legal" className={css.termsLink}>
          <FormattedMessage id="PayoutDetailsForm.stripeConnectedAccountTermsLink" />
        </ExternalLink>
      );

      return config.stripe.publishableKey ? (
        <Form className={classes} onSubmit={handleSubmit}>
          <div className={css.sectionContainer}>
            <h3 className={css.subTitle}>
              <FormattedMessage id="PayoutDetailsForm.accountTypeTitle" />
            </h3>
          </div>

          <p className={css.termsText}>
            <FormattedMessage
              id="PayoutDetailsForm.stripeToSText"
              values={{ stripeConnectedAccountTermsLink }}
            />
          </p>
          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={ready}
          >
            {submitButtonText ? (
              submitButtonText
            ) : (
              <FormattedMessage id="PayoutDetailsForm.submitButtonText" />
            )}
          </Button>
        </Form>
      ) : (
        <div className={css.missingStripeKey}>
          <FormattedMessage id="PayoutDetailsForm.missingStripeKey" />
        </div>
      );
    }}
  />
);

PayoutDetailsUpdateBankAccountComponent.defaultProps = {
  className: null,
  createStripeAccountError: null,
  disabled: false,
  inProgress: false,
  ready: false,
  submitButtonText: null,
  currentUserId: null,
  fieldRenderProps: null,
};

PayoutDetailsUpdateBankAccountComponent.propTypes = {
  className: string,
  createStripeAccountError: object,
  disabled: bool,
  inProgress: bool,
  ready: bool,
  submitButtonText: string,
  currentUserId: propTypes.uuid,
  fieldRenderProps: shape({
    handleSubmit: func,
    invalid: bool,
    pristine: bool,
    values: object,
  }),

  // from injectIntl
  intl: intlShape.isRequired,
};

const PayoutDetailsUpdateBankAccountForm = compose(injectIntl)(
  PayoutDetailsUpdateBankAccountComponent
);

export default PayoutDetailsUpdateBankAccountForm;
