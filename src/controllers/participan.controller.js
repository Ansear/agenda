import { pool } from "../../database/db.js";


export const createUser = async(req,res)=>{
    try {
        const [rows] = await pool.query("INSERT INTO participants (name) VALUES (?)",[req.body.name])
        res.send("Successfully created");    
    } catch (error) {
        return res.status(500).json({
            message:'ERROR'
        })
    }   
}

export const indexUser = async(req,res)=>{
    try{
        const [index] = await pool.query("SELECT * FROM participants",)
        if (index.length<=0)return res.status(404).json({
            message: 'No participants'
        })
        res.send({index});
    }catch(error){
        return res.status(500).json({
            message:'ERROR'
        })
    }
}

export const indexUsers = async (req,res)=>{
    try{
        const [index] = await pool.query("SELECT * FROM participants WHERE id = ?",[req.params.id])
        if (index.length<=0)return res.status(404).json({
            message: 'Participant not found'
        })
        res.send({index})

    }catch(error){
        return res.status(500).json({
            message:'ERROR'
        })
    }
}

export const updateUsers = async (req,res)=>{
    try {
        const [resul] = await pool.query("UPDATE participants SET  name=IFNULL(?,name) WHERE id = ?",[req.body.name,req.params.id])
        res.send("updated correctly")
    } catch (error) {
        return res.status(500).json({
            message:'ERROR'
        })
    }
}

export const deleteUser= async (req,res)=>{
    try{
        const [result] = await pool.query('DELETE FROM participants WHERE id = ?',[req.params.id])
        if(result.affectedRows<=0)return res.status(404).json({
            message:'participant not found'
        })
        res.send("Correctly eliminated")

    }catch(error){
        return res.status(500).json({
            message:'Participant not found'
        })
    }
}