import { Router } from "express"
import GenderController from "../controller/gender.controller.js"

const route = Router()

route.post("/", GenderController.createGender)
route.patch("/", GenderController.updateGender)
route.get("/", GenderController.getAllGender)
route.get("/:id", GenderController.getGender)
route.delete("/:id", GenderController.deleteGender)

export default route
