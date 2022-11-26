const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonasSchema = new Schema({
    nombres:{type: String, required: true, max: 100},
    apellidos:{type: String, required: true, max: 100},
    edad:{type: Number, required: true, max: 100},
    tipoDocumento:{type: String, required: true, max: 60},
    numDocumento:{type: String, required: true, max: 60},
    diagnostico:{type: String, required: true, max: 100},
    telefono:{type: String, required: true, max: 30}
});

module.exports = mongoose.model("personas", PersonasSchema);

