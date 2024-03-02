import React from "react";
import SecaoCapa from "../SecaoCapa";
import SecaoProdutos from "../SecaoProdutos";
import Sobre from "../Sobre";
import Contato from "../Contato/contato";
import './style.css'

export default function Conteudo() {
    return (
        <div>
            <SecaoCapa />
            <SecaoProdutos />
            <Sobre />
            <Contato />
        </div>
    )
}