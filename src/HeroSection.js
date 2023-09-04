import React from "react";
import './CashApp.css';


export const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlap">
   <div className="eye-button">
      <img className="eye-button-layer" alt=" " />
    </div>
        <div className="navbar">
          <div className="text-wrapper">SIGN IN</div>
          <div className="text-wrapper">LEGAL</div>
          <div className="text-wrapper">LICENSES</div>
          <div className="text-wrapper">SECURITY</div>
          <div className="text-wrapper">CAREERS</div>
          <div className="text-wrapper">PRESS</div>
          <div className="text-wrapper">SUPPORT</div>
          <div className="text-wrapper">STATUS</div>
          <div className="text-wrapper">CODEBLOG</div>
        </div>
        <img className="cashapp-logo" alt=" " />
        <div className="rays">
          <div className="hero">
            <div className="overlap-group">
            <div className="frame">
<img className="vector-rays" alt=" " />
</div> 
              {/* <img className="layer" alt="Layer" src="layer-1.png" /> */}
              <div className="div">CASH</div>
            <div className="image">
            <img className="intro-phone" alt=" "/>
            </div>
              <div className="APP">
                <br />
                APP
              </div>
              <img className="intro-cube" alt=" "/>
              <img className="intro-cubes" alt=" " />
              <img className="intro-pillar" alt=" "/>
              <img className="intro-stairs" alt=" "/>
            </div>
          </div>
        </div>
        
        <div className="fixed-footer">
     
        <div className="download-icons">
      <div className="buttons">
        <div className="app-store">
          <img className="vector margin-div" alt=" " />
          <div className="label padding-label">APP STORE</div>
        </div>
        <div className="google-play">
          <img className="img margin-div" alt=" "  />
          <div className="text-wrapper padding-label">GOOGLE PLAY</div>
        </div>
      </div>
    </div>


      <div className="policy-text">
        <p className="brokerage-services">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. <br />
          See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin <br/>
          trading offered by Cash App. Cash App Investing does not trade bitcoin and <br/>
          Cash App is not a member of FINRA or SIPC. Cash App facilitates banking <br/>
          services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
        </p>
      </div>

      <div className="buttons-2">
      <img className="frame" alt=" " />
      <img className="img" alt=" " />
      <img className="frame-2" alt=" " />
    </div>
 
    <img className="vector-arrow" alt=" " />


    
 
    </div>
      </div>
    </div>
  );
};