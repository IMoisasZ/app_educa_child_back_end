import Sequelize from "sequelize"
import DBCONNECTON from "../connection/db.connection.js"

const User = DBCONNECTON.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id_firebase: {
      type: Sequelize.STRING,
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
    kinship_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { tableName: "user" }
)

User.sync()

export default User
