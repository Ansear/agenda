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

    titleEvent = async (req,res) =>{
        try{
            const result = await evento.titleEvent(req,res);
            if(result <= 0 ) return res.send("Event not found")
            res.send(result);
    
        }catch(error){
            res.status(500).json({
                message:error.message
            })
            return 
        }
    }

    longerDate = async(req,res)=>{
        try{
            const index = await evento.longerDate(req,res)
            if (index<=0)return res.status(404).json({
                message: 'No Events'
            })
            
            res.send(index);
            
        }catch(error){
            return res.send(error.message);
        }
    }
    
    lowerDate = async(req,res)=>{
        try{
            
            const index = await evento.lowerDate(req,res)
            if (index<=0)return res.status(404).json({
                message: 'No Events'
            })
            res.send(index);
        }catch(error){
            return res.send(error.message);
        }
    }
    
    betweenDates = async(req,res)=>{
        try{
            const index = await evento.betweenDates(req,res)
            if (index <=0)return res.status(404).json({
                message: 'No Events'
            })
            res.send(index);
        }catch(error){
            return res.send(error.message);
        }
    }
    yearEvent = async (req, res) => {
        try{
            const [year] = await evento.yearDate(req,res)
            if (year <= 0) return res.status(404).json({
                message:"No Events"
            })
            res.send({year});
        }catch(error){
           res.send(error.message)
        }
    }

    monthEvent = async (req,res)=>{
        try{
            const [month] = await evento.monthDate(req,res);
            if (month <= 0)return res.status(404).json({
                message:"No Events"
            })
            res.send(month);
        }catch(error){
            res.send(error.message)
        }
    }

    dayEvent = async (req,res) => {
        try{
            const [day] = await evento.dayDate(req,res)
            if (day <= 0) return res.status(404).json({
                message:"No events"
            })
            res.send({day});
        }catch(error){
            res.send(error.message )
        }
    }
} 

export default eventController
