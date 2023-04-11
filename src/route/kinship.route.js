import { Router } from "express"
import KinshipController from "../controller/kinship.controller.js"

const route = Router()

route.post("/", KinshipController.createKinship)
route.patch("/", KinshipController.updateKinship)
route.get("/", KinshipController.getAllKinship)
route.get("/:id", KinshipController.getKinship)
route.delete("/:id", KinshipController.deleteKinship)

export default route
