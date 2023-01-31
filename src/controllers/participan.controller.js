import Participant from "../models/participant.model.js";

const participant = new Participant();

class ParticipantController {
    createUser = async(req,res)=>{
        try {
            const [rows] = await participant.create(req,res);
            res.send("Successfully created");    
        } catch (error) {
            return res.send(error.message)
        }   
    }
    
    indexUser = async(req,res)=>{
        try{
            const [participants] = await participant.index(req,res);
            res.send({participants});
        }catch(error){
            return res.send(error.message);
        }
    }
    
    indexUsers = async (req,res)=>{
        try{
             const index = await participant.indexId(req,res);
       
            res.send({index})
    
        }catch(error){
            return res.send(error.message);
        }
    }
    
    updateUsers = async (req,res)=>{
        try {
         await participant.update(req,res);
            res.send("updated correctly")
        } catch (error) {
            return res.send(error.message);
        }
    }
    
    deleteUser= async (req,res)=>{
        try{
            const [result] = await participant.delete(req,res);
            
            res.send("Correctly eliminated")
    
        }catch(error){
            return res.send(error.message);
        }
    }
}

export default ParticipantController;