import expresss from "express";
import models from "../../db/models/models.js";
import sequelize from "sequelize";
const { product, reviews, user } = models;
const reviewsRouter = expresss.Router();

reviewsRouter.get("/", async (req, res, next) => {
  try {
    let query = {};

    if (req.query.search) {
      query = {
        [sequelize.Op.or]: [
          {
            name: {
              [sequelize.Op.iLike]: `%${req.query.search}%`,
            },
          },
          {
            category: {
              [sequelize.Op.iLike]: `%${req.query.search}%`,
            },
          },
        ],
      };
    }

    const getReviews = await reviews.findAll({
      include: product,
      user,
      where: query,
      //  order: [[sequelize.fn("lower", sequelize.col("title")), "asc"]],
    });
    res.send(getReviews);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
reviewsRouter.get("/:id", async (req, res, next) => {
  try {
    const getidReviews = await reviews.findByPk(req.params.id, {
      include: product,
    });
    res.send(getidReviews);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

reviewsRouter.post("/", async (req, res, next) => {
  try {
    const newReviews = await reviews.create({
      text: req.body.text,
      productId: req.body.productId,
      userId: req.body.userId,
    });
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
