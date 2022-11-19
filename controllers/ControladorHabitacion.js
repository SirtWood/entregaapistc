//Una clase controlador establece los metodos (acciones) que vamos a realizar en DB.
//Y está alineado con el archivo de rutas.

import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{
    
    constructor(){}

    async agregarHabitacion(request, response){

        let datosARegistrar = request.body
        let objetoServicio = new ServicioHabitacion()

        try{

            await objetoServicio.agregarHabitacion(datosARegistrar)
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":null
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta " + error,
                "datos":null
            })
        }
    }

    async consultarHabitaciones(request, response){

        let objetoServicio = new ServicioHabitacion()

        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de habitaciones",
                "datos": await objetoServicio.buscarTodasHabitaciones()
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta " + error,
                "datos":null
            })
        }
    }

    async consultarHabitacion(request, response){

        let objetoServicio = new ServicioHabitacion()
        let id = request.params.id
        //console.log("El id enviado fue: " + id)
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de una habitacion",
                "datos":await objetoServicio.buscarHabitacionPorId(id)
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta " + error,
                "datos":null
            })
        }
    }

    async editarHabitacion(request, response){

        let id = request.params.id
        let datosAEditar = request.body
        let objetoServicio = new ServicioHabitacion()

        //console.log("Editando a: " + id)
        //console.log(datosAEditar)

        try{
            await objetoServicio.editarHabitacion(id,datosAEditar)
            response.status(200).json({
                "mensaje":"Exito en la operacion al editar habitacion",
                "datos":null
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta " + error,
                "datos":null
            })
        }
    }
}