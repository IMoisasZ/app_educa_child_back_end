import Sequelize from "sequelize"
import DBCONNECTION from "../connection/db.connection.js"
import ChildModel from "./child.model.js"
import EventModel from "./event.model.js"

const EventData = DBCONNECTION.define(
  "event_data",
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
    child_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    event_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    meriter: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    demeriter: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    point: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { tableName: "event_data" }
)

EventData.sync({ alter: true })

EventData.belongsTo(ChildModel, { foreignKey: "child_id" })
EventData.belongsTo(EventModel, { foreignKey: "event_id" })

export default EventData
