import mongoose from 'mongoose';

export async function conectarConBaseDatos(){

    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectandonos con BD")
    }
    catch(error){
        console.log("Error en bd: " + error)
    }

}
