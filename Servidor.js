const express = require('express');
const mongoose = require('mongoose');
const Candidatos = require('./Modelos/Candidatos.js');
const CandidatoSchema = require('./Modelos/Candidatos.js');

const app = express();

const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Conexion
mongoose.connect('mongodb+srv://ProWeb:ProWebMintic@misionticciclo4.vei8m.mongodb.net/EjercicioSem1?retryWrites=true&w=majority')
//CRUD

router.get('/', (req, res) => {
    res.send("Inicio de la Api Rest")
});

router.post('/candidatos', (req, res) => {
    let nuevocandidato = new CandidatoSchema({
        idCandidato: req.body.id,
        tipoDocCandidato: req.body.TipoDoc,
        numDocCandidato: req.body.NumDoc,
        nombreCandidato: req.body.Nombre,
        apellidoCandidato: req.body.Apellido,
        direccionCandidato: req.body.Direccion,
        correoCandidato: req.body.Correo,
        telefonoCandidato: req.body.Telefono,
        celularCandidato: req.body.Celular,
        sitioWebCandidato: req.body.SitioWeb,
        perfilcandidato: req.body.Perfil
    });

    nuevocandidato.save(function (err, datos) {
        if (err) {
            console.log(err);
        }
        res.send("Candidato Guardado")
    })
})

router.get('/candidatos', (req, res) => {
    CandidatoSchema.find(function (err, datos) {
        if (err) {
            console.log("Error al buscar datos");
        } else {
            console.log(datos);
        }
    })
})

router.get('/candidatos/:id', (req,res) => {
    CandidatoSchema.findOne({"_id" : req.params.id}, function (err,datos){
        if (err){
            console.log("El candidato no existe");
        }else{
            console.log(datos);
        }
    })
})

router.delete('/candidatos/:id' , (req,res) => {
    CandidatoSchema.deleteOne({_id : req.params.id} , function(err, datos){
        if(err){
            console.log("Error al eliminar el candidato");
        }else{
            console.log("Candidato eliminado");
        }
    })
})

router.put('/candidatos', (req, res) => {
    let candidatoModificado = {
        tipoDocCandidato: req.body.TipoDoc,
        numDocCandidato: req.body.NumDoc,
        nombreCandidato: req.body.Nombre,
        apellidoCandidato: req.body.Apellido,
        direccionCandidato: req.body.Direccion,
        correoCandidato: req.body.Correo,
        telefonoCandidato: req.body.Telefono,
        celularCandidato: req.body.Celular,
        sitioWebCandidato: req.body.SitioWeb,
        perfilcandidato: req.body.Perfil
    }
    CandidatoSchema.updateOne({_id:req.params.id} ,  function() {
        res.send(candidatoModificado);
    });
})
app.use(router);
app.listen(3000, () => {
    console.log('servidor conectado a puerto 3000')
});