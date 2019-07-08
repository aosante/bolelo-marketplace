import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './AboutPage.css';

const AboutPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Saunatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>About Us</h1>

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>So, what do we do with all the stuff we’ve bought but rarely use?
              </p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Some of the items we probably forgot we even have.  We bought it because we needed it but now it sits in our garage, attic, shed, etc.
                How about, this one item you really need but you are not quite ready to make the purchase?
              </h2>

              <p>
                We live in a diverse, caring community of friendly neighbors who are willing to share.
                We are all aware of our ever-changing commodity-driven culture and our need to buy everything.
                We can promote healthy community via sharing between a neighbor to another friendly neighbor.
                Bolelo solves these two-part problems with our easy to use sharing market place platform.
                Bolelo links Borrowers and Lenders for a simple sharing transaction.
              </p>
              <p>
                Why buy when you can Borrow?
                Why buy when you only use seldom and have no place to store it?
              </p>
              <p>
                It's definitely better for your wallet
                It promotes less clutter around the house and better for our environment.
                It can help generate extra $$ to help pay your expenses all while promoting sharing culture.
              </p>

              <h3 className={css.subtitle}>So, Just BOLELO it! </h3>

              <p>
                We started this site because we needed the answers to the questions above.
                If you are like many people we meet then you too have probably thought the same.
                We hope you will find the site to be useful.  Please share BOLELO with your friends.
                Help us create a better community and less wasteful environment that we can pass down to our children.
              </p>

              <p>
                We have chosen to donate 5% of proceeds to 501 (c) 3 non-profits, LBSKF (30-0162842), based in Raleigh North Carolina.
                This is a small group of good people (all volunteers) doing many great things for the community.
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

export default AboutPage;
