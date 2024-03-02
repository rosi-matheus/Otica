import React from "react";
import './style.css'


export default function Header() {
    return (
        <header>
            <div className="conteudo">
                <img className="img" src="assets/imagens/logo.png" alt=""/>
                <div className="linha"></div>
                <div className="links">
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </div>
            </div>
        </header>
    )
}