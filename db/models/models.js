import reviews from "./reviews.js";
import product from "./product.js";
import category from "./category.js";
import user from "./User.js";
import productcategory from "./productcategory.js";
// -------------------------------------
user.hasMany(product);
product.belongsTo(user);
// -------------------------
product.hasMany(reviews);
reviews.belongsTo(product);
// ----------------------
user.hasMany(reviews);
reviews.belongsTo(user);
// -----------------------
product.belongsToMany(category, { through: productcategory });
category.belongsToMany(product, { through: productcategory });
// ----------------------------------------
export default { product, reviews, user, category, productcategory };
