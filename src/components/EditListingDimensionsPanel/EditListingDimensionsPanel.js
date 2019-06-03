import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '..';
import { EditListingDimensionsForm } from '../../forms';

import css from './EditListingDimensionsPanel.css';

const EditListingDimensionsPanel = props => {
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

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingDimensionsPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingDimensionsPanel.createListingTitle" />
  );

  return (
    // it's here where new attributes are added
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingDimensionsForm
        className={css.form}
        publicData={publicData}
        initialValues={{ dimensions: publicData.dimensions }}
        onSubmit={values => {
          const { dimensions = '' } = values;
          const updateValues = {
            publicData: {
              dimensions,
            },
          };
          onSubmit(updateValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
      />
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingDimensionsPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingDimensionsPanel.propTypes = {
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

export default EditListingDimensionsPanel;
