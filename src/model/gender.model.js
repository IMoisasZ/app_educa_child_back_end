import Sequelize from "sequelize"
import DBCONNECTION from "../connection/db.connection.js"

const Gender = DBCONNECTION.define(
  "gender",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValues: true,
    },
  },
  { tableName: "gender" }
)

Gender.sync()

export default Gender
