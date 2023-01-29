import { Router } from "express";
import { festivalPaticipant,participanOfEvent,eventOfParticipant,longerDate,lowerDate,betweenDates } from "../controllers/participan_event.controller.js";

const router = Router()

router.post('/festivalPaticipant', festivalPaticipant)
router.post('/participantOfEvent',participanOfEvent) //Buscar participantes por evento
router.post('/eventOfParticipant',eventOfParticipant) //Buscar eventos por participantes
router.post('/lowerDate',lowerDate) //Buscar eventos Menores a fecha
router.post('/longerDate',longerDate) //Buscar eventos Mayores a fecha
router.post('/betweenDate',betweenDates) //Buscar eventos entre fechas

export default router
