import React from 'react';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './HelpPage.css';

const HelpPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Help"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HelpPage',
        description: 'Help page',
        name: 'Help page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Help</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>We are located in Raleigh, North Carolina.</p>
            </div>

            <div className={css.contentMain}>
              <p>
                Do you have questions?		Email us: <a href="mailto: GoodNeighbor@BOLELO.org">GoodNeighbor@BOLELO.org</a>
              </p>
              <p>
                
              </p>
              <p>Please be patient with us in case there’s a delay in response to your questions or concerns.  </p>

            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default HelpPage;
