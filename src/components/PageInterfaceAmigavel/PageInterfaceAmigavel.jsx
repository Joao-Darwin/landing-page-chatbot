import React from 'react'
import "./PageInterfaceAmigavel.css"
import imgPageInterface from "../../assets/Online consulting-amico.png"

const PageInterfaceAmigavel = () => {
    return (
        <div className='containerPageInterface'>
            <img src={imgPageInterface} alt="" className='imgPageInicial imgPageInterface' />
            <div>
                <h1 className='titulo tituloPageInterface'>Interface amigável</h1>
                <p className='paragrafo paragrafoPageInterface'>Interface amigável para sua empresa trabalhar sem complicação<br></br><br></br>
                    A interface simples faz com que sua equipe sinta-se à vontade para realizar os atendimentos com seus clientes. O InterTicket promove solução de problemas, ótima experiência dos usuários, agregando valor ao seu negócio!</p>
            </div>
        </div>
    )
}

export default PageInterfaceAmigavel