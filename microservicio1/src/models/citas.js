const mongoose = require("mongoose");
const { Schema } = mongoose;

const citasSchema = new Schema(
    {
        identificacion: Number,
        nombre_paciente: String,
        doctor:String,
        especialidad: String,
        fecha: Date,
        hora: String,
        estado: String
    }
);

module.exports = mongoose.model('Citas',citasSchema);