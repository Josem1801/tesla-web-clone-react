import React from 'react'
import './css/Button.css'

const Button = ( {imp , text, link} ) => {
    return (
        <div className={`button ${imp =='secundary' ? 'button__white' : ''}`}>
            <a href={link}>
                {text}
            </a>
        </div>
    )
}

export default Button
