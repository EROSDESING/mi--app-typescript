import { Counter } from './components/Counter'
import { Usuario } from './components/Usuario'
import { TimePadre } from './components/TimePadre'
import { ContadorRed } from './components/ContadorRed'
import { Formulario } from './components/Formulario'

function App() {
  return (
    <>
      <h1>React + TypeScritp </h1>
      <hr />
      <h2>UseState</h2>
      <Counter />
      <Usuario />
      <h2>UseEffect - UseRef</h2>
      <hr />
      <TimePadre />
      <h2>UseReducer</h2>
      <hr />
      <ContadorRed />
      <h2>CustomHooks</h2>
      <hr />
      <Formulario />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App
