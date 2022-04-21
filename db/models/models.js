import reviews from "./reviews.js";
import product from "./product.js";
product.hasMany(reviews);
reviews.belongsTo(product);
export default { product, reviews };
