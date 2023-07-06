import React from "react";
import "./menu.scss";
import Watermelon from "../../Assets/icon-watermelon.svg";

export default function Menu() {

  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-right">
          <div className="nav-item">
            <a href="#home">
              Frutologia
            </a>
          </div>
        </div>
        <div className="nav-left">
          <div className="nav-item">
            <a href="#home">
              Pesquisar
            </a>
          </div>
          <div className="nav-item">
            <a href="#purpose">
              Missão
            </a>
          </div>
          <div className="nav-item">
            <a href="#product">
              Sobre
            </a>
          </div>
          <div className="nav-item">
            <a href="#faq">
              Dúvidas
            </a>
          </div>
          <div className="nav-item">
            <a href="#footer">
              Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
