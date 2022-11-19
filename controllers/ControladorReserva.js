import { ServicioReserva } from "../services/ServicioReserva"

export class ControladorReserva{

    constructor(){}

    async agregarReserva(request, response){

        let datosARegistrar = request.body
        let objetoServicio = new ServicioReserva()

        try{

            await objetoServicio.agregarReserva(datosARegistrar)

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

    async consultarReservas(request, response){

        let objetoServicio = new ServicioReserva()

        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de habitaciones",
                "datos": await objetoServicio.buscarTodasReservas()
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta " + error,
                "datos":null
            })
        }
    }

    async consultarReserva(request, response){

        let id = request.params.id
        let objetoServicio = new ServicioReserva()

        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de una habitacion",
                "datos": await objetoServicio.buscarReservaPorId(id)
            })
        }
        catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta " + error,
                "datos":null
            })
        }
    }
    
    async editarReserva(request, response){

        let id = request.params.id
        let datosAEditar = request.body
        let objetoServicio = new ServicioReserva()
        
        try{

            await objetoServicio.editarReserva(id,datosAEditar)
            
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