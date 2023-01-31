import ParticipantEvent from "../models/participant_event.model.js";

const participantEvent = new ParticipantEvent();

class ParticipantEventController {

    festivalPaticipant = async(req,res) =>{
        try {
            const event = await participantEvent.create(req,res);
            res.send("successfully");
        } catch (error) {
            return res.send(error.message);
        }
    }
    
    participanOfEvent = async(req,res)=>{
        try{
            const existe = await participantEvent.participanOfEvent(req,res)
            if(existe <= 0){
                res.send("No Participants")
            }
            res.send(existe);
        }catch(error){
            return res.send(error.message);
        }
    }
    
    eventOfParticipant = async(req,res)=>{
        try{
            
            const index = await participantEvent.eventOfParticipant(req,res)
            if (index<=0)return res.status(404).json({
                message: 'No Events'
            })
            res.send(index);
        }catch(error){
            return res.send(error.message);
        }
    }
    
    
}

export default ParticipantEventController;