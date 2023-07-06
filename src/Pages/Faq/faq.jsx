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
            <Accordion titleFaq={"A fruta que você pesquisou não apareceu?"} 
            descriptionFaq={"Nossa ferramenta não dispõem de algumas frutas devido a mudança causada pela regionalização, tente outro nome. Verifique também se escreveu corretamente o nome da fruta que deseja consultar."} />
            <Accordion titleFaq={"Onde entrar em contato?"} 
            descriptionFaq={"Ao final da página você encontra a opção de enviar um comentário. Clicando aqui você será direcionado para lá!"} />
          </div>
          
          <div className="faq-img">
            <img src={iconBanana} />
          </div>
        </div>

      </div>
    </div>
    
  );
}
