import express from "express";
import cors from "cors";
import { testDB, syncDB } from "../db/sequelize.js";
import productRouter from "../services/Product/product.js";
import reviewsRouter from "../services/Reviews/reviews.js";

// -----------------------------------------------

const server = express();
const { PORT } = process.env;
server.use(express.json());
server.use(cors());

// -------------------------------------------------
server.use("/Reviews", reviewsRouter);
server.use("/Product", productRouter);

// --------------------------------------------------

server.listen(PORT, async () => {
  console.log(`server is running ${PORT}`);
  await testDB();
  await syncDB();
});