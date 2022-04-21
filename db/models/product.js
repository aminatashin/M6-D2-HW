import sequelize from "../sequelize.js";
import { DataTypes } from "sequelize";

const product = sequelize.define("product", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },

  name: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
  },
});
export default product;
