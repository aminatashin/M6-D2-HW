import sequelize from "../sequelize.js";
import { DataTypes } from "sequelize";
const reviews = sequelize.define("reviews", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
});
export default reviews;
