import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldTextInput } from '../../components';
import { required, composeValidators } from '../../util/validators';

import css from './EditListingBrandForm.css';

export const EditListingBrandFormComponent = props => (
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

      const brandLabelMessage = intl.formatMessage({
        id: 'EditListingBrandForm.brandLabel',
      });
      const brandPlaceholderMessage = intl.formatMessage({
        id: 'EditListingBrandForm.brandPlaceholder',
      });
      const brandRequiredMesssage = intl.formatMessage({
        id: 'EditListingQuantityForm.brandRequired',
      });

      const modelLabelMessage = intl.formatMessage({
        id: 'EditListingBrandForm.modelLabel',
      });
      const modelPlaceholderMessage = intl.formatMessage({
        id: 'EditListingBrandForm.modelPlaceholder',
      });

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingBrandForm.updateFailed" />
        </p>
      ) : null;
      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingBrandForm.showListingFailed" />
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
            id="brand"
            name="brand"
            className={css.brand}
            type="textarea"
            label={brandLabelMessage}
            placeholder={brandPlaceholderMessage}
            validate={composeValidators(required(brandRequiredMesssage))}
          />

          <FieldTextInput
            id="model"
            name="model"
            className={css.brand}
            type="textarea"
            label={modelLabelMessage}
            placeholder={modelPlaceholderMessage}
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

EditListingBrandFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingBrandFormComponent.propTypes = {
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

export default compose(injectIntl)(EditListingBrandFormComponent);
