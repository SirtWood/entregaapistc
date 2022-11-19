import express from 'express'
import { ControladorHabitacion } from '../controllers/controladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'

//EN el archivo de rutas creo una variable encargada de definir todos los end points de mi API.
//Por cada servicio que ofrece mi API debo tener un end point o ruta.

export let rutas = express.Router()

//Creo un objeto de la clase ControladorHAbitacion:
let controladorHabitacion = new ControladorHabitacion()
let controladorReserva = new ControladorReserva()

//Defino las rutas para cada servicio de mi API:

//Registro de una habitacion
rutas.post('/api/hotel/habitaciones', controladorHabitacion.agregarHabitacion)
//Buscar todas las habitaciones registradas.
rutas.get('/api/hotel/habitaciones', controladorHabitacion.consultarHabitaciones)
//buscar por id una habitacion:
rutas.get('/api/hotel/habitaciones/:id', controladorHabitacion.consultarHabitacion)
//Editar los datos de una habitacion:
rutas.put('/api/hotel/habitaciones/:id', controladorHabitacion.editarHabitacion)

//Rutas para servicio de reservas
rutas.post('/api/hotel/reservas', controladorReserva.agregarReserva)
rutas.get('/api/hotel/reservas', controladorReserva.consultarReservas)
rutas.get('/api/hotel/reservas/:id', controladorReserva.consultarReserva)
rutas.put('/api/hotel/reservas/:id', controladorReserva.editarReserva)