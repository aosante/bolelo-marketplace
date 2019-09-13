import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.css';

const SectionVideoLinkMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  const srcURL =
    publicData && publicData.videoLink ? publicData.videoLink.replace('watch?v=', 'embed/') : null;
  return publicData && publicData.videoLink ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.videoLinkTitle" />
      </h2>
      <p className={css.rules}>
        <iframe
          width="560"
          height="315"
          src={srcURL}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
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
