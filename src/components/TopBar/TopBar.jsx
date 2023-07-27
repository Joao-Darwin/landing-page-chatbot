import React from 'react'
import "./TopBar.css"
import Logo from "../../assets/logo.png"
import Button from '../Button/Button';

const TopBar = () => {
    return (
        <div className='divTopBar'>
            <div className='logoContainer'>
                <img src={Logo} alt="Logo da empresa" />
                <h2>InterTicket</h2>
            </div>
            <Button linkButton="https://youtube.com" textoButton="Teste agora" />
        </div>
    );
};

export default TopBar