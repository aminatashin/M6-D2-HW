import expresss from "express";
import models from "../../db/models/models.js";
const { product, reviews } = models;
const reviewsRouter = expresss.Router();

reviewsRouter.get("/", async (req, res, next) => {
  const getReviews = await reviews.findAll({ include: product });
  res.send(getReviews);
});
reviewsRouter.get("/:id", async (req, res, next) => {
  const getidReviews = await reviews.findByPk(req.params.id);
  res.send(getidReviews);
});
reviewsRouter.post("/", async (req, res, next) => {
  try {
    const newReviews = await reviews.create(req.body);
    res.send(newReviews);
  } catch (error) {
    next(error);
  }
});
reviewsRouter.put("/:id", async (req, res, next) => {
  try {
    const update = await reviews.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    res.send(update);
  } catch (error) {
    next(error);
  }
});
reviewsRouter.delete("/:id", async (req, res, next) => {
  try {
    const destroy = await reviews.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({ destroy });
  } catch (error) {
    next(error);
  }
});
export default reviewsRouter;