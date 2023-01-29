import { Router } from "express";
import { createEvent,indexEvent,indexEvents,updateEvent,deleteEvent } from "../controllers/event.controller.js";
const router = Router()

router.post('/event', createEvent)
router.get('/event', indexEvent )
router.get('/events/:id', indexEvents )
router.put('/event/:id', updateEvent)
router.delete('/event/:id', deleteEvent)

export default router
