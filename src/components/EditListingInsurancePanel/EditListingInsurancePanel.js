import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditListingInsuranceForm } from '../../forms';
import config from '../../config.js';

import css from './EditListingInsurancePanel.css';

const EditListingInsurancePanel = props => {
  const {
    className,
    rootClassName,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { publicData } = currentListing.attributes;

  const panelTitle = currentListing.id ? (
    <FormattedMessage
      id="EditListingInsurancePanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingInsurancePanel.createListingTitle" />
  );
  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingInsuranceForm
        className={css.form}
        initialValues={{
          categoryInsurance: '',
          subcategoryInsurance: '',
        }}
        onSubmit={values => {
          const { categoryInsurance = '', subcategoryInsurance = '' } = values;
          const updateValues = {
            publicData: {
              categoryInsurance,
              subcategoryInsurance,
            },
          };
          onSubmit(updateValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateError={errors.updateListingError}
        updateInProgress={updateInProgress}
        capacityOptions={config.custom.capacityOptions}
      />
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingInsurancePanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingInsurancePanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingInsurancePanel;
