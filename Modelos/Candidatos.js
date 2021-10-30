const mongoose = require("mongoose");

let CandidatoSchema = new mongoose.Schema({
    idCandidato : Number,
    tipoDocCandidato: String,
    numDocCandidato : String,
    nombreCandidato: String,
    apellidoCandidato : String,
    direccionCandidato : String,
    correoCandidato : String,
    telefonoCandidato :String,
    celularCandidato: String,
    sitioWebCandidato: String,
    perfilcandidato: String
})
module.exports=mongoose.model('candidato', CandidatoSchema, 'Candidatos');