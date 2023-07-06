import React from "react";
import "./product.scss";
import Search from "../../Assets/search.svg"
import Table from "../../Assets/table.svg"

export default function Product() {
    return (
        <div className="product">

            <div className="product-container">
                <div className="product-title">
                    <h1>Sobre a ferramenta</h1>
                    <p>Aprenda a usar!</p>
                </div>

                <div className="cards-product">

                    <div className="card-left">
                        <div className="yellow-container">
                            <div className="container-content">
                                <div className="title">
                                    <h2>O que é?</h2>
                                </div>
                                <div className="paragraph">
                                    <p>É uma ferramenta divertida e educativa que fornece informações
                                        completas sobre diferentes frutas. Basta digitar o nome de uma
                                        fruta e você receberá todos os detalhes sobre ela.</p>
                                </div>
                            </div>
                            <div className="yellow-img">
                                <img src={Search} />
                            </div>
                        </div>
                    </div>

                    <div className="card-right">
                        <div className="pink-container">
                            <div className="container-content">
                                <div className="title">
                                    <h2>Informações</h2>
                                </div>
                                <div className="paragraph">
                                    <p>Após pesquisar a fruta, nossa ferramenta retornará as principais
                                        características da dela, incluindo família, ordem, calorias entre
                                        outras informações nutricionais. </p>
                                </div>
                            </div>
                            <div className="pink-img">
                                <img src={Table} />
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}