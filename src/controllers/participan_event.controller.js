import { pool } from "../../database/db.js"; 

export const festivalPaticipant = async(req,res) =>{
    try {
        const {participant,evento} = req.body;
        const event = await pool.query("INSERT INTO participant_festivals (idFestival,idParticipant) VALUES (?,?)",[evento,participant])
        res.send("successfully");
    } catch (error) {
        return res.status(500).json({
            message:'ERROR'
        })
    }
}

export const participanOfEvent = async(req,res)=>{
    try{
        const {event} = req.body
        const [existe] = await pool.query("SELECT * FROM festivals WHERE = (?)",[event])
        if(existe.length)return res.status(404).json({message: 'event not found'})
        
        // const [index] = await pool.query("SELECT participants.name FROM participants INNER JOIN participant_festivals ON participant_festivals.idParticipant = participants.id INNER JOIN festivals ON festivals.id = participant_festivals.idFestival WHERE festivals.title = (?)",[event])

        // if (index.length<=0) {return res.status(404 ).json({
            
            
        //     })
        // }
        res.send({index});
    }catch(error){
        return res.status(500).json({
            message:'ERROR'
        })
    }
}

export const eventOfParticipant = async(req,res)=>{
    try{
        console.log(req.body.participant)
        const [index] = await pool.query("SELECT festivals.title FROM festivals INNER JOIN participant_festivals ON participant_festivals.idFestival = festivals.id INNER JOIN participant ON participant.id = participant_festivals.idParticipant WHERE participant.nombre = (?)",[req.body.participant])
        if (index.length<=0)return res.status(404).json({
            message: 'No Events'
        })
        res.send({index});
    }catch(error){
        return res.status(500).json({
            message:'ERROR'
        })
    }
}

export const longerDate = async(req,res)=>{
    try{
        const [index] = await pool.query("SELECT * FROM festivals WHERE festivals.start_date > (?)",[req.body.date])
        if (index.length<=0)return res.status(404).json({
            message: 'No Events'
        })
        res.send({index});
    }catch(error){
        return res.status(500).json({
            message:'ERROR'
        })
    }
}

export const lowerDate = async(req,res)=>{
    try{
        console.log(req.body.date)
        const [index] = await pool.query("SELECT * FROM festivals WHERE festivals.start_date < (?)",[req.body.date])
        if (index.length<=0)return res.status(404).json({
            message: 'No Events'
        })
        res.send({index});
    }catch(error){
        return res.status(500).json({
            message:'ERROR'
        })
    }
}

export const betweenDates = async(req,res)=>{
    try{
        const {first,second} = req.body;
        const [index] = await pool.query("SELECT * FROM festivals WHERE festivals.start_date BETWEEN (?) AND (?)",[first,second])
        if (index.length<=0)return res.status(404).json({
            message: 'No Events'
        })
        res.send({index});
    }catch(error){
        return res.status(500).json({
            message:'ERROR'
        })
    }
}