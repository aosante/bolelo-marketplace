import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldTextInput } from '../../components';
import { required, minQuantity, composeValidators } from '../../util/validators';

import css from './EditListingQuantityForm.css';

export const EditListingQuantityFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        className,
        disabled,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } = fieldRenderProps;

      const quantityLabelMessage = intl.formatMessage({
        id: 'EditListingQuantityForm.quantityLabel',
      });
      const quantityPlaceholderMessage = intl.formatMessage({
        id: 'EditListingQuantityForm.quantityPlaceholder',
      });

      const quantityRequiredMesssage = intl.formatMessage({
        id: 'EditListingQuantityForm.quantityRequired',
      });

      const minimumQuantityMesssage = intl.formatMessage({
        id: 'EditListingQuantityForm.minimumQuantity',
      });

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingQuantityForm.updateFailed" />
        </p>
      ) : null;
      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingQuantityForm.showListingFailed" />
        </p>
      ) : null;

      const classes = classNames(css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}
          <FieldTextInput
            id="quantity"
            name="quantity"
            className={css.quantity}
            type="number"
            label={quantityLabelMessage}
            placeholder={quantityPlaceholderMessage}
            validate={composeValidators(
              required(quantityRequiredMesssage),
              minQuantity(minimumQuantityMesssage)
            )}
          />

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingQuantityFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingQuantityFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

export default compose(injectIntl)(EditListingQuantityFormComponent);
