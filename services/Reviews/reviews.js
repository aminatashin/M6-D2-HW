import expresss from "express";
import models from "../../db/models/models.js";
import sequelize from "sequelize";
const { product, reviews } = models;
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

    const getProducts = await reviews.findAll({
      include: product,
      where: query,
      //  order: [[sequelize.fn("lower", sequelize.col("title")), "asc"]],
    });
    res.send(getProducts);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
reviewsRouter.get("/:id", (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});
reviewsRouter.get("/:id", async (req, res, next) => {
  try {
    res.send();
  } catch (error) {}
});
reviewsRouter.post("/", async (req, res, next) => {
  try {
    const newproduct = await reviews.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      productId: req.body.reviewsId,
    });
    res.send(newproduct);
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

// reviewsRouter.get("/", async (req, res, next) => {
//   const getReviews = await reviews.findAll({ include: product });
//   res.send(getReviews);
// });
// reviewsRouter.get("/:id", async (req, res, next) => {
//   const getidReviews = await reviews.findByPk(req.params.id);
//   res.send(getidReviews);
// });
// reviewsRouter.post("/", async (req, res, next) => {
//   try {
//     const newReviews = await reviews.create(req.body);
//     res.send(newReviews);
//   } catch (error) {
//     next(error);
//   }
// });
// reviewsRouter.put("/:id", async (req, res, next) => {
//   try {
//     const update = await reviews.update(req.body, {
//       returning: true,
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send(update);
//   } catch (error) {
//     next(error);
//   }
// });
// reviewsRouter.delete("/:id", async (req, res, next) => {
//   try {
//     const destroy = await reviews.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send({ destroy });
//   } catch (error) {
//     next(error);
//   }
// });
export default reviewsRouter;
