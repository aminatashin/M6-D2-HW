import expresss from "express";
import models from "../../db/models/models.js";
import sequelize from "sequelize";

// -------------------------------------------------
const { product, reviews } = models;
const productRouter = expresss.Router();
// ---------------------------------------------------
productRouter.get("/", async (req, res, next) => {
  const getReviews = await product.findAll({ include: reviews });
  res.send(getproduct);
});
productRouter.get("/:id", async (req, res, next) => {
  const getidproduct = await product.findByPk(req.params.id);
  res.send(getidproduct);
});
productRouter.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const newproduct = await product.create(req.body);
    res.send(newproduct);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
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
    next(error);
  }
});
productRouter.delete("/:id", async (req, res, next) => {
  try {
    const destroy = await product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({ destroy });
  } catch (error) {
    next(error);
  }
});

// productRouter.get("/", async (req, res, next) => {
//   try {
//     let query = {};

//     if (req.query.search) {
//       query = {
//         [sequelize.Op.or]: [
//           {
//             name: {
//               [sequelize.Op.iLike]: `%${req.query.search}%`,
//             },
//           },
//           {
//             category: {
//               [sequelize.Op.iLike]: `%${req.query.search}%`,
//             },
//           },
//         ],
//       };
//     }

//     const getProducts = await product.findAll({
//       include: reviews,
//       where: query,
//       order: [[sequelize.fn("lower", sequelize.col("title")), "asc"]],
//     });
//     res.send(getProducts);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });
// productRouter.get("/:id", (req, res, next) => {
//   try {
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });
// productRouter.get("/:id", async (req, res, next) => {
//   try {
//     res.send();
//   } catch (error) {}
// });
// productRouter.post("/", async (req, res, next) => {
//   try {
//     const newproduct = await product.create({
//       name: req.body.name,
//       category: req.body.category,
//       description: req.body.description,
//       image: req.body.image,
//       price: req.body.price,
//       reviewsId: req.body.reviewsId,
//     });
//     res.send(newproduct);
//   } catch (error) {
//     next(error);
//   }
// });
// productRouter.put("/:id", async (req, res, next) => {
//   try {
//     const update = await product.update(req.body, {
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
// productRouter.delete("/:id", async (req, res, next) => {
//   try {
//     const destroy = await product.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send({ destroy });
//   } catch (error) {
//     next(error);
//   }
// });

export default productRouter;
