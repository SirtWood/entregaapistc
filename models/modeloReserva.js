import mongoose from 'mongoose';

//Definiendo nuestro esquema de datos.
const Schema = mongoose.Schema;

const EsquemaReserva = new Schema({
    
    fechaEntrada:{
        require: true,
        type: Date
    },
    numeroNinos: {
        require: true,
        type: Number
    },
    numeroAdultos: {
        require: true,
        type: Number
    },
    idHabitacion: {
        require: true,
        type: String
    },
    costo: {
        require: true,
        type: Number
    }

});

export const modeloReserva = mongoose.model('reserva', EsquemaReserva)