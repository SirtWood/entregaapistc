import express from 'express'
import { rutas } from '../routes/rutasAPI.js'
import {conectarConBaseDatos} from '../database/conexionDataBase.js'

export class API{
    constructor(){
        this.app = express()
        this.atenderPeticiones()
        this.conectarConBD()
    }

    levartarServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log("Servidor encendido " + process.env.PORT)
        })
    }

    conectarConBD(){
        conectarConBaseDatos()
    }

    atenderPeticiones(){
        this.app.use(express.json()) //Habilita la recepcion de datos por el body de la peticion.
        this.app.use('/', rutas)
    }


}