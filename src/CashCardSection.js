import React from "react";
import './CashApp.css';

export const CashCardSection = () => {
    return (
    <div className="section-cash-card">
    <div className="overlap-group">
    <picture className="boost-stairs" alt=" " />
    <picture className="picture" alt=" " />
    <picture className="boost-card" alt=" " />
    <picture className="boost-coffee" alt=" " />
    <picture className="boost-hand" alt=" " />
    <picture className="boost-phone" alt=" " />
    <picture className="boost-shoe" alt=" " />
    <picture className="boost-burger" alt=" " />
    <div className="section-text">
    <div className="cash-card-boost">
    Cash Card
    <br />
    &amp; Boost
    </div>
    <p className="text-wrapper">
    The Cash Card is a free, customizable debit <br/>
    card that lets you pay online and in stores.<br/>
    It’s the only way to get Boosts—instant <br/>
    discounts that work at places where you <br/>
    want to spend.
    </p>
    </div>
    </div>
    </div>
    );
    }; 