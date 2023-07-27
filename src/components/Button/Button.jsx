import React from 'react'
import "./Button.css"

const Button = ({ textoButton, linkButton }) => {
    return (
        <div>
            <a href={linkButton} className='button' target='_blank'><button className='button'>{textoButton}</button></a>
        </div>
    )
}

export default Button