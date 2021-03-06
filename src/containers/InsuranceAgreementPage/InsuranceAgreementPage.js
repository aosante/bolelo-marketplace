import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { TopbarContainer } from '../../containers';
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  InsuranceAgreement,
} from '../../components';
import config from '../../config';

import css from './InsuranceAgreementPage.css';

const InsuranceAgreementPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = [
    {
      text: intl.formatMessage({ id: 'TermsOfServicePage.privacyTabTitle' }),
      selected: false,
      linkProps: {
        name: 'PrivacyPolicyPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'TermsOfServicePage.tosTabTitle' }),
      selected: false,
      linkProps: {
        name: 'TermsOfServicePage',
      },
    },
    {
      text: intl.formatMessage({ id: 'LegalTbs.borrowerAgreement' }),
      selected: false,
      linkProps: {
        name: 'BorrowerAgreementPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'LegalTbs.lenderAgreement' }),
      selected: false,
      linkProps: {
        name: 'LenderAgreementPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'LegalTbs.insuranceAgreement' }),
      selected: true,
      linkProps: {
        name: 'InsuranceAgreementPage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage(
    { id: 'InsuranceAgreementPage.schemaTitle' },
    { siteTitle }
  );
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="InsuranceAgreementPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="InsuranceAgreementPage.heading" />
            </h1>
            <h2>Between BOLELO and BOLELO USER (Borrower/Lender)</h2>
            <InsuranceAgreement />
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

const { bool } = PropTypes;

InsuranceAgreementPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const InsuranceAgreementPage = compose(
  connect(mapStateToProps),
  injectIntl
)(InsuranceAgreementPageComponent);

export default InsuranceAgreementPage;
