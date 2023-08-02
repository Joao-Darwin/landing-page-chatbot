import React from 'react'
import Button from '../Button/Button'

import "./Plano.css"

const Plano = ({ titulo, descricao }) => {
    return (
        <div className='divPlano'>
            <h2 className='titulo tituloPlano'>{titulo}</h2>
            <p className='paragrafo'>{descricao}</p>
            <Button textoButton={"Contratar"} linkButton={"https://youtube.com"} />
        </div>
    )
}

export default Plano