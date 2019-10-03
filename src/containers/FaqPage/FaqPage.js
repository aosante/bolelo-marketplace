import React from 'react';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import swal from 'sweetalert2';

import css from './FaqPage.css';
const handleInsuranceInfo = e => {
  swal.fire({
    title: 'INFO',
    html:
      '<p style="text-align:left">We are NOT able to offer a protection plan on the motorized blades, including but not limited to chain saws, table saws, reciprocating saws. Also, aircraft of any kind, powered watercraft of any kind (including boats and jet skis), Autos of any kind (cars, trucks, snowmobiles, ATV, RV) and heavy construction related items most frequently involving earthwork operations. For a detailed list of assets not eligible for coverage and more information ' +
      "<a class=FaqPage_link__3MGaC href='/insurance-agreement' target='_blank'>click here</a></p>",
    icon: 'info',
    closeOnClickOutside: false,
  });
};
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
                            <p>Do you have questions? Please email us at <a href="mailto: GoodNeighbor@BOLELO.org">GoodNeighbor@BOLELO.org</a></p>
                        </div>

                        <div className={css.contentMain}>
                            <p  className={css.question}>Q. What items can I post?</p>
                            <p>
                            We can think so many things you may own that others may need on a short term basis.  Following are just a short examples
                            <br/><br/>
                            Drill, canoe, ladder, concrete mixer, kayak, trailer, paint sprayer, pressure washer, bike, tent, camping gear, canoe/kayak, surf & paddleboard, skis, tables, chairs, projector, projector screen, PA system, speakers, party lights, drone, DJ equipment, scooters, musical instrument, camera, chop saw, router, baby stroller, generator…the list goes on.  Look around your house, office, attic, garage, storage shed.  Be creative
                            <br/><br/>
                            Heres’s a list of items that are <b>prohibited</b> from our site
                            <br/><br/>
                            Firearms, fireworks or weapons of any kind, people or animal, medical devices, alcohol, tobacco, drugs and drug paraphernalia, items promoting illegal activity and highly regulated items, pornography and mature content, items that violate third party intellectual property rights, food or other perishables, items stolen, condemned or subject to legal investigation.
                            </p>
                            <p  className={css.question}>Q. I am interested in Lending a few items.  I am afraid my items may get damaged.  Do you offer any protection plan?</p>
                            <p>
                            First, we ask our Lenders to acknowledge a certain amount of wear and tear from use when lending your items.  You should also never list items that are fragile or irreplaceable.  There are some items such as weapons, illegal paraphernalia, medical devices and other regulated items that are not allowed on BOLELO (see the complete list in the Lender agreement).<br/><br/>
                            BOLELO is proud to be able to offer “Product Damage Protection (PDP)”, an insurance-like product to our members so you always have a peace of mind when listing your valuables on our sharing platform. The PDP, also known as the bailment will be underwritten by one of the nation’s largest insurers The Hartford/Y-Risk.  For more detailed information, please click <a onClick={handleInsuranceInfo} className={css.link}>here.</a><br/><br/>
                            How it works.<br/><br/>
                            When listing your item, you will notice the option to require the Borrower to purchase the insurance (PDP).  Depending on the item you are listing, you may or may not feel its necessary to make such a requirement.  Protection requirement, while very affordable (usually only a couple of dollars per day depending on the item), will increase the final cost to the Borrower at the checkout.<br/><br/>
                            We take the safety of our members and their property very seriously.<br/><br/>
                            <ul><li>1. You should only communicate through our platform so there is a record of what transpired in case of a dispute.</li><br/>
                            <li>2. Only transact on BOLELO so your item will be covered under PDP.</li><br/>
                            <li>3. Only agreed to meet the prospect Lender/Borrower in a safe location/time and always let a family/friend know of your plans.</li></ul><br/>
                            </p>
                            <p  className={css.question}>Q. My item came back damaged.  How do I handle the dispute with the Borrower/Lender?</p>
                            <p>
                            If a dispute occurs after the transaction due to damage/loss/stolen item or for any other matter you must do the following.<br/><br/>
                            <ul><li>1. Contact Lender/Borrower immediately (within 24 hours) and find an amicable resolution that works for both parties. This may mean one party will have to agree to pay for the repair or replace the item.  This is the fastest way to resolve the dispute.</li><br/>
                            <li>2. If the Product Damage Protection has been purchased for the item then you may initiate the filing of a claim for the loss/damage.  <u>All claims must be made within 7 days of the completion of the BOLELO transaction</u>.  Please understand that this may be a lengthy process so we ask you to be patient during the claims process.  Your booking confirmation email will have a link to the “Claim Bot” to start the claims process.</li><br/></ul>
                            *Our insurance-like program has conditions and limitation set by the providing third party.  A reasonable replacement amount should be agreed prior to releasing the item to the Borrower in case of a dispute.<br/><br/>
                            BOLELO coordinates the transaction of linking Borrower with Lenders only.  BOLELO does not guarantee, express or implied on either party or item and also does not mediate or arbitrate disputes that may arise.  Lender/Borrower assumes and accepts a certain risk associated with lending/borrowing items.
                            <p  className={css.question}>Q. Do I need to show my ID when accepting to take possession of the item?</p>
                            <p>
                            Again, the safety of our members and their property is very important to us.  We encourage safe practice for all our transactions and to help establish the integrity of our members, you will be asked to show photo ID. If you are the borrower named in the booking agreement, please be prepared to show your photo identification to prove to the Lender stating who you say you are.  The lender will also want to take a picture of your photo ID.
                            </p>
                            <p  className={css.question}>Q. Why is the Lender/Borrower’s contact information and exact location not visible on the site?</p>
                            <p>
                            Safety of BOLELO community user is very important to us. If you are a Lender and list an item on our site, only the general vicinity (zip code) of your location will be visible to the public.  You should only use our built-in message board to communicate with the potential Lender/Borrower about the item, booking, etc.  For safety reasons, we do not recommend our members sharing their exact location, personal information and contact information until the transaction becomes final with the payment.
                            </p>
                            <p  className={css.question}>Q. Why is the Lender/Borrower’s contact information and exact location not visible on the site?</p>
                            <p>
                            Safety of BOLELO community user is very important to us. If you are a Lender and list an item on our site, only the general vicinity (zip code) of your location will be visible to the public.  You should only use our built-in message board to communicate with the potential Lender/Borrower about the item, booking, etc.  For safety reasons, we do not recommend our members sharing their exact location, personal information and contact information until the transaction becomes final with the payment.
                            </p>
                            <p  className={css.question}>Q. What are the fees associated with BOLELO transaction?</p>
                            <ul><li>1. There is the actual cost of Borrowing an item from the Lender.  Each lender will set their own fee.</li><br/>
                            <li>2. The lender will be charged a 15% fee by BOLELO.  This fee covers the cost of the site, payment processing fee, etc. This fee will be deducted from the lender’s earnings prior to distribution.</li><br/>
                            <li>3. The borrower will pay for the Insurance (Product Damage Protection) if, required. Extremely affordable, it’s usually only a couple dollars per item/per day depending on the item. This cost is calculated at the checkout.</li><br/>
                            <li>4. BOLELO will collect from the borrower and submit sales & use tax required by the government. Exact rate varies depending on the county you live in but usually around 6.75% – 7.25%.</li><br/></ul>
                            <p>
                            There’s no fee to be a member or to list any number of items on our site.  The fee is charged only when the paid transaction occurs.
                            </p>
                            <p  className={css.question}>Q. How long does it take to receive my money from Lending?</p>
                            <p>
                            Stripe, one of the world leaders in payment processing is our chosen vendor for your payment transactions.  To stripe policy, you will not receive your first payout until 7–10 days after your first successful payment is received. The first payout usually takes a little longer in order to establish the Stripe account. Subsequent payouts deposited in their account within 3 to 5 business days after the completion of a transaction.  The exact number of days may vary depending on your financial institution.<br/><br/>
                            The Lender will receive net transaction fee which is Daily Rate x # of Rental Days, minus 15% BOLELO fee
                            </p>
                            <p  className={css.question}>Q. I have made a booking arrangement to borrow an item from a Lender.  My plans changed and no longer need the item.  What is the cancellation policy?</p>
                            <p>
                            You must send a cancellation request by 6 pm on the eve of the scheduled booking start date to receive your full refund. <u>To protect the Lender of potential missed opportunity, if you miss this deadline you will forfeit 100% of fees paid</u>.
                            </p>
                            <p  className={css.question}>Q. I need the item for a few more days.  How do I extend my rental?</p>
                            <p>
                            First, you should contact the LENDER to make sure it's available.  If available please log on to your account and create a new BOLELO transaction for the additional time you need.  This will ensure your BOLELO transaction is protected.  Please note any cash transaction or transaction outside of BOLELO platform does not qualify for the Product Damage Protection.
                            </p>
                            <p  className={css.question}>Q. Supporting charity is a good measure of sustainable business.  Does BOLELO partner with charity?</p>
                            <p>
                            We have chosen to donate 5% of proceeds to 501 (c) 3 non-profit, LBSKF (30-0162842), based in Raleigh North Carolina.  This is a small group of good people (100% volunteers) doing many great things for the community.
                            </p>
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
