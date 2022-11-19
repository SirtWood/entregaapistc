import { API } from "./API/API.js"
import * as dotenv from 'dotenv'
dotenv.config()

//Creamos un objeto de la clase API para utilizarla
let apiHotel = new API()

//Encender el servidor para poder ejecutar correctamente el API
apiHotel.levartarServidor()