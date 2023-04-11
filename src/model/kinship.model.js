import Sequelize from "sequelize"
import DBCONNECTION from "../connection/db.connection.js"

const Kinship = DBCONNECTION.define(
  "kinship",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kinship: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { tableName: "kinship" }
)

Kinship.sync()

export default Kinship
