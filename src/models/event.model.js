import { pool } from "../../database/db.js";

export class Event {

    create = async(req,_)=>{
        
            const {title,start_date,end_date,description} = req.body;
            const [rows] = await pool.query("INSERT INTO festivals (title,start_date,end_date,description) VALUES (?,?,?,?)",[title,start_date,end_date,description])
            return   
    
    }

    index = async(_,res)=>{
        
            const [index] = await pool.query("SELECT * FROM festivals")
            return ({index});
    }

    indexOne = async (req,res)=>{
        
            const [index] = await pool.query("SELECT * FROM festivals WHERE id = ?",[req.params.id])
            return ({index})

    }
    titleEvent = async (req,res)=>{
        
            const [index] = await pool.query("SELECT * FROM festivals WHERE title = ?",[req.body.title])
            return (index)
    }

    
    longerDate = async(req,res)=>{
        
                const [index] = await pool.query("SELECT * FROM festivals WHERE festivals.start_date > (?)",[req.body.date])
                
                return index;
        }
        
        lowerDate = async(req,res)=>{
        
                
                const [index] = await pool.query("SELECT * FROM festivals WHERE festivals.start_date < (?)",[req.body.date])

                return index;
        }
        
        betweenDates = async(req,res)=>{
        
                const {start_date,end_date} = req.body;
                const [index] = await pool.query("SELECT * FROM festivals WHERE festivals.start_date BETWEEN (?) AND (?)",[start_date,end_date])
                console.log(req.body)
                return index;
        }

        yearDate = async (req,res)=>{
                const {year} = req.body;
                const index = await pool.query("SELECT * FROM festivals WHERE year(start_date) = (?)",[year])
                return index;
        }

        monthDate = async (req,res)=>{
                const {month} = req.body;
                const index = await pool.query("SELECT * FROM festivals WHERE month(start_date) = (?)",[month])
                return index;
        }

        dayDate = async (req,res)=>{
                const {day} = req.body;
                const index = await pool.query("SELECT * FROM festivals WHERE day(start_date) = (?)",[day])
                return index;
        }
}
export default Event