import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import calendarImage from './img/calendar.png';
import experienceImage from './img/experience.png';
import reviewImage from './img/review.png';

import css from './SectionHowItWorks.css';

const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <span>
          How <span className={css.green}>BOLELO</span> works
        </span>
        <br />
        {/* <FormattedMessage id="SectionHowItWorks.titleLineTwo" /> */}
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.image}>
            <img
              src={calendarImage}
              style={{ width: '200px', height: '190px' }}
              alt="Calendar icon"
            />
          </div>
          <h2 className={css.stepTitle}>
            <span className={css.number}>1</span>
            <FormattedMessage id="SectionHowItWorks.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part1Text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.image}>
            <img
              src={experienceImage}
              style={{ width: '200px', height: '190px' }}
              alt="Happy person icon"
            />
          </div>
          <h2 className={css.stepTitle}>
            <span className={css.number}>2</span>
            <FormattedMessage id="SectionHowItWorks.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part2Text" />
          </p>
        </div>

        <div className={css.step}>
          <div className={css.image}>
            <img src={reviewImage} style={{ width: '200px', height: '190px' }} alt="Reviews icon" />
          </div>
          <h2 className={css.stepTitle}>
            <span className={css.number}>3</span>
            <FormattedMessage id="SectionHowItWorks.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionHowItWorks.part3Text" />
          </p>
        </div>
      </div>

      <div className={css.createListingLink}>
        <NamedLink name="NewListingPage">
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
