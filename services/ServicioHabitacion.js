import { modeloHabitacion } from "../models/modeloHabitacion.js"

export class ServicioHabitacion{

    async agregarHabitacion(habitacion){
        let nuevaHabitacion = new modeloHabitacion(habitacion)
        return await nuevaHabitacion.save() 
    }
    async buscarTodasHabitaciones(){
        let habitacionesEncontradas = await modeloHabitacion.find()
        return habitacionesEncontradas
    }
    async buscarHabitacionPorId(id){
        let habitacionEncontrada = await modeloHabitacion.findById(id)
        return habitacionEncontrada
    }
    async editarHabitacion(id,datosNuevos){
        return await modeloHabitacion.findByIdAndUpdate(id,datosNuevos)
    }
}