import React, { Component } from 'react'
import From from '../components/From'
import NumbersForm from '../components/NumbersForm'
import Result from '../components/Result'
import "./style.css"

class App extends Component {// component stateful
  render() {
    return (
      <div>
        <h3>Lista Random</h3>
        <p>Sistema Ramdom - Demo</p>
        <From />
        <h3> Lista de números aleatorios </h3>
        <NumbersForm />
        <h3> Resultado </h3>
        <Result />
      </div>
    )
  }
}

export default App
