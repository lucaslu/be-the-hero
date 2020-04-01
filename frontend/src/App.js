import React from 'react'

import './global.css'

import Routes from './routes'

function App() {
  // useState retorna Array [valor, funcaodeAtualizacao]
  // quando um estado é atualizado, há um refresh do componente
  return (
    <Routes />
  )
}

export default App
