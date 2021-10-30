const express = require('express');
const mongoose = require('mongoose');
const CandidatoSchema=require('./Modelos/Candidatos.js');

const app = express();

const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Conexion
mongoose.connect('mongodb+srv://ProWeb:ProWebMintic@misionticciclo4.vei8m.mongodb.net/EjercicioSem1?retryWrites=true&w=majority')
//CRUD

router.get('/', (req,res) => {
    res.send("Inicio de la Api Rest")
});
app.listen(3000, () => {
    console.log('servidor conectado a puerto 3000')
});