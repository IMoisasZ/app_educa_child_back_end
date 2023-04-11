import { Router } from "express"
import ChildController from "../controller/child.controller.js"

const route = Router()

route.post("/", ChildController.createChild)
route.patch("/", ChildController.updateChild)
route.get("/:user_id", ChildController.getChildren)
route.get("/:id", ChildController.getChild)
route.delete("/:id", ChildController.deleteChild)

export default route
