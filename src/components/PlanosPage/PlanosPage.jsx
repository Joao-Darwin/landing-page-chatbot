import React from 'react'

import "./PlanosPage.css"
import Plano from '../Plano/Plano'

const planos = [
    { name: "FREE", descricao: "1 Número de telefone 1 Administrador 3 Usuários Sem limite de mensagens Sem limite de atendimentos Transferência de chamados" },
    { name: "ENTREPRENOUR", descricao: "1 Número de telefone 1 Administrador 3 Usuários Sem limite de mensagens Sem limite de atendimentos Transferência de chamados" },
    { name: "STARTUP", descricao: "1 Número de telefone 1 Administrador 3 Usuários Sem limite de mensagens Sem limite de atendimentos Transferência de chamados" }
]

const PlanosPage = () => {
    return (
        <div className='divPlanosPage'>
            <h1 className='titulo tituloPlanosPage'>Planos que cabem no seu bolso</h1>
            <div className='divPlanos'>
                {
                    planos.map((plano, index) => (
                        <Plano key={index} titulo={plano.name} descricao={plano.descricao} />
                    ))
                }
            </div>
        </div>
    )
}

export default PlanosPage