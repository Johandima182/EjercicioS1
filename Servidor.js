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
            res.send(datos);
        }
    })
})

router.get('/candidatos/:id', (req,res) => {
    CandidatoSchema.findById(req.params.id, function (err,datos){
        if (err){
            console.log("El candidato no existe");
        }else{
            console.log(datos);
        }
    })
})

router.delete('/candidatos/:id' , (req,res) => {
    CandidatoSchema.findByIdAndDelete(req.params.id , function(err, datos){
        if(err){
            console.log("Error al eliminar el candidato");
        }else{
            console.log("Candidato eliminado");
        }
    })
})

router.put('/candidatos/:id', (req, res) => {
    const candidatoactualizado = {
        nombreCandidato: req.body.Nombre, 
        apellidoCandidato: req.body.Apellido 
    }

    CandidatoSchema.findByIdAndUpdate(req.params.id , candidatoactualizado, function(err, data) {
        if (err) {
            console.log("Hay un error al actualizar");
        } else {
            res.send("El candidato a sido actualizado");
        }
    })
})
app.use(router);
app.listen(3000, () => {
    console.log('servidor conectado a puerto 3000')
});