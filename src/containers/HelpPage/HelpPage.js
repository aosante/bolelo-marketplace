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
              <p>Do you have questions? Please email us at <a href="mailto: bolelo.org@gmail.com">bolelo.org@gmail.com</a> We are based in Raleigh North Carolina.</p>
            </div>

            <div className={css.contentMain}>
              <p>
                We value your feedback.  User experience is important to us so please send us your feedback and site
                improvement requests and we will do our best to meet your expectation.  Please keep in mind that we
                are a very small company, actually just one person, for now :).  The sharks from the hit TV show Shark
                Tank will not even consider this a company, just a website.
              </p>
              <p>
                We hope that you will have patience with us as we learn and experience the growing pain while
                building the site that meets your approval and creates an opportunity for you previously not available.
              </p>

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
