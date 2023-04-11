import express from "express"
import cors from "cors"
import winston from "winston"
import UserRoute from "./src/route/user.route.js"
import ChildRoute from "./src/route/child.route.js"
import EventRoute from "./src/route/event.route.js"
import ReleaseRoute from "./src/route/release.route.js"
import KinshipRoute from "./src/route/kinship.route.js"
import GenderRoute from "./src/route/gender.route.js"
import EventDataRoute from "./src/route/event_data.route.js"

// create variable app
const app = express()

// cors
app.use(cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  )
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

// json
app.use(express.json())

// routes
app.use("/user", UserRoute)
app.use("/child", ChildRoute)
app.use("/event", EventRoute)
app.use("/release", ReleaseRoute)
app.use("/kinship", KinshipRoute)
app.use("/gender", GenderRoute)
app.use("/event_data", EventDataRoute)

// winston(log)
const { combine, timestamp, label, printf } = winston.format
const myformat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`
})
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app-mizp-educa" }),
  ],
  format: combine(label({ label: "app-mizp-educa" }), timestamp(), myformat),
})

// erro padrão
app.use((err, req, res, next) => {
  global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
  res.status(400).send({ erros: err.message })
})

export default app
