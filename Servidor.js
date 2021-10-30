const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Conexion
mongoose.connect('mongodb+srv://ProWeb:ProWebMintic@misionticciclo4.vei8m.mongodb.net/EjercicioSem1?retryWrites=true&w=majority')

app.listen(3000, () => {
    console.log('servidor conectado a puerto 3000')
});