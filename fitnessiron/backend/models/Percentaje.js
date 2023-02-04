const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const percentaje = new Schema({
  username : { type: Schema.ObjectId, ref: 'Users'} ,
  Banca : Number,
  Militar: Number,
  Dominadas: Number,
  PesoMuerto: Number,
  Aerobico: Number,
  Velocidad: Number,
  ResistenciaFlexiones: Number,
  ResistenciaSentadillas: Number,
  SaltoVertical: Number

})

const Percentajes = mongoose.model('percentaje', percentaje);
module.exports = Percentajes;