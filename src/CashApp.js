//import logo from './logo.svg';
import { BankingSection } from './BankingSection';
import './CashApp.css';
import { CashCardSection } from './CashCardSection';
import { HeroSection } from './HeroSection';
import { InvestingSection } from './InvestingSection';
import { PaymentSection } from './PaymentSection';



export const CashApp = () => {
  return (
    <div className="cash-app">
      <div className="div">
        <div className="overlap">
            <HeroSection/>     
            <PaymentSection/>  
            <BankingSection/>
            <CashCardSection/>
            <InvestingSection/>
        </div>
      </div>
    </div>
  );
};

