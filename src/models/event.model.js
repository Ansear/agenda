import { pool } from "../../database/db.js";

export class Event {

    create = async(req,res)=>{
        try {
            const {title,start_date,end_date,description} = req.body;
            const [rows] = await pool.query("INSERT INTO festivals (title,start_date,end_date,description) VALUES (?,?,?,?)",[title,start_date,end_date,description])
            return   
        } catch (error) {
            return "myException";
        }   
    }

    index = async(req,res)=>{
        try{
            const [index] = await pool.query("SELECT * FROM festivals")
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

    indexOne = async (req,res)=>{
        try{
            const [index] = await pool.query("SELECT * FROM festivals WHERE id = ?",[req.params.id])
            if (index.length<=0)return res.status(404).json({
                message: 'Event not found'
            })
            res.send({index})

        }catch(error){
            return res.status(500).json({
                message:'ERROR'
            })
        }
    }

    update = async (req,res)=>{
        try {
            const {id} = req.params.id;
            const {title,description,start_date,end_date} = req.body;
            console.log(req.body);
            console.log(req.params.id);
            const [result] = await pool.query("UPDATE festivals SET title=IFNULL(?,title), description=IFNULL(?,description), start_date=IFNULL(?,start_date), end_date=IFNULL(?,end_date) WHERE id = ?",[title,description,start_date,end_date, id]);
            if(result.affectedRows === 0) return res.send("no funciono")
            res.send("updated correctly")
        } catch (error) {
            return res.status(500).json({
                message:'ERROR'
            })
        }
    }

    delete = async (req,res)=>{
        try{
            const [result] = await pool.query('DELETE FROM festivals WHERE id = ?',[req.params.id])
            if(result.affectedRows<=0)return res.status(404).json({
                message:'Event not found'
            })
            res.send("Correctly eliminated")

        }catch(error){
            return res.status(500).json({
                message:'Event not found'
            })
        }
    }
}
export default Event