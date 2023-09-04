import React from "react";
import './CashApp.css';

export const PaymentSection = () => {
    return(
<div className="section-payments">
      <div className="overlap-group">
      <div className="payments-floor" />
      <div className="section-text">
      <picture className="payments-text" alt=" "/>
      <p className="send-and-receive">
        Send and receive money with anyone, donate <br/>
        to an important cause, or tip professionals. <br />
        Just enter a $cashtag, phone number, or <br />
        scan their&nbsp;&nbsp;QR code to pay.
      </p>
    </div>

   
      <picture className="payments-phone" alt=" " />
      <picture className="payments-column" alt=" " />
      <picture className="payments-pillar" alt=" " />
      <picture className="payments-pillar-small"  alt=" "/>
      <picture className="payments-pillar-medium" alt=" " />
      <picture className="payments-pillar-medium-1" alt=" " />
      <picture className="payments-pillar-medium-2" alt=" " />
      <picture className="payments-pillar-medium-3" alt=" " />
      <picture className="payments-column-1" alt=" " />
      <picture className="payments-column-2" alt=" " />



    

      </div>
      </div>
    )
}