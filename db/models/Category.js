import sequelize from "../sequelize.js";
import { DataTypes } from "sequelize";
// -----------------------------------------
const category = sequelize.define("category", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default category;
