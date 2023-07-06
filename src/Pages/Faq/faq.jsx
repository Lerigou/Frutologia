import * as React from 'react';
import "./faq.scss";
import Accordion from "../../Components/accordion/accordion";
import iconBanana from "../../Assets/icon-banana-group.svg";

export default function faq() {

  return (
    <div className="faq">
        <Accordion />
        <img src={iconBanana} />
    </div>
  );
}
