import React, { Component } from 'react'
import Api from '../api'


export default class FormEj extends Component {
  constructor(props) {
    super(props)


    const api = new Api()
    api.getUserRanking(this.props.username)
      .then(data => {

        const { Peso, Aerobico, Banca, Dominadas, Militar, PesoMuerto, ResistenciaFlexiones, ResistenciaSentadillas, SaltoVertical, Velocidad } = data[0]
        this.setState({
          ...this.state,
          data: [
            Peso,
            Aerobico,
            Banca,
            Dominadas,
            Militar,
            PesoMuerto,
            ResistenciaFlexiones,
            ResistenciaSentadillas,
            SaltoVertical,
            Velocidad],
          username: this.props.username
        })
      })
  }


  state = {
    pruebas:
      ["Peso",
        "Aerobico",
        "Banca",
        "Dominadas",
        "Militar",
        "PesoMuerto",
        "ResistenciaFlexiones",
        "ResistenciaSentadillas",
        "SaltoVertical",
        "Velocidad"
      ],
    data: [],
  }


  handleChanges = (e) => {
    e.preventDefault()
    //No puedo accerder a key position...solo name y value
    const data = this.state.data
    const position = this.state.pruebas.indexOf(e.target.name)

    const newArray = this.state.data.slice(0)

    newArray.splice(position, 1, e.target.value);

    const newState = {
      ...this.state,
      data: newArray
    }
    this.setState(newState)

  }

  sendForm = (e) => {
    e.preventDefault()

    const newApi = new Api()
    newApi.update(this.state)
      .then(data => {
        //console.log(data, "Respuesta de Update de FormEj")
      })
  }

  componentWillMount() {
    if (this.props.username === undefined) this.props.history.push(`/`)

  }


  render() {

    return (
      <div>
        <h2>Formulario</h2>

        <form onSubmit={this.sendForm}>
          {Array.isArray(this.state.data) ? this.state.data.map((ejercicio, index) => {
            return (
              <p key={index}>
                <label htmlFor={this.state.pruebas[index]}>
                  {this.state.pruebas[index]}: <input type="text" key={index} value={this.state.data[index]} position={index} name={this.state.pruebas[index]} onChange={this.handleChanges} />
                </label>
              </p>

            )
          }) : null}
          <input type="submit" value="Actualizar" />
        </form>

      </div>
    )
  }
}
