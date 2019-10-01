import React, { useState } from 'react';
import { bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { Form, Button, FieldSelect, FieldSelectCategory } from '../../components';
import { required, composeValidators } from '../../util/validators';
import { insurance_categories } from '../../insurance-custom-config';
import swal from 'sweetalert2';

import css from './EditListingInsuranceForm.css';
export const EditListingInsuranceFormComponent = props => {
  var [subCategories, setSubCategories] = useState([]);
  var [category, setCategory] = useState('Select category');
  const [wantsInsurance, setWantsInsurance] = useState(false);
  const handleOnChangeCategory = e => {
    var x = insurance_categories.filter(el => {
      return el.key === e.target.value;
    });
    if (x[0]) {
      var res = x[0].value;
      setSubCategories(res);
    }
  };
  const handleChange = e => {
    setWantsInsurance(e.target.value === 'true' ? true : false);
  };
  // const el = document.createElement('div');
  // el.innerHTML =
  //   "<a class=EditListingInsuranceForm_moreInfoLink__1PlN6 href='https://www.dropbox.com/s/i68nzrldf6lrucc/Sharing%20Economy%20Rental%20and%20or%20Bailment%20Agreement.docx?dl=0' target='_blank'>More info</a>";
  const handleClickInsuranceExplanation = e => {
    swal.fire({
      title: 'INFO',
      html:
        '<p style="text-align:left">We are NOT able to offer a protection plan on the motorized blades, including but not limited to chain saws, table saws, reciprocating saws. Also, aircraft of any kind, powered watercraft of any kind (including boats and jet skis), Autos of any kind (cars, trucks, snowmobiles, ATV, RV) and heavy construction related items most frequently involving earthwork operations. For a detailed list of assets not eligible for coverage and more information ' +
        "<a class=FaqPage_link__3MGaC href='https://www.dropbox.com/s/i68nzrldf6lrucc/Sharing%20Economy%20Rental%20and%20or%20Bailment%20Agreement.docx?dl=0' target='_blank'>click here</a></p>",
      icon: 'info',
      closeOnClickOutside: false,
    });
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

        const insuranceExplanation = intl.formatMessage({
          id: 'EditListingInsuranceForm.insuranceExplanation',
        });
        const insuranceCoverageInfo = intl.formatMessage({
          id: 'EditListingInsuranceForm.insuranceCoverageInfo',
        });

        const classes = classNames(css.root, className);
        const submitReady = updated && pristine;
        const submitInProgress = updateInProgress;
        const submitDisabled = invalid || disabled || submitInProgress;

        const insuranceForm = (
          <React.Fragment>
            <FieldSelectCategory
              className={css.category}
              name="categoryInsurance"
              id="categoryInsurance"
              validate={composeValidators(required(categoriesRequired))}
              changeCategory={handleOnChangeCategory}
            >
              <option disabled value="">
                {categoriesPlaceholder}
              </option>
              {insurance_categories.map(c => (
                <option key={c.key} value={c.key}>
                  {c.key}
                </option>
              ))}
            </FieldSelectCategory>

            <FieldSelect
              className={css.category}
              name="subcategoryInsurance"
              id="subcategoryInsurance"
              validate={composeValidators(required(subcategoriesRequired))}
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

            <p className={css.sideNote}>{insuranceCoverageInfo}</p>
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
            <p className={css.sideNote}>
              {insuranceExplanation}
              <a className={css.insuranceLink} onClick={handleClickInsuranceExplanation}>
                here.
              </a>
            </p>
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
