import Event from "../models/event.model.js";

const evento = new Event();

class eventController {
    createEvent = async(req,res)=>{
        try {
            const prueba = await evento.create(req,res);
            if (prueba=="myException")
                {
                    throw "error"; 
                }
            res.send("Successfully created addd");   
        } catch (error) {
            res.status(500).json({
                message:'ERROR Controller'
            })
            return 
        }   
    }

    indexEvent = async(req,res)=>{
        try{
            const result = await evento.index(req,res);
            res.send(result);
        }catch(error){
            res.status(500).json({
                message:'ERROR'
            })
            return 
        }
    }
    
    indexEvents = async (req,res)=>{
        try{
            const result = await evento.indexOne(req,res);
            res.send(result);
    
        }catch(error){
            res.status(500).json({
                message:'ERROR'
            })
            return 
        }
    }
    
    updateEvent = async (req,res)=>{
        try {
            await evento.update(req,res);
            res.send("updated correctly")
        } catch (error) {
             res.status(500).json({
                message:'ERROR'
            })
            return 
        }
    }
    
    deleteEvent= async (req,res)=>{
        try{
            await evento.delete(req,res);
            res.send("Correctly eliminated")
            return 
        }catch(error){
             res.status(500).json({
                message:'Event not found'
            })
            return
        }
    }
}

export default eventController
