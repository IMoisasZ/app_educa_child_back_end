import { Router } from "express"
import UserController from "../controller/user.controller.js"

const route = Router()

route.post("/", UserController.createUser)
route.patch("/", UserController.updateUser)
route.get("/", UserController.getUsers)
route.get("/:id", UserController.getUser)
route.get("/?", UserController.getUserByEmail)

export default route
