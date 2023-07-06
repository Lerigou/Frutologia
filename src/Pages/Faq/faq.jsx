import * as React from 'react';
import "./faq.scss";
import Accordion from "../../Components/accordion/accordion";
import iconBanana from "../../Assets/icon-banana-group.svg";

export default function faq() {

  return (
    <div>
      <div className="faq-title">
        <h1>FAQ</h1>
        <p>Ficou com duvidas?</p>
      </div>
      
      <div className="faq">
        <Accordion />
        <img src={iconBanana} />
      </div>
    </div>
    
  );
}
