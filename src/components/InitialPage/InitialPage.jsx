import React from 'react'
import Button from '../Button/Button'

import imagemInicial from "../../assets/Files sent-amico.png"
import "./InitialPage.css"

const InitialPage = () => {
    return (
        <div className="container">
            <div className="text-container">
                <h1 className='tituloPageInicial'>Todos os atendentes em um só lugar</h1>
                <Button linkButton="youtube.com.br" textoButton="Saiba mais" />
            </div>
            <img src={imagemInicial} alt="Imagem página inicial" className='imgPageInicial' />
        </div>
    )
}

export default InitialPage