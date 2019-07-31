import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '..';
import { EditListingVideoLinkForm } from '../../forms';

import css from './EditListingVideoLinkPanel.css';

const EditListingVideoLinkPanel = props => {
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
      id="EditListingVideoLinkPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingVideoLinkPanel.createListingTitle" />
  );

  return (
    // it's here where new attributes are added
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingVideoLinkForm
        className={css.form}
        publicData={publicData}
        initialValues={{ videoLink: publicData.videoLink }}
        onSubmit={values => {
          const { videoLink = '' } = values;
          const updateValues = {
            publicData: {
              videoLink,
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

EditListingVideoLinkPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingVideoLinkPanel.propTypes = {
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

export default EditListingVideoLinkPanel;
