const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ejercises = new Schema({
  username : { type: Schema.ObjectId, ref: 'Users'} ,
  Peso: Number,
  Banca : Number,
  Militar: Number,
  Dominadas: Number,
  PesoMuerto: Number,
  Aerobico: String,
  Velocidad: String,
  ResistenciaFlexiones: Number,
  ResistenciaSentadillas: Number,
  SaltoVertical: Number

})

const Ejercises = mongoose.model('ejercises', ejercises);
module.exports = Ejercises;