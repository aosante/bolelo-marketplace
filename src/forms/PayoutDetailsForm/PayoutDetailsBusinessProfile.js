import React from 'react';
import { bool, string } from 'prop-types';
import { intlShape, FormattedMessage } from 'react-intl';
import * as validators from '../../util/validators';
import { FieldTextInput } from '../../components';

import merchantCategoryCodesUS from './merchantCategoryCodesUS';
import css from './PayoutDetailsForm.css';

const PayoutDetailsBusinessProfile = props => {
  const { fieldId, disabled, intl, showBusinessURLField, showMCCForUSField } = props;

  const isBusinessProfileNeeded = showBusinessURLField || showMCCForUSField;
  const mccLabel = intl.formatMessage({ id: 'PayoutDetailsForm.businessMCCForUSLabel' });
  // const mccPlaceholder = intl.formatMessage({
  //   id: 'PayoutDetailsForm.businessMCCForUSPlaceholder',
  // });
  const mccRequired = validators.required(
    intl.formatMessage({ id: 'PayoutDetailsForm.businessMCCForUSRequired' })
  );

  const businessUrlLabel = intl.formatMessage({ id: 'PayoutDetailsForm.businessURLLabel' });
  const businessUrlPlaceholder = intl.formatMessage({
    id: 'PayoutDetailsForm.businessURLPlaceholder',
  });

  const businessUrlRequired = validators.validBusinessURL(
    intl.formatMessage({ id: 'PayoutDetailsForm.businessURLRequired' })
  );

  return !isBusinessProfileNeeded ? (
    <React.Fragment>
      {showMCCForUSField ? (
        <FieldTextInput
          id={`${fieldId}.mcc`}
          name={`${fieldId}.mcc`}
          className={css.textInputRow}
          autoComplete="mcc"
          disabled={disabled}
          label={mccLabel}
          placeholder={merchantCategoryCodesUS[0].label}
          type="text"
          validate={mccRequired}
        />
      ) : /* <option key={merchantCategoryCodesUS[0].category} value={merchantCategoryCodesUS[0].mcc}>
            {merchantCategoryCodesUS[0].label}
          </option> */
      null}

      {showBusinessURLField ? (
        <React.Fragment>
          <FieldTextInput
            id={`${fieldId}.url`}
            name={`${fieldId}.url`}
            className={css.textInputRow}
            autoComplete="url"
            disabled={disabled}
            label={businessUrlLabel}
            placeholder={businessUrlPlaceholder}
            type="text"
            validate={businessUrlRequired}
          />
          <p className={css.sideNote}>
            <FormattedMessage id="PayoutDetailsForm.businessProfileNote" />
          </p>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  ) : null;
};

PayoutDetailsBusinessProfile.defaultProps = {
  fieldId: null,
  disabled: false,
  showBusinessURLField: false,
  showMCCForUSField: false,
};

PayoutDetailsBusinessProfile.propTypes = {
  fieldId: string,
  disabled: bool,
  showBusinessURLField: bool,
  showMCCForUSField: bool,

  // from injectIntl
  intl: intlShape.isRequired,
};

export default PayoutDetailsBusinessProfile;
