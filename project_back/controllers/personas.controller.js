const Persona = require("../models/personas.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let persona = new Persona({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        tipoDocumento: req.body.tipoDocumento,
        numDocumento: req.body.numDocumento,
        diagnostico: req.body.diagnostico,
        telefono: req.body.telefono
    })

    persona.save(function(err){
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar a la persona."
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La persona se guardo correctamente."
        res.json(response)
    })
}

exports.find = function(req, res){
    Persona.find(function(err, personas){
        res.json(personas)
    })
}

exports.findOne = function(req, res){
    Persona.findOne({_id: req.params.id}, function(err, persona){
        res.json(persona)
    })
}

exports.update = function(req, res){
    let persona ={
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        edad: req.body.edad,
        tipoDocumento: req.body.tipoDocumento,
        numDocumento: req.body.numDocumento,
        diagnostico: req.body.diagnostico,
        telefono: req.body.telefono
    }

    Persona.findByIdAndUpdate(req.params.id, {$set: persona}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar a la persona."
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La persona se modifico correctamente."
        res.json(response)
    })
}

exports.remove = function(req, res){
    Persona.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar a la persona."
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La persona se elimino correctamente."
        res.json(response)
    })
}



