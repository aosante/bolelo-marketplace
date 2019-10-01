import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';
import { Logo, NamedLink } from '../../components';

import css from './Footer.css';

const Footer = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <Logo format="desktop" className={css.logo} />
              </NamedLink>
              <div className={css.organizationInfo}>
                <p className={css.organizationCopyright}>
                  <NamedLink name="LandingPage" className={css.copyrightLink}>
                    <FormattedMessage id="Footer.copyright" />
                  </NamedLink>
                </p>
              </div>
            </div>
            <div className={css.infoLinks}>
              <h3>Go to</h3>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink name="NewListingPage" className={css.link}>
                    <FormattedMessage id="Footer.toNewListingPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="AboutPage" className={css.link}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="FaqPage" className={css.link}>
                    <FormattedMessage id="Footer.toFAQPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="HelpPage" className={css.link}>
                    <FormattedMessage id="Footer.toHelpPage" />
                  </NamedLink>
                </li>
              </ul>
            </div>
            <div className={css.searches}>
              <h3>Item Categories</h3>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.household" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.office" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.diy" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.sports" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        's?address=North%20Carolina%2C%20USA&bounds=36.5881568%2C-75.40011900000002%2C33.7528778%2C-84.32186899999999',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.specialEvent" />
                  </NamedLink>
                </li>
              </ul>
            </div>
            <div className={css.extraLinks}>
              <div className={css.legalMatters}>
                <ul className={css.tosAndPrivacy}>
                  <li>
                    <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="BorrowerAgreementPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.borrowerAgreement" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="LenderAgreementPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.lenderAgreement" />
                    </NamedLink>
                  </li>
                <li>
                  <a href="https://www.dropbox.com/s/i68nzrldf6lrucc/Sharing%20Economy%20Rental%20and%20or%20Bailment%20Agreement.docx?dl=0" className={css.legalLink}>Insurance Agreement
                  </a>
                </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
