import axios from 'axios';

export default class getData {
  constructor() {
    this.host = axios.create({
      baseURL: "http://localhost:4000",
    });
  }

  getData = ()=>{
    return this.host.get(`/getdata`)
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  }

  signUp = (user)=>{
    return this.host.get(`/signup?username=${user.username}&password=${user.password}&genre=${user.genre}&height=${user.height}`)
    .then(data=>{
      return data
    })

  }

  getUserRanking = (username)=>{

    return this.host.get(`/getuserranking?username=${username}`)
    .then(data=>{
        return data.data.data
    })

    
  }


  update = (data)=>{


    const numbers = data.data
    // const numbers = numeros.map(num=>{return parseFloat(num)})
    const names = data.pruebas
    const username = data.username
    
    return this.host.get(`/update?${names[0]}=${numbers[0]}&${names[1]}=${numbers[1]}&${names[2]}=${numbers[2]}&${names[3]}=${numbers[3]}&${names[4]}=${numbers[4]}&${names[5]}=${numbers[5]}&${names[6]}=${numbers[6]}&${names[7]}=${numbers[7]}&${names[8]}=${numbers[8]}&${names[9]}=${numbers[9]}&username=${username}`)
    .then(data=>{
        return data.data
    })

  }

 




}