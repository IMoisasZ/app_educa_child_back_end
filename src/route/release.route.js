import { Router } from "express"
import ReleaseController from "../controller/release.controller.js"

const route = Router()

route.post("/", ReleaseController.createRelease)
route.patch("/", ReleaseController.updateRelease)
route.get("/user/:user_id", ReleaseController.getReleases)
route.get("/:id", ReleaseController.getRelease)
route.delete("/", ReleaseController.deleteRelease)

export default route
