import expresss from "express";
import models from "../../db/models/models.js";

// -------------------------------------------------
const { product, reviews, user } = models;
const productRouter = expresss.Router();
// ---------------------------------------------------
productRouter.get("/", async (req, res, next) => {
  try {
    const getProduct = await product.findAll({
      include: [user, { model: reviews, include: [user] }],
    });
    res.send(getProduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// -------------------------------------------------------
productRouter.get("/:id", async (req, res, next) => {
  try {
    const getidproduct = await product.findByPk(req.params.id, {
      include: [user, { modell: reviews, include: [user] }],
    });
    res.send(getidproduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// -------------------------------------------------------
productRouter.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const newproduct = await product.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      userId: req.body.userId,
    });
    res.send(newproduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// -------------------------------------------------------
productRouter.put("/:id", async (req, res, next) => {
  try {
    const update = await product.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    res.send(update);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// -------------------------------------------------------
productRouter.delete("/:id", async (req, res, next) => {
  try {
    const destroy = await product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({ destroy });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default productRouter;
