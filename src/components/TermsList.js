import React from "react";
import "../style/terms.css";

function TermsList() {
  return (
    <div className="termsList">
      <h1 className="awesome">TERMS & CONDITION</h1>
      <p className="termText">Read all terms before you buy any our product</p>
      <div className="termsCardList">
        <div className="termsCard">
          <h2>Payments and Refunds</h2>
          <p>
            Since our services provide electronic, virtual intangible goods we
            do not offer refunds. You will not receive any refund for partial or
            non-usage of the services provided, please confirm if the
            subscription will be compatible with your PC build
          </p>
        </div>

        <div className="termsCard">
          <h2>Liabilities</h2>
          <p>
            WE are NOT responsible for banned accounts. There is always a risk
            with cheating and therefore NO refunds or responsibilities will be
            held in our side. Should the developer cease operation or updates in
            the future, will not compensate or provide refunds. If somehow the
            software is incompatible with your PC and not working, we are not
            responsible
          </p>
        </div>

        <div className="termsCard">
          <h2>Our Services</h2>
          <p>
            sells software subscription to customers. Our software’s are owned
            by various different developers and therefore they own the property
            of these goods. The software’s have been created to be used on
            playful purposes. . No refunds or partial refunds will be given
            should the website cease operations or become unable to provide
            content updates for any reason.
          </p>
        </div>

        <div className="termsCard">
          <h2>Support</h2>
          <p>
            Remember not all products will work on certain windows 10 version.
            Some products will only work on certain windows build. Prior to
            purchase, please double check if compatible
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsList;
