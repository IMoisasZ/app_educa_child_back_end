import { Router } from "express"
import UserController from "../controller/user.controller.js"

const route = Router()

route.post("/", UserController.createUser)
route.patch("/", UserController.updateUser)
route.put("/", UserController.updatePassword)
route.get("/", UserController.getUsers)
route.get("/:id", UserController.getUser)
route.get("/email/email_user?", UserController.getUserByEmail)

export default route
