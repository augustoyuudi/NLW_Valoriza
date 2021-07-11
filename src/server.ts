import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { errorHandler } from "./middlewares/ErrorHandler/ErrorHandler";
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(1000, () => console.log("Server is running NLW"));