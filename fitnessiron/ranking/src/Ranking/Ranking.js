import React, { Component } from 'react'
import './ranking.css'
import Api from '../api'

export default class Ranking extends Component {
  constructor(props) {
    super(props)

    const api = new Api()
    api.getData()
      .then(data => {
        const dataRanking = data.data.data
        const newState = {
          ...this.state,
          data: dataRanking
        }

        this.setState(newState)
      })
  }


  state = {
    data: []
  }

  render() {
    return (
      <div>
        <h2 className="title">Ranking</h2>
        <div className="container">

          <div className="user">

            <p>Nombre</p>
            <p>Puntuacion</p>
            <p>Posicion</p>
          </div>

          {Array.isArray(this.state.data) ? this.state.data.map((user, index) => {
            return (<div className="user" key={index}>
              <p>{user.username}</p>
              <p>{user.media.toFixed(2)}</p>
              <p>{index}</p>
            </div>)
          }) : null}



        </div>
      </div>
    )
  }
}
