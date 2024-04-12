import express, { Express, NextFunction, Request, Response } from "express";
import * as cors from "cors";
import env from "./env";
import mongoose from "mongoose";
import ROUTES from "./routes/ROUTES";
import apiRouter from "./routes/apiRouter";

const app: Express = express();
app.use(cors.default());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use(ROUTES.api.root, apiRouter);

mongoose
  .connect(`mongodb://127.0.0.1:27017/dataneuron`)
  .then(() => console.log("Database connected successfully!"))
  .catch((e) => console.log(e));

app.listen(port, () => {
  return console.log(`Server started at port ${port}`);
});
