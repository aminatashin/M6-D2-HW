import reviews from "./reviews.js";
import product from "./product.js";
reviews.hasMany(product);
product.belongsTo(reviews);
export default { product, reviews };
