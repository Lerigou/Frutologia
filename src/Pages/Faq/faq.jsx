import * as React from 'react';
import "./faq.scss";
import Accordion from "../../Components/accordion/accordion";
import iconBanana from "../../Assets/icon-banana-group.svg";

export default function Faq() {

  return (
    <div className='faq'>
      <div className="faq-container">

        <div className="faq-title">
          <h1>FAQ</h1>
          <p>Ficou com duvidas?</p>
        </div>

        <div className="faq-content">
          <div className="faq-accordions">
            <Accordion />
          </div>
          
          <div className="faq-img">
            <img src={iconBanana} />
          </div>
        </div>

      </div>
    </div>
    
  );
}
