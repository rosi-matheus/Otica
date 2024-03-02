import React from "react";
import './style.css'

export default function Sobre() {
    return (
        <section id="sobre" className="sobre">
            <div className="limita-secao">
                <h3>QUEM SOMOS NÓS?</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                <div className="fotos-sobre">
                    <div className="sobre-foto">
                        <img src="assets/imagens/loja.png" alt="Loja"/>
                    </div>
                    <div className="sobre-txt">
                        <h4>NOSSAS FILIAIS</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="sobre-txt">
                        <h4>ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                    <div className="sobre-foto">
                        <img src="assets/imagens/atendimento.png" alt="Atendente"/>
                    </div>
                </div>
            </div>
        </section>
    )
}