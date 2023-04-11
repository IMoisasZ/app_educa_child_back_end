import Sequelize from "sequelize"
import DBCONNECTION from "../connection/db.connection.js"

const Child = DBCONNECTION.define(
  "child",
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
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nickName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    gender_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    birthday: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { tableName: "child" }
)

Child.sync()

export default Child
