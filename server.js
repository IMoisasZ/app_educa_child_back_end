import app from "./app.js"
import DBCONNECTION from "./src/connection/db.connection.js"

// port to use server
const PORT = 3001

// instance yhe server
try {
  await DBCONNECTION.authenticate()
  console.log("Connection has been established successfully.")
  app.listen(PORT, () => console.log(`SERVER RUNNING AT PORT ${PORT}`))
} catch (error) {
  console.error("Unable to connect to the database:", error)
}
