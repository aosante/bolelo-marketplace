import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './InsuranceAgreement.css';

const InsuranceAgreement = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
        <div className={classes}>
            <p>
            <b>Introduction:</b> We get it. You want to take custody of a rental asset or use a rental asset without any fuss from BOLELO. However, to make your rental experience as worry-free as possible, purchasing Product Damage Protection (PDP) for your rental asset is a great place to start.
            </p>

            <p><b>What is Product Damage Protection?</b></p>
            <p>PRODUCT DAMAGE PROTECTION, also known as PDP, is not insurance sold by an insurance company.  PDP is an amendment or change to the rental agreement you have with BOLELO, that waives your financial responsibility as renter for designated causes of loss or damage incurred to the rental asset, provided you have not violated the Rental Agreement’s Terms and Conditions. This PDP is also known as a BAILMENT AGREEMENT and is detailed below:</p>
            <ul>
                <li><b>Terms and Conditions,</b> the rental document electronically signed by you, and an email sent to you at the email address you provided in the application constitute the rental agreement between BOLELO.org and BOLELO USERS (Borrower/Lender) identified on the rental document. Note that Appendix A in this document discusses the definitions and Appendix B is our privacy policy.</li>
                <li><b>You borrow from BOLELO the asset or assets</b> described in the rental agreement, <b>which rental is solely a bailment for mutual benefit.</b></li>
                <li>That the item is not stolen, condemned or subject to legal investigation or inquiry
                  <p>
                  You agree to the terms of this agreement, provided any such term is not prohibited by the law of a jurisdiction covering this rental, in which case such law controls. “We”, “our” and “us” refer to BOLELO. “You” and “your” refer to the person who signs this agreement. You also agree that you are not our agent for any purpose; and that you cannot assign or transfer your obligations.
                  </p>
                  <p>
                    <b>TRANSACTION SPECIFICS:</b>
                  </p>
                  <p>
                  This transaction asset/item (1) is valued at (2) for replacement or loss and will be rented from (3) to (4) at a cost of (5). The cost of the PRODUCT DAMAGE PROTECTION for this rental transaction is (6) You agree to these values and costs for the PRODUCT DAMAGE PROTECTION PLAN under these terms and conditions.
                  </p>
                  <p>
                  <em>The following specific details are to be identified in booking agreement.  1 – Item name, 2- value determined by Sharetempus, 3- Start date/time, 4 – End date/time, 5 – Rental fee charged on the platform, 6 - cost of PDP</em>
                  </p>
                </li>
                <li><b>You borrow from BOLELO the asset or assets</b> described in the rental agreement, <b>which rental is solely a bailment for mutual benefit.</b><p>Such changes will apply to rentals that you reserve after such notice has been given, as indicated by the date of such notice if sent in written form, or the date such changes are posted on the BOLELO web site, which date will be indicated therein.</p><p>Changes to the Terms and Conditions will be posted as they occur on the BOLELO web site at BOLELO.org terms and will govern all rentals even if the terms provided at the time of enrollment are different.</p></li>
                <li><b>Meaning of Rental Asset -</b> The word “rental asset” means the asset/item or assets/items rented to you per the rental agreement. See Appendix A for a complete list of definitions.</li>
                <li><b>Payment/Credit Card Reserve.</b> You acknowledge you have been informed that if you use a credit card, your credit card limit, up to an amount of the estimated total charges due under this Agreement, as indicated on the rental document, based on your representation about this rental, maybe set aside or reserved by the card issuer of the card, which you present for payment of your rental charges; or, if you use a debit card funds in the account to which that card is linked may be set aside for the greater of the amount of the estimated total charges due under this Agreement, based on your representation about this rental, as indicated on the rental document or the deposit amount indicated on signs at the location at which you rent at the time of rental. YOU MAY NOT USE A PREPAID CREDIT CARD for any transaction on the BOLELO.<p>You consent to the reservation or setting aside of that estimated total amount at the time of commencement of the rental. You understand that we will authorize the release of any excess reserve or set aside upon the completion of your rental and that your card issuer’s rules apply to your credit line or your account being credited for such excess and may not be immediately released by your card issuer.</p></li>
                <li><b>Repossessing the Rented asset.</b>  We can repossess the rented asset at any time in our sole discretion for reasons that include, but are not limited to the following: it is found illegally placed, being used to violate the law or the terms of this agreement, or appears to be abandoned. You agree that we needn’t notify you in advance. If the item is repossessed, you agree to pay the actual and reasonable costs incurred by us to repossess the item. You agree that such costs will be charged to the card you used to rent the item.</li>
                <li><b>Prohibited Use of the Rental Asset.</b> Certain uses of the rental asset and other things you or another user may do, or fail to do, will violate this Agreement and, in addition to anything else may cause us to cancel your enrollment with BOLELO.<p>A VIOLATION OF THIS PARAGRAPH, WILL AUTOMATICALLY TERMINATE YOUR RENTAL, and IS AN EXCLUSION TO AND VOIDS ALL LIABILITY PROTECTION AND ANY OPTIONAL SERVICES THAT YOU HAVE ACCEPTED, INCLUDING BUT NOT LIMITED TO ADDITIONAL LIABILITY INSURANCE, TERMS AND CONDITIONS, PERSONAL ACCIDENT INSURANCE, PERSONAL EFFECTS PROTECTION, EMERGENCY SICKNESS PROTECTION AND Direct Damage WAIVER OR PARTIAL DAMAGE WAIVER. IT ALSO MAKES YOU LIABLE TO US FOR ALL PENALTIES, FINES, FORFEITURES, LIENS AND RECOVERY AND STORAGE COSTS, INCLUDING ALL RELATED LEGAL EXPENSES, FEES, AND COSTS THAT WE MAY INCUR.</p>
                <p><b>It is a violation of this paragraph if</b></p>
                  <ul>
                    <li><b>a. You use or permit the rental asset (for example a bicycle) to be used:</b>
                      <ul>
                      <li>by anyone other than an authorized renter, as defined in the BOLELO process.</li>
                      <li>to rent the asset to any other party or use the asset for hire.</li>
                      <li>to tow or push anything.</li>
                      <li>to be operated in a test, race or contest.</li>
                      <li>use the rental asset while the renter is under the influence of alcohol and/or a controlled substance.</li>
                      <li>for conduct that could be charged as a crime such as a felony or a misdemeanor, including the transportation of controlled substances or contraband.</li>
                      <li>use the rental asset recklessly or while overloaded.</li>
                      <li>if the rental asset is taken out of the agreed geographic territory BOLELO expressed permission.</li>
                      </ul>
                    </li>
                    <li><b>You or any party to the rental transaction, authorized or not:</b>
                      <ul>
                      <li>fail to promptly report any damage to or loss of the rental asset when it occurs, or when you learn of it and provide us with an accident/incident report or fail to cooperate with our investigation.</li>
                      <li>where required by law, failed to report an accident and or loss of the asset to law enforcement.</li>
                      <li>obtained the custody of the rental asset through fraud or misrepresentation.</li>
                      <li>intentionally or with willful disregard cause or allow damage to the rental asset.</li>
                      <li>return the rental asset after the agreed exchange location and time of exchange and the rental asset is damaged, stolen or vandalized or otherwise failed to take reasonable steps to secure the rental asset(s).</li>
                      </ul>
                    </li>
                  </ul>
                  </li>
                  <li><b>Taxes – </b>You as the renter will also be responsible to pay all applicable taxes (for example sales and/or use taxes based on the rental cost) as well as any additional charges provided on the rental agreement which are over and above the base rental rate. These may be surcharges and or recovery fees to recover certain costs.</li>
                  <li><b>Indemnification and Waiver.</b> You (the renter) shall defend, indemnify, and hold harmless BOLELO and the owner of the asset in the rental transaction including all service providers to the rental platform, all affiliated companies, officers and directors harmless from all losses, liabilities, damages, injuries, claims, demands, awards, costs, attorney fees, and other expenses incurred by us in any manner from this rental transaction, by you or any person, including claims of, or liabilities to, third parties.<p>You may present a claim to your insurance carrier for such events or losses; but in any event, you shall have final responsibility to us for all such losses. This agreement is secondary to any insurance covering the assets, owner, and renter.</p><p>You waive any claim against us for incidental, special or consequential damages in connection with the rental. If the rental transaction is arranged/reserved and a claim relating to this transaction is made against BOLELO that alleges unfair, deceptive or unconscionable conduct the asset renter agrees to indemnify and hold BOLELO all service providers to the BOLELO including the asset owner) harmless from and against such claim, including the related costs and expenses.</p></li>
                  <li><b>Use of GPS Tracking Devices.</b> You grant us permission to use GPS tracking devices to track or locate you (the asset renter), in connection with your mobile phone or device, and or rental asset.<p>You give us and the asset owner the use of GPS tracking to be used at any time, including but not limited to rental assets which may be reported stolen, suspected of being stolen or as may be required by law enforcement.</p><p>You grant us the use of GPS to be used to identify rental assets which may have been damaged, a geographic territory of use with or without when the rental asset may require repair and or assistance.   When we have a good faith belief, there is an emergency that poses a threat to the safety of your or another person, or as necessary to defend, protect or enforce our rights in connection with the use of our products and/or services we are able to GPS or other locating devices. In addition, if equipped and where permitted by law, the GPS device in the rental asset, in connection with your mobile phone, may also be used to process the rental transaction including when your rental may start, when it may end, where the rental asset was used, etc.</p></li>
                  <li><b>Damage to/Loss of the Rental Asset if you do not accept Product Damage Protection (PDP) agreement</b> or if the rental asset is lost or damaged as a direct or indirect result of a violation of paragraph <b>7</b>, or damaged as a result of an act of nature, you are responsible and you will pay us for all loss of or damage to the rental asset regardless of cause, or who, or what caused it.<p>If the rental asset is damaged, you will pay our estimated repair cost, or if in our sole discretion, we determine to sell the rental asset in its damaged condition, you will pay the difference between the rental asset’s retail fair market value before it was damaged and the sale proceeds except where controlled by law.</p><p>For example, in your area, if the rental asset is damaged, you will pay our estimated repair cost up to the amount specified by law, or if in our sole discretion, we determine to sell the asset in its damaged condition, you will pay the lesser of the difference between the asset’s retail fair market value before it was damaged and the sale proceeds up to the amount specified by law.</p><p>If the rental asset is stolen and not recovered you will pay the asset’s fair market value before it was stolen. Where permitted by law, you authorize us to charge you for the actual cost of repair or replacement of lost or damaged.</p><p>As part of our loss, you’ll also pay for an administrative fee, plus transit costs and storage charges, if any.</p><p>If your responsibility is covered by any insurance, credit card benefit, travel insurance or such other insurance or benefits, you authorize us to contact the benefit provider directly on your behalf and assign all of your benefits directly to us to recover all consequential and incidental damages including, but not limited to the repairs, plus diminished value or the fair market retail value of the rental asset (less salvage value plus costs incurred in the salvage-sale), and all storage and administrative fees. If we collect our loss from a third party after we have collected our loss from you, we will refund the difference, if any, between what you paid and what we collected from the third party. If the law of a jurisdiction covering this rental requires conditions on DDW that are different than the terms of this agreement, such as if your liability for ordinary negligence is limited by such law, that law prevails.</p><p>You agree and understand that you are not authorized to repair or have the asset repaired without our express prior written consent. If you repair or have the asset repaired without our consent, you will pay the estimated cost to restore the asset to the condition it was in prior to your rental. If we authorize you to have the asset repaired, we will reimburse you for those repairs only if you give us the repair receipt.</p></li>
                  <li><b>PRODUCT DAMAGE PROTECTION (PDP) is not insurance. </b>If you accept PDP by your payment to BOLELO, at the additional daily rate, for each full or partial day that the asset is rented to you. You handle the rental transaction in accordance with the terms and conditions of BOLELO and this agreement, we assume responsibility for the loss of or damage to the rental asset. We assume all loss or damage to the rental asset up to the amount as specified in the rental document and you accept responsibility for all other loss or damage. This PDP is secondary to any insurance or coverages you carry.<p>If you do not accept PDP you owe for all loss or damage to the rental asset. Loss and damage are described in the rental agreement.</p><p>You acknowledge you have been advised that your own insurance providers and/or legal counsel if your own insurance may cover loss or damage to the rental asset. You also acknowledge reading the notice on loss damage shown on the rental document, or in these terms, or BOLELO TERMS AND CONDITIONS.</p><p>Claim payments are limited to the repair or replacement value of the asset in the transaction and are subject to the amount of capital in the Loss Damage Fund. If a large number of claims arise depleting the Loss Damage Fund, no further claims will be paid and issuance of Bailment Agreements with BOLELO.</p></li>
                  <li><b>Specified Rental Assets not covered by the PRODUCT DAMAGE PROTECTION (PDP):</b>
                    <ul>
                      <li>Aircraft of any kind including items with an FAA identification number.</li>
                      <li>Powered watercraft of any kind (including boats and jet skis).</li>
                      <li>Autos of any kind (including cars, trucks, snowmobiles, all-terrain vehicles, RV’s or anything else motorized).</li>
                      <li>Firearms, fireworks or Weapons.</li>
                      <li>People or animals.</li>
                      <li>Motorized blades, including, but not limited to chain saws, table saws, reciprocating saws.</li>
                      <li>Medical Devices.</li>
                      <li>Alcohol, tobacco, guns, drugs and drug paraphernalia any controlled substance.</li>
                      <li>Illegal items, items promoting illegal activity and highly regulated items.</li>
                      <li>Internationally regulated items.</li>
                      <li>Pornography, adult and/ or mature content.</li>
                      <li>Items that violate third party intellectual property rights.</li>
                      <li>Heavy Construction Related Equipment. This equipment is defined as heavy-duty vehicles, specially designed for executing construction tasks, most frequently involving earthwork operations. They are also known as, construction equipment, construction plant, earthmovers, engineering vehicles, or simply equipment. They usually comprise five equipment systems: implement, traction, structure, power train, control, and information.</li>
                    </ul>
                  </li>
                  </ul>
                <p><b>CLAIM PROCESS</b></p>
                <p>When you have the need for filing a claim for loss or damage, you should review this bailment agreement and then start the process using the “Claim Bot” found at <a href="https://customers.sharetempus.com/" rel="noopener noreferrer" target="_blank">https://customers.sharetempus.com/</a>. Click on the icon in the lower right-hand corner. Our API provider, ShareTempus will maintain "claim bot" for first notice of claim and data will be used for the claim adjustment process. The claim software provides for the upload of claim photos, claim videos, witness statements, description of damages, police reports if received, geographic location of the individual making the claim, etc.  The software will also compare the damaged asset, with asset listed for rental and the asset identified in the rental transaction. ShareTempus will then contact you as needed for additional information to process your claim. ShareTempus’ decision. The goal is for the claim process to be completed quickly but this is subject to the information needed to process the claim. All claims must be made within 7 days of the completion of the rental transaction.</p>
                <p><b>APPENDIX A:</b></p>
                <p><b>DEFINITIONS:</b></p>
                <p><b>Lender:</b> The person or person(s) who have legal ownership of the asset. They may place assets on an online platform to rent these assets out for a fee. The owner is also known as a poster or provider.</p>
                <p><b>Borrower:</b> The person or person(s) who is entering into a transaction on a sharing economy platform with an owner for the express purpose of renting an asset for a specified period of time for a specified cost paid through the platform.</p>
                <p><b>Platform:</b> An online marketplace that places one party in-touch with another, such as owners and renters. The online system may be entirely self-contained, or it may allow third-party apps to connect via the platform's programming interface (API).</p>
                <p><b>Asset:</b> An item or personal property. Assets that may not be covered by any of this document include the following Specified Items Exclusion:
                  <ul>
                      <li>Aircraft of any kind including items with an FAA identification number.</li>
                      <li>Powered watercraft of any kind (including boats and jet skis).</li>
                      <li>Autos of any kind (including cars, trucks, snowmobiles, all-terrain vehicles, RV’s or anything else motorized).</li>
                      <li>Firearms, fireworks or Weapons.</li>
                      <li>People or animals.</li>
                      <li>Motorized blades, including, but not limited to chain saws, table saws, reciprocating saws.</li>
                      <li>Medical Devices.</li>
                      <li>Alcohol, tobacco, guns, drugs and drug paraphernalia any controlled substance.</li>
                      <li>Illegal items, items promoting illegal activity and highly regulated items.</li>
                      <li>Internationally regulated items.</li>
                      <li>Pornography, adult and/ or mature content.</li>
                      <li>Items that violate third party intellectual property rights.</li>
                      <li>Heavy Construction Related Equipment</li>
                    </ul>
                </p>
                <p><b>Users:</b> Owners or Renters on a platform.</p>
                <p><b>Transaction:</b> Any part of a process or transaction for the rental or lease of assets</p>
                <p><b>Direct Physical Damage Program:</b> The Personal Property Damage Waiver program provided to a platform via the retail agent and underwritten by The Hartford/Y-Risk. This is also known as the bailment agreement.</p>
                <p><b>Claim:</b> A request for reimbursement by an owner or renter following loss or damage during a transaction.</p>
                <p><b>ShareTempus:</b> Share Tempus, Inc., a Delaware corporation (the “Company”) is a corporation based in York, Pennsylvania, which was accepted into Google’s Plug and Play (PnP) InsureTech ecosystem in 2017. The Company is primarily a Software as a Service (SaaS) a company that has developed an on-demand Application Programing Interface (API) to cover risks arising from consumer-to-consumer transactions within the “sharing economy” and other related web-based economies.</p>
                <p><b>The Underwriter:</b> The Insurance Company (“<u>The Hartford</u>”) which underwrites the policy for the platform.</p>
                <p><b>The Wholesaler:</b> A type of insurance broker (“<u>AmWins</u>”) who acts as an intermediary between a retail broker and an insurer, while having no contact with the insured.</p>
                <p><b>The Retail Agent:</b> A licensed insurance agent (“<u>The Hartman Group</u>”) who acts as an intermediary between an insured and the marketplace. In some instances, retail agents deal directly with an insurer in arranging coverage, while in others, retail agents work with managing general agents or wholesale brokers to secure coverage for their client-insured.</p>
                <p><b>APPENDIX B:</b></p>
                <p>ShareTempus’ Privacy Policy can be found <a href="https://docs.google.com/document/d/13CeCeiFlfFCWzv1Mj-Pl9x7Y5uV4hozFOrX2ACvFuGY/edit#heading=h.qsv39698okwn" rel="noopener noreferrer" target="_blank">here</a></p>
                </div>
    );
};

InsuranceAgreement.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

InsuranceAgreement.propTypes = {
  rootClassName: string,
  className: string,
};

export default InsuranceAgreement;
