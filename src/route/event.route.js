import { Router } from "express"
import EventController from "../controller/event.controller.js"

const route = Router()

route.post("/", EventController.createEvent)
route.patch("/", EventController.updateEvent)
route.get("/:user_id", EventController.getEvents)
route.get("/:id", EventController.getEvent)
route.delete("/:id", EventController.deleteEvent)

export default route
