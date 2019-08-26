import React, { useState } from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldSelect } from '../../components';
import { required, composeValidators } from '../../util/validators';
import { insurance_categories } from '../../insurance-custom-config';

import css from './EditListingInsuranceForm.css';
export const EditListingInsuranceFormComponent = props => {
  var [subCategories, setSubCategories] = useState([]);
  var [category, setCategory] = useState('Select category');
  var cont = 1;
  const [wantsInsurance, setWantsInsurance] = useState(false);
  const handleFocusCategories = e => {
    var x = insurance_categories.filter(el => {
      return el.key === category;
    });
    if (x[0]) {
      var res = x[0].value;
      setSubCategories(res);
    }
  };
  const handleOnClickCategory = e => {
    if (cont !== 1) {
      setCategory(e.target.value);
      cont = 1;
    } else {
      cont = cont + 1;
    }
  };
  const handleChange = e => {
    setWantsInsurance(e.target.value === 'true' ? true : false);
    console.log(wantsInsurance);
  };
  return (
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

        const categoriesPlaceholder = intl.formatMessage({
          id: 'EditListingInsuranceForm.categoriesPlaceholder',
        });
        const categoriesRequired = intl.formatMessage({
          id: 'EditListingInsuranceForm.categoriesRequired',
        });
        const subcategoriesPlaceholder = intl.formatMessage({
          id: 'EditListingInsuranceForm.subcategoriesPlaceholder',
        });
        const subcategoriesRequired = intl.formatMessage({
          id: 'EditListingInsuranceForm.subcategoriesRequired',
        });

        const { updateListingError, showListingsError } = fetchErrors || {};
        const errorMessage = updateListingError ? (
          <p className={css.error}>
            <FormattedMessage id="EditListingInsuranceForm.updateFailed" />
          </p>
        ) : null;
        const errorMessageShowListing = showListingsError ? (
          <p className={css.error}>
            <FormattedMessage id="EditListingInsuranceForm.showListingFailed" />
          </p>
        ) : null;

        const classes = classNames(css.root, className);
        const submitReady = updated && pristine;
        const submitInProgress = updateInProgress;
        const submitDisabled = invalid || disabled || submitInProgress;

        const insuranceForm = (
          <React.Fragment>
            <FieldSelect
              className={css.category}
              name="categoryInsurance"
              id="categoryInsurance"
              validate={composeValidators(required(categoriesRequired))}
              onClick={handleOnClickCategory}
            >
              <option disabled value="">
                {categoriesPlaceholder}
              </option>
              {insurance_categories.map(c => (
                <option key={c.key} value={c.key}>
                  {c.key}
                </option>
              ))}
            </FieldSelect>

            <FieldSelect
              className={css.category}
              name="subcategoryInsurance"
              id="subcategoryInsurance"
              validate={composeValidators(required(subcategoriesRequired))}
              onFocus={handleFocusCategories}
            >
              <option disabled value="">
                {subcategoriesPlaceholder}
              </option>
              {subCategories.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </FieldSelect>
          </React.Fragment>
        );

        return (
          <Form className={classes} onSubmit={handleSubmit}>
            {errorMessage}
            {errorMessageShowListing}

            <select
              className={css.category}
              name="insuranceOption"
              id="insuranceOption"
              value={wantsInsurance}
              onChange={handleChange}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
            {wantsInsurance ? insuranceForm : null}
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
};

EditListingInsuranceFormComponent.defaultProps = { className: null, fetchErrors: null };

EditListingInsuranceFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
};

export default compose(injectIntl)(EditListingInsuranceFormComponent);
