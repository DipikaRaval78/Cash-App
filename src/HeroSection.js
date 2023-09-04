import React from "react";
import './CashApp.css';


export const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlap">
   <div className="eye-button">
    
      <picture className="eye-button-layer" />
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
        <picture className="cashapp-logo"  alt=" " />
        <div className="rays">
          <div className="hero">
            <div className="overlap-group">
            <div className="frame">
<picture className="vector-rays" alt=" " />
</div> 
              {/* <picture className="layer" alt="Layer" src="layer-1.png" /> */}
              <div className="div">CASH</div>
            <div className="image">
            <picture className="intro-phone" alt=" "/>
            </div>
              <div className="APP">
                <br />
                APP
              </div>
              <picture className="intro-cube" alt=" "/>
              <picture className="intro-cubes" alt=" " />
              <picture className="intro-pillar" alt=" "/>
              <picture className="intro-stairs" alt=" "/>
            </div>
          </div>
        </div>
        
        <div className="fixed-footer">
     
        <div className="download-icons">
      <div className="buttons">
        <div className="app-store">
          <picture className="vector margin-div" alt=" " />
          <div className="label padding-label">APP STORE</div>
        </div>
        <div className="google-play">
          <picture className="picture margin-div" alt=" "  />
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
      <picture className="frame" alt=" " />
      <picture className="picture" alt=" " />
      <picture className="frame-2" alt=" " />
    </div>
 
    <picture className="vector-arrow" alt=" " />


    
 
    </div>
      </div>
    </div>
  );
};