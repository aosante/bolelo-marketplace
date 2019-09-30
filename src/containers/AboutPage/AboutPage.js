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
              <p>Why buy when you can Borrow?
                Why buy when you only use it seldom and have no place to store it?
                If you are like many people we meet then you too have probably thought the same thing.
              </p>
            </div>

            <div className={css.contentMain}>
              <h2>
                So, what do we do with all the stuff we’ve bought but rarely use? Some of the items we have forgotten we even have.  We bought it because we needed it.  Now it sits in our garage, attic, shed, etc.
                How about that one item you really need but are not quite ready to make the purchase?
                BOLELO solves this problem with easy to use sharing platform by connecting potential Borrowers with people who are willing to Lend stuff they own.
              </h2>

              <p>
                Borrowing/Lending, however, is not so easy.  Often it’s hard to find a specific item you are looking for. We also know that goodwill Borrowing/Lending with friends and neighbors is not always ideal as it could result in ruining good relationships.  You will agree that a positive transaction with friendly strangers is much better than ruined relationships from a negative experience with friends.  With BOLELO, Borrowers save $$ and Lenders make $$.
              </p>
              <p>
                Please send us your feedback and site improvement requests and we will do our best to meet your expectation.  Please keep in mind that we are a very small company.  We are so small that the sharks from the hit TV show Shark Tank probably would not even consider us a company, just a website 
  Also, we hope that you will have patience with us as we learn and experience the growing pain while building the platform that meets your approval and creates an opportunity for you previously not available.
  
              </p>
              <p>
<<<<<<< HEAD
              Please send us your feedback and site improvement requests and we will do our best to meet your expectation.  Please keep in mind that we are a very small company.  We are so small that the sharks from the hit TV show Shark Tank probably would not even consider us a company, just a website <span role="img" aria-label="smiley-face">🙂</span>
Also, we hope that you will have patience with us as we learn and experience the growing pain while building the platform that meets your approval and creates an opportunity for you previously not available.
</p>
=======
                Our mission is simple.  We wish to make sharing a community thing by linking Borrowers and Lenders.  We dare to even say we are creating a better community and less wasteful environment that we can pass down to our children.  We hope you will share BOLELO with others.
              </p>

              <p >BTW, we have chosen to donate 5% of proceeds to LB Side Kick Foundation (30-0162842), a 501 (c) 3, non-profit, based in Raleigh.  This is a small group of good people (100% volunteers) doing many great things for the community.     </p>

>>>>>>> parent of 1c3ce9a9... Change to new email address,  add more information of insurance not covered items, about us and faq new format

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
