const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
const app = express()
var mongoDB = 'mongodb://127.0.0.1/ranking';

const Users = require('./models/Users.js')
const Ejercises = require('./models/Ejercises')
const Percentajes = require('./models/Percentaje')
const Goals = require('./models/Goals')

mongoose.connect(mongoDB);

app.use(cors())


app.get('/getdata', (req, res, next) => {

  Users.find()
    .then(data => {
      res.json({ data })

    })

})


app.get('/signup', (req, res, next) => {

  const { username, password, genre,height } = req.query

  Users.create({ username, password,height, media: 0, genre })
    .then(data => {

      Ejercises.insertMany({
        username: data._id,
        Peso: 0,
        Banca: 0,
        Militar: 0,
        Dominadas: 0,
        PesoMuerto: 0,
        Aerobico: 0,
        Velocidad: 0,
        ResistenciaFlexiones: 0,
        ResistenciaSentadillas: 0,
        SaltoVertical: 0
      })
        .then(data => {

          Percentajes.insertMany({
            username: data[0].username,
            Banca: 0,
            Militar: 0,
            Dominadas: 0,
            PesoMuerto: 0,
            Aerobico: 0,
            Velocidad: 0,
            ResistenciaFlexiones: 0,
            ResistenciaSentadillas: 0,
            SaltoVertical: 0
          })
            .then(data => {
              res.json({ data })
            })


        })


    })


})


app.get('/getuserranking', (req, res, next) => {

  const { username } = req.query

  Users.findOne({ username })
    .then(data => {

      Ejercises.find({ username: data._id })
        .then(data => {

          res.json({ data })
        })
    })

})

app.get('/update', (req, res, next) => {

  const username = req.query.username

  Users.findOne({ username })
    .then(data => {

      const height = data.height
      const genre = data.genre
      const id = data._id
      const datos = req.query
      let newObject = {}
      delete datos.username


      for (const prop in datos) {
        
        if(prop != "Aerobico"){
          if(prop == "Velocidad"){
          } else {
          datos[prop] = parseFloat(datos[prop])
        }
        }
        newObject = {
          ...datos,
          prop: datos[prop]
        }
        delete newObject.prop
        
        
      }
      
      
      Ejercises.findOneAndUpdate({ username: id }, newObject, {
        new: true
      })
        .then(data => {
          const username = data.username
          
         
          Goals.findOne({genre:genre})
            .then(respuesta => {

              const peso = newObject.Peso
              const datos = respuesta
              const personalGoals = {}
              const porcentajes = {}
              let total = 0

              for (const propsDatos in datos) {
                switch (propsDatos) {
                  case "Banca":
                    personalGoals.Banca = peso
                    porcentajes.Banca = newObject.Banca * 100 / personalGoals.Banca
                    total += porcentajes.Banca
                    break;
                  case "Militar":
                    personalGoals.Militar = peso * datos[propsDatos]
                    porcentajes.Militar = newObject.Militar * 100 / personalGoals.Militar
                    total += porcentajes.Militar
                    break;
                  case "Dominadas":
                    personalGoals.Dominadas = 10;
                    porcentajes.Dominadas = newObject.Dominadas * 100 / personalGoals.Dominadas
                    total += porcentajes.Dominadas
                    break;
                  case "Sentadilla":
                    personalGoals.Sentadilla = peso * datos[propsDatos];
                    porcentajes.Sentadilla = newObject.Sentadilla * 100 / personalGoals.Sentadilla
                    total += porcentajes.Sentadilla
                    break;
                  case "PesoMuerto":
                    personalGoals.PesoMuerto = peso * datos[propsDatos]
                    porcentajes.PesoMuerto = newObject.PesoMuerto * 100 / personalGoals.PesoMuerto
                    total += porcentajes.PesoMuerto
                    break;
                  case "ResistenciaFlexiones":
                    porcentajes.ResistenciaFlexiones = newObject.ResistenciaFlexiones * 100 / datos[propsDatos]
                    total += porcentajes.ResistenciaFlexiones
                    break;
                  case "ResistenciaSentadillas":
                    porcentajes.ResistenciaSentadillas = newObject.ResistenciaSentadillas * 100 / datos[propsDatos]
                    total += porcentajes.ResistenciaSentadillas
                    break;
                    case "Aerobico":
                    newObject.Aerobico = newObject.Aerobico.split(':')
                    const segundosEjercise = parseFloat(newObject.Aerobico[1]) + (newObject.Aerobico[0]*60)
                    porcentajes.Aerobico = datos[propsDatos] * 100 / segundosEjercise 
                    total += porcentajes.Aerobico
                    break;
                    case "Velocidad":
                    newObject.Velocidad = newObject.Velocidad.split(':')
                    const MiliSegundosEjercise = parseFloat(newObject.Velocidad[1]) + (newObject.Velocidad[0]*1000)
                    porcentajes.Velocidad = datos[propsDatos] * 100 / MiliSegundosEjercise
                    break;
                    case "SaltoVertical":
                    //NewObject son mis registros
                    porcentajes.SaltoVertical = newObject.SaltoVertical * 100 / (height/2)
                    total += porcentajes.SaltoVertical
                    break;
                }

              }


              total = total / 9
              Percentajes.findOneAndUpdate({ username: id }, porcentajes)
                .then(data => {

                  Users.findByIdAndUpdate(username, { media: total })
                    .then(data => {
                      console.log("Subida media con exito?")
                    })
                })


            })

          // Uso directamente NewObject y quiero usar data
          // Percentajes.findOneAndUpdate({username},newObject,{new: true,upsert: true})
          // .then(data=>{
          //   console.log(data,"Esto devuelve percentajes")
          //   res.json(data)
          // })


        })


    })




})

app.listen(4000)
