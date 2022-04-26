import sequelize from "../sequelize.js";
const productcategory = sequelize.define(
  "productcategory",
  {},
  { timestamps: false }
);
export default productcategory;
