import React, { useState, useEffect } from 'react';
import HolaMundo from './components/HolaMundo.js';
import './App.css';

const App = () => {

//Juk
//   Variable, Cambiar  / useState('valor predeterminado')
const [color, setColor] = useState('black');


useEffect(() => {
  //Ejectura lo que este aca adentro
  console.log(`Cambio color a ${color}`)
  //Peticion
  //Recibiendo nuestros datos
  //Pasarlos a un estado
}, [color]) //Cambie su input

const rojo = () => {
  setColor('red');
}

const azul = () => {
  setColor('blue');
}

const verde = () => {
  setColor('green');
}

  return (
    <div className='padre'>
      <HolaMundo 
        contenido={'Este es un prop enviado desde padre'}
        titulo={'Hola Mundo'}
        color={color}
      />
      <div>
        <button onClick={rojo}>Cambiar a Rojo</button>
        <button onClick={azul}>Cambiar a Azul</button>
        <button onClick={verde}>Cambiar a Verde</button>
      </div>
    </div>
  );
}

export default App;

