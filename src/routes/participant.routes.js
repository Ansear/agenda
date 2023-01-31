import { Router } from "express";
import ParticipantController from "../controllers/participan.controller.js";


const router = Router()
const controller = new ParticipantController;

router.get('/participant', controller.indexUser )
router.get('/participant/:id', controller.indexUsers )
router.post('/participant', controller.createUser)
router.put('/participant/:id', controller.updateUsers)
router.delete('/participant/:id', controller.deleteUser)

export default router   