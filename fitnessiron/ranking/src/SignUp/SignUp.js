import React, { Component } from 'react'
import Api from '../api'
import FormEj from '../FormEj/FormEj'

export default class SignUp extends Component {


  state = {
    username: "",
    password: "",
    mail: "",
    genre:"male",
    height:"",
    registrado: false
  }


  change = (e) => {
    e.preventDefault()

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
    

  }

  submitForm = (e) => {
    e.preventDefault()

    const api = new Api()
    api.signUp(this.state)
      .then(data => {
        this.setState({
          ...this.state,
          registrado: true
        })
      })

  }

  render() {

    if (this.state.registrado) {
      return (
        <FormEj username={this.state.username} />
      )
    } else {
      return (
        <div>
          <form onSubmit={this.submitForm}>

            <label htmlFor="username">
              Username: <input type="text" name="username" value={this.state.username} onChange={this.change} />
            </label>
            <label htmlFor="mail">
              Mail: <input type="text" name="mail" value={this.state.mail} onChange={this.change} />
            </label>
            <label htmlFor="password">
              Password: <input type="text" name="password" value={this.state.password} onChange={this.change} />
            </label>
            <label htmlFor="height">
              Height: <input type="text" name="height" value={this.state.height} onChange={this.change} />
            </label>
            <label htmlFor="genre">
              Genre:
              <select name="genre" onChange={this.change}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <input type="submit" value="Enviar" />
          </form>

        </div>
      )
    }

  }
}
