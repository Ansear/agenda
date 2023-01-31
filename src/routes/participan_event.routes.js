import { Router } from "express";
import ParticipantEventController from "../controllers/participan_event.controller.js";
const router = Router()
const controller = new ParticipantEventController();

router.post('/festivalPaticipant', controller.festivalPaticipant)
router.post('/participantOfEvent',controller.participanOfEvent) //Buscar participantes por evento
router.post('/eventOfParticipant',controller.eventOfParticipant) //Buscar eventos por participantes


export default router
