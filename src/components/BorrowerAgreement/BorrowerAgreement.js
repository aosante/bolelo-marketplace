import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './BorrowerAgreement.css';

const BorrowerAgreement = props => {
    const { rootClassName, className } = props;
    const classes = classNames(rootClassName || css.root, className);

    // prettier-ignore
    return (
        <div className={classes}>
            <p>
                The Item may only be used and operated in a careful and proper manner.
                Its use must comply with all laws, ordinances, and regulations relating to
                the possession, use, or maintenance of the Item, including registration
                and/or licensing requirements if any.
            </p>

            <p>
                The Borrower shall maintain, at the Borrower's cost, the Item in good repair
                and operating condition, allowing for reasonable wear and tear. Such costs
                shall include labor, material, parts, and similar items.
            </p>
            <p>
                The Borrower shall maintain, at the Borrower's cost, the Item in good repair and
                operating condition, allowing for reasonable wear and tear. Such costs shall include
                labor, material, parts, and similar items.
            </p>
            <p>
                At the end of the Lease term, the Borrower shall be obligated to return the item to
                the Lender at the Borrower's expense.
            </p>
            <p>
                The Borrower shall inspect each item of Item delivered pursuant to this Lease. The Borrower
                shall immediately notify the Lender of any discrepancies between such item of Item and the
                description of the Item in the Item Schedule. If the Borrower fails to provide such notice
                before accepting delivery of the Item, the Borrower will be conclusively presumed to have
                accepted the item as specified in the Item Schedule.
            </p>
            <p>
                The Borrower assumes all risks of loss or damage to the Item from any cause and agrees to return it
                to the Lender in the condition received from the Lender, with the exception of normal wear and tear,
                unless otherwise provided in this Lease.
            </p>
            <p>
                Unless otherwise provided in this Lease, if the item is damaged or lost, the Lender shall have the
                option of requiring the Borrower to repair the Item to a state of good working order, or replace
                the Item with like Item in good repair, which Item shall become the property of the Lender and
                subject to this Lease.
            </p>
            <p>
                Liability for injury, disability, and death of workers and other persons caused by operating,
                handling, or transporting the Item during the term of this Lease is the obligation of the Borrower,
                and the Borrower shall indemnify and hold the Lender and Askmyneighbor.org DBA bolelo.org harmless
                from and against all such liability.
            </p>
            <p>
                All notices required or permitted under this Lease shall be deemed delivered when delivered in person or
                by mail, postage prepaid, addressed to the appropriate party at the address shown for that party at the beginning of this Lease.
            </p>
            <p>
                The Borrower shall not assign or sublet any interest in this Lease or the Item or permit the Item to be
                used by anyone other than the Borrower or Borrower’s employees, without Lender's prior written consent.
            </p>
            <p>
                This Lease shall be construed in accordance with the laws of the State of North Carolina.
            </p>
            <p>
                If any portion of this Lease shall be held to be invalid or unenforceable for any reason,
                the remaining provisions shall continue to be valid and enforceable. If a court finds that
                any provision of this Lease is invalid or unenforceable, but that by limiting such provision,
                it would become valid and enforceable, then such provision shall be deemed to be written, construed,
                and enforced as so limited.
            </p>
            <p>
                The failure of either party to enforce any provision of this Lease shall not be construed as a waiver or limitation
                of that party's right to subsequently enforce and compel strict compliance with every provision of this Lease.
            </p>
            <p>
                The parties will attempt to resolve any dispute arising out of or relating to this Agreement through friendly negotiations amongst the parties.
            </p>

        </div>
    );
};

BorrowerAgreement.defaultProps = {
    rootClassName: null,
    className: null,
};

const { string } = PropTypes;

BorrowerAgreement.propTypes = {
    rootClassName: string,
    className: string,
};

export default BorrowerAgreement;
