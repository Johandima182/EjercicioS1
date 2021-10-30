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

router.post('/candidatos', (req,res) => {
    let nuevocandidato = new CandidatoSchema({
        idCandidato : req.body.id,
        tipoDocCandidato:  req.body.TipoDoc,
        numDocCandidato :  req.body.NumDoc,
        nombreCandidato:  req.body.Nombre,
        apellidoCandidato :  req.body.Apellido,
        direccionCandidato :  req.body.Direccion,
        correoCandidato :  req.body.Correo,
        telefonoCandidato : req.body.Telefono,
        celularCandidato:  req.body.Celular,
        sitioWebCandidato:  req.body.SitioWeb,
        perfilcandidato:  req.body.Perfil
    })

    nuevocandidato.save(function(err,datos){
        if(err){
            console.log(err);
        }
        res.send("Candidato Guardado")
    })
})
app.use(router);
app.listen(3000, () => {
    console.log('servidor conectado a puerto 3000')
});