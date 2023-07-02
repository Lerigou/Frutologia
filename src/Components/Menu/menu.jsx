import React from "react";
import "./menu.scss";


export default function Menu() {
    return (
        <div className="navbar">
            <div className="nav">
                <div className="nav-right">
                    <div className="nav-item">
                        <a href="">Frutologia</a>
                    </div>
                </div>
                <div className="nav-left">
                    <div className="nav-item">
                        <a href="">Pesquisar</a>
                    </div>
                    <div className="nav-item">
                        <a href="">Missão</a>
                    </div>
                    <div className="nav-item">
                        <a href="">Sobre</a>
                    </div>
                    <div className="nav-item">
                        <a href="">Contato</a>
                    </div>
                </div>
            </div>
        </div>
    )
}