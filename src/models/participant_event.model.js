import { pool } from "../../database/db.js";

 class ParticipantEvent{

        create = async(req,res) =>{
                    const {participant,evento} = req.body;
                    const event = await pool.query("INSERT INTO participant_festivals (idFestival,idParticipant) VALUES (?,?)",[evento,participant])
                    return event
                }
            
            
        participanOfEvent = async(req,res)=>{
        
                const {event} = req.body
                const [participant] = await pool.query("SELECT participants.name FROM participants p INNER JOIN participant_festivals ON participant_festivals.idParticipant = participants.id INNER JOIN festivals ON festivals.id = participant_festivals.idFestival WHERE festivals.title = (?)",[event])
                return participant
        }
            
        eventOfParticipant = async(req,res)=>{

                const [index] = await pool.query("SELECT festivals.title, festivals.description FROM festivals INNER JOIN participant_festivals ON participant_festivals.idFestival = festivals.id INNER JOIN participants ON participants.id = participant_festivals.idParticipant WHERE participants.name = (?)",[req.body.participant])
                return index

        }
            
        
}


export default ParticipantEvent