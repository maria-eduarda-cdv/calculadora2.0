import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem';
import Frase from './components/Frase';
import Calculadora from './components/Calculadora';



function Saudacao() {
 return <h1>Calculadora 2.0</h1>;
}

function App(){
  return(

  <>
  <Saudacao/>
  <Mensagem texto="seu texto"/>
  <Frase/>
  <Calculadora/>
    </>
  )
}

export default App
