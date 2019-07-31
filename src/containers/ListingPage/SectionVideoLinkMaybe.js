import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.css';

const SectionVideoLinkMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.videoLink ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.videoLinkTitle" />
      </h2>
      <p className={css.rules}>
        <a href={publicData.videoLink} rel="noopener noreferrer" target="_blank">
          {publicData.videoLink}
        </a>
      </p>
    </div>
  ) : null;
};

SectionVideoLinkMaybe.defaultProps = { className: null, rootClassName: null };

SectionVideoLinkMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    dimensions: string,
  }),
};

export default SectionVideoLinkMaybe;
