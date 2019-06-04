import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.css';

const SectionInfoMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.info ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.infoTitle" />
      </h2>
      <p className={css.rules}>{publicData.info}</p>
    </div>
  ) : null;
};

SectionInfoMaybe.defaultProps = { className: null, rootClassName: null };

SectionInfoMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    info: string,
  }),
};

export default SectionInfoMaybe;
