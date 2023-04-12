import Sequelize from "sequelize"
import DBCONNECTON from "../connection/db.connection.js"
import ChildModel from "./child.model.js"
import EventModel from "./event.model.js"

const Release = DBCONNECTON.define(
  "release",
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
    type: {
      type: Sequelize.STRING,
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
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    point: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    idEventData: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { tableName: "release" }
)

Release.sync()

Release.belongsTo(ChildModel, { foreignKey: "child_id" })
Release.belongsTo(EventModel, { foreignKey: "event_id" })

export default Release
