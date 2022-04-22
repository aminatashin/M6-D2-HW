import reviews from "./reviews.js";
import product from "./product.js";
import category from "./Category.js";
import user from "./User.js";
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

// ----------------------------------------
export default { product, reviews, user };
