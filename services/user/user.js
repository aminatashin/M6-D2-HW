import express from "express";
import models from "../../db/models/models.js";

// ------------------------------------------------
const { user, product, category, reviews } = models;
// --------------------------------------------------
const userRouter = express.Router();
// --------------------------------------------------
userRouter.get("/", async (req, res, next) => {
  try {
    const getUser = await user.findAll(req.body);
    res.send(getUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// --------------------------------------------------
userRouter.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// --------------------------------------------------
userRouter.post("/", async (req, res, next) => {
  try {
    const newUser = await user.create(req.body);
    res.send(newUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// --------------------------------------------------
userRouter.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// --------------------------------------------------
userRouter.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// --------------------------------------------------
export default userRouter;
