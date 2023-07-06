import React from "react";
import "./purpose.scss";
import Raspberrry from "../../Assets/icon-raspbarry.svg";
import Lemon from "../../Assets/icon-lemon.svg";

export default function Purpose() {
    return (
        <div className="purpose">

            <div className="purpose-container">
                <div className="purpose-title">
                    <h1>Missão</h1>
                    <p>Mas por quê?</p>
                </div>

                <div className="cards-purpose">

                    <div className="card-left">
                        <div className="raspberry-container">
                            <div className="raspberry-img">
                                <img src={Raspberrry} />
                            </div>
                            <div className="container-content">
                                <div className="title">
                                    <h2>Transformar as experiências anteriores das crianças</h2>
                                </div>
                                <div className="paragraph">
                                    <p>Queremos romper com a ideia de que as frutas são "ruins" ou sem graça,
                                        incentivando as crianças a explorarem e apreciarem a diversidade de cores, sabores
                                        e benefícios nutricionais que as frutas têm a oferecer.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-right">
                        <div className="lemon-container">
                            <div className="lemon-img">
                                <img src={Lemon} />
                            </div>
                            <div className="container-content">
                                <div className="title">
                                    <h2>Mostrar que as frutas também são divertidas!</h2>
                                </div>
                                <div className="paragraph">
                                    <p>Queremos mostrar que as frutas são verdadeiras 
                                        estrelas da natureza, capazes de proporcionar 
                                        energia, vitaminas e nutrientes essenciais para 
                                        o crescimento e desenvolvimento saudável.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>

    )
}