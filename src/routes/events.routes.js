import { Router } from "express";
import eventController from "../controllers/event.controller.js";

const router = Router()
const controller = new eventController();

router.post('/event', controller.createEvent)
router.get('/event', controller.indexEvent )
router.get('/events/:id', controller.indexEvents )
router.put('/event/:id', controller.updateEvent)
router.delete('/event/:id', controller.deleteEvent)

export default router
