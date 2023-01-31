import { Router } from "express";
import { createUser,indexUser,indexUsers,deleteUser,updateUsers } from "../controllers/participan.controller.js";


const router = Router()

router.get('/participant', indexUser )
router.get('/participant/:id', indexUsers )
router.post('/participant', createUser)
router.put('/participant/:id', updateUsers)
router.delete('/participant/:id', deleteUser)

export default router   