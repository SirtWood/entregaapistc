import mongoose from 'mongoose';

//Definiendo nuestro esquema de datos.
const Schema = mongoose.Schema;

const EsquemaHabitacion = new Schema({
    nombre: {
        required: true,
        type: String
    },
    valorNoche: {
        required: true,
        type: Number
    },
    numeroMaximoPersonas: {
        required: true,
        type: Number
    },
    foto: {
        required: true,
        type: String
    },
    descripcion: {
        required: true,
        type: String
    }
});

export const modeloHabitacion = mongoose.model('habitacion', EsquemaHabitacion)