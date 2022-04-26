import express from "express";
import cors from "cors";
import { testDB, syncDB } from "../db/sequelize.js";
import productRouter from "../services/Product/product.js";
import reviewsRouter from "../services/Reviews/reviews.js";
import userRouter from "../services/user/user.js";
import categoryRouter from "../services/category/category.js";

// -----------------------------------------------

const server = express();
const { PORT } = process.env;
server.use(express.json());
server.use(cors());

// -------------------------------------------------
server.use("/Reviews", reviewsRouter);
server.use("/Product", productRouter);
server.use("/user", userRouter);
server.use("/category", categoryRouter);

// --------------------------------------------------

server.listen(PORT, async () => {
  console.log(`server is running ${PORT}`);
  await testDB();
  await syncDB();
});
