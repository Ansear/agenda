import { pool } from "../../database/db.js";

 class Participant{

        create = async(req,res)=>{
                
                    const rows = await pool.query("INSERT INTO participants (name) VALUES (?)",[req.body.name])
                    return("Successfully created");   
            }
            
        index = async(_,res)=>{
        
                const index = await pool.query("SELECT * FROM participants")
                if (index.length<=0)return res.status(404).json({
                message: 'No participants'
                })
                return (index);
        }
            
        indexId = async (req,res)=>{

                const [index] = await pool.query("SELECT * FROM participants WHERE id = ?",[req.params.id])
                if (index.length<=0)return res.status(404).json({
                message: 'Participant not found'
                })
         return

        }
            
        update = async (req,_)=>{
        
                const [resul] = await pool.query("UPDATE participants SET  name=IFNULL(?,name) WHERE id = ?",[req.body.name,req.params.id])
                return ("updated correctly")
        }
        
        delete= async (req,res)=>{
        
                const [result] = await pool.query('DELETE FROM participants WHERE id = ?',[req.params.id])
                if(result.affectedRows<=0)return res.status(404).json({
                message:'participant not found'
                })
                return ("Correctly eliminated")
        }
}


export default Participant