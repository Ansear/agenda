import { Router } from "express";
import eventController from "../controllers/event.controller.js";

const router = Router()
const controller = new eventController();

router.post('/event', controller.createEvent)
router.get('/event', controller.indexEvent )
router.get('/events/:id', controller.indexEvents )//listar
router.post('/event/title', controller.titleEvent )//listar por titulo
router.post('/lowerDate',controller.lowerDate) //Buscar eventos Menores a fecha
router.post('/longerDate',controller.longerDate) //Buscar eventos Mayores a fecha
router.post('/betweenDate',controller.betweenDates) //Buscar eventos entre fechas
router.post('/yearEvent',controller.yearEvent) //Buscar eventos solo por año
router.post('/monthEvent',controller.monthEvent) //Buscar eventos solo por mes
router.post('/dayDate',controller.dayEvent) //Buscar eventos solo por dia

export default router
