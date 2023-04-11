import Sequelize from "sequelize"
import DBCONNECTON from "../connection/db.connection.js"

const Event = DBCONNECTON.define(
  "event",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    typeEvent_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    event: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  { tableName: "event" }
)

Event.sync()

export default Event
