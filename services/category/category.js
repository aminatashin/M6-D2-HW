import express from "express";

import models from "../../db/models/models.js";

// ------------------------------------------------
const { category, productcategory } = models;
// --------------------------------------------------
const categoryRouter = express.Router();
// --------------------------------------------------
categoryRouter.get("/", async (req, res, next) => {
  try {
    const getcategory = await category.findAll(req.body);
    res.send(getcategory);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// --------------------------------------------------
categoryRouter.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// -------------------------------------------------
categoryRouter.post("/:productId/:categoryId", async (req, res, next) => {
  const productCategory = await productcategory.create({
    productId: req.params.productId,
    categoryId: req.params.categoryId,
  });
  res.send(productCategory);
});
// --------------------------------------------------
categoryRouter.post("/", async (req, res, next) => {
  try {
    const newcategory = await category.create(req.body);
    res.send(newcategory);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// --------------------------------------------------
categoryRouter.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// --------------------------------------------------
categoryRouter.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// --------------------------------------------------
export default categoryRouter;
