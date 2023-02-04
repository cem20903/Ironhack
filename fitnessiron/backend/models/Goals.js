const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const goals = new Schema({
  genre : String,
  Banca: Number,
  Militar: Number,
  Dominadas: Number,
  PesoMuerto: Number,
  ResistenciaFlexiones: Number,
  ResistenciaSentadillas: Number,
  Aerobico: String,
  Velocidad: String,
  SaltoVertical: Number
})

const Goals = mongoose.model('goals', goals);
module.exports = Goals;