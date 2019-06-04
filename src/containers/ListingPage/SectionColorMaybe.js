import React from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import css from './SectionRulesMaybe.css';

const SectionColorMaybe = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  return publicData && publicData.color ? (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.colorTitle" />
      </h2>
      <p className={css.rules}>{publicData.color}</p>
    </div>
  ) : null;
};

SectionColorMaybe.defaultProps = { className: null, rootClassName: null };

SectionColorMaybe.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    color: string,
  }),
};

export default SectionColorMaybe;
