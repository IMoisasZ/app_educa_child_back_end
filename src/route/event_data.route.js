import { Router } from "express"
import EventDataController from "../controller/event_data.controller.js"

const route = Router()

route.post("/", EventDataController.createEventData)
route.patch("/", EventDataController.updateEventData)
route.get("/all/:user_id", EventDataController.getEventsData)
route.get("/:id", EventDataController.getEventData)
route.get("/child/:child_id", EventDataController.getEventDataByChild)
route.delete("/:id", EventDataController.deleteEventData)

export default route
