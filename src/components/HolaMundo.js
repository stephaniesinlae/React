import React from 'react'
import './HolaMundo.css'

const HolaMundo = ({contenido, titulo, color }) => {
    // console.log(props);
    
    // const  {contenido, titulo, color } = props;
    
    return (
        <div className={`hijo ${color}`}>
            <div>
                {titulo}
            </div>
            <p>
                {contenido} 
            </p>
        </div>
    )
}

export default HolaMundo;