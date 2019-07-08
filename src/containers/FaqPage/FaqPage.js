import React from 'react';
import { StaticPage, TopbarContainer } from '..';
import {
    LayoutSingleColumn,
    LayoutWrapperTopbar,
    LayoutWrapperMain,
    LayoutWrapperFooter,
    Footer,
} from '../../components';

import css from './FaqPage.css';

const FaqPage = () => {
    // prettier-ignore
    return (
        <StaticPage
            title="FAQ"
            schema={{
                '@context': 'http://schema.org',
                '@type': 'FaqPage',
                description: 'Faq page',
                name: 'Faq page',
            }}
        >
            <LayoutSingleColumn>
                <LayoutWrapperTopbar>
                    <TopbarContainer />
                </LayoutWrapperTopbar>

                <LayoutWrapperMain className={css.staticPageWrapper}>
                    <h1 className={css.pageTitle}>FAQ</h1>

                    <div className={css.contentWrapper}>
                        <div className={css.contentSide}>
                            <p>Do you have questions? Please email us at <a href="mailto: bolelo.org@gmail.com">bolelo.org@gmail.com</a></p>
                        </div>

                        <div className={css.contentMain}>
                            <p className={css.question}>
                                Q. 	Why is the Lender/Borrower’s contact information and
                                exact location not visible on the site?
                            </p>
                            <p>
                                Safety of BOLELO community user is very important to us.
                                If you are a Lender and list an item on our site, only the
                                general vicinity (zip code) of your location will be visible
                                to the public.  You should only use our message board to communicate
                                with the potential Lender/Borrower about the item, booking, etc.  We
                                do not recommend our members sharing their exact location, personal
                                information and contact information until the transaction becomes
                                final with the payment.
                            </p>
                            <p className={css.question}>
                                Q.  	I am interested in Lending a few items.
                                What securities do I have on my items that it will be safely returned?
                            </p>
                            <p>
                                First, we ask our members to acknowledge the acceptable amount of wear 
                                from use when lending your items.  You should also never list items that 
                                are fragile or irreplaceable.
                                Bolelo offers an option for you to require the Borrower to purchase insurance 
                                for the item you are Lending.  The exact cost of insurance varies depending on 
                                the item.  Please note that it will increase the cost of Borrowing the item 
                                by 15-30%  when the insurance is factored into the equation which may or may 
                                not affect how well your item will perform in our sharing market place.  If 
                                purchased, Bolelo’s protection and claims process guarantees (well actual term 
                                is bailment insurance, which is insurance-like a product that refers to the 
                                transaction where only temporary possession is considered not the ownership) 
                                should your item gets damaged from Bolelo transaction (up to $5000).  The stipulation 
                                is that it only covers the transaction processed through Bolelo.org.  Please refer to 
                                their rules and guidelines*.

                            </p>
                            <p>Again we take the security of our members and their property very seriously.  </p>
                            <ol>
                                <li>You should only communicate through our platform so there is a record of what transpired in case of a dispute.  </li>
                                <li>Only transact on Bolelo so your item will be covered under our insurance like program* </li>
                                <li>Only agreed to meet the prospect Lender/Borrower in a safe location/time and always let a family/friend know of your plans</li>
                            </ol>
                            <p className={css.question}>Q. Do I need to show my ID when accepting to take possession of the item?</p>
                            <p>
                                Again, the safety of our members and their property is very important to us.  We encourage 
                                safe practice for all our transactions and to help establish the integrity of our members, 
                                you will be asked to show photo ID. If you are the borrower named in the booking agreement, 
                                please be prepared to show your photo identification to prove to the Lender staying who 
                                you say you are.  The lender will also want to take a picture of your photo ID.
                            </p>
                            <p className={css.question}>Q. How much Bolelo charge for the use of the site?</p>
                            <p>
                                Bolelo has a modest fee of 15% of each transaction.  This fee will be deducted from the Lender’s 
                                net earnings from each transaction prior to distribution.
                            </p>
                            <p className={css.question}>Q. How long does it take to receive my money from Lending?</p>
                            <p>
                                The lender will receive net transaction fee (daily fee x number of days – 15%) in their account 
                                within 3 to 5 business days after the completion of a transaction.  The exact number of days 
                                vary depending on your financial institution.
                            </p>
                            <p className={css.question}>Q. I have made a booking arrangement to borrow an item from a Lender.  My plans changed and no longer need the item.  What is the cancellation policy?</p>
                            <p>
                                You must send a cancellation request by 6 pm on the eve of the scheduled booking start date 
                                to receive your full refund.  To protect the Lender of possible missed opportunity, if you 
                                miss this deadline you will forfeit 100% of fees paid.
                            </p>
                            <p className={css.question}>Q. I need the item for a few more days.  How do I extend my rental?  </p>
                            <p>
                                First, you should contact the LENDER to make sure it's available.  If available please log on 
                                to your account and create a new BOLELO transaction for the additional time you need.  This will 
                                ensure your BOLELO is protected.  Please note any cash transaction or transaction outside of 
                                BOLELO does not qualify for the protection coverage.
                            </p>
                            <p className={css.question}>Q. I have a dispute with my Lender/Borrower.  How do I handle this?</p>
                            <p>
                                If a dispute occurs after the transaction due to damage/loss/stolen item or for any other 
                                matter you must do the following.
                            </p>
                            <ol>
                                <li>Contact Lender/Borrower immediately (within 24 hours) and find an amicable resolution that works for both parties. This may mean one party will have to agree to pay for the repair or replace the item.  This is the fastest way to resolve the dispute. </li>
                                <li>If the bailment insurance has been purchased for the item then you may initiate the filing of a claim for the loss/damage.  Please understand that this may be a lengthy process so we ask you to be patient during the claims process.</li>
                            </ol>
                            <p>
                                *Our insurance-like program has conditions and limitation set by the providing third party.  
                                A reasonable replacement amount should be agreed prior to releasing the item to the Borrower 
                                in case of a dispute.  Bolelo coordinates the transaction of linking Borrower with Lenders only. 
                                 Bolelo does not guarantee, express or implied on either party, item, does not mediate or arbitrate 
                                 disputes that may arise.  Lender/Borrower assumes and accepts a certain risk associated with 
                                 lending/borrowing items.
                            </p>
                            <p  className={css.question}>Q. Supporting charity is a good measure of sustainable business.  Does Bolelo partner with charity?</p>
                            <p>
                                We have chosen to donate 5% of proceeds to 501 (c) 3 non-profit, LBSKF (30-0162842), based in 
                                Raleigh North Carolina.  This is a small group of good people (100% volunteers) doing many great 
                                things for the community.
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

export default FaqPage;
