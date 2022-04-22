import sequelize from "../sequelize.js";
import { DataTypes } from "sequelize";
// ----------------------------------------
const user = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
});
export default user;
