import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import "express-async-errors";
import { currentUser } from "./routes/current-user";
import { signin } from "./routes/signin";
import { signout } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
const app = express();
app.use(json());
app.get("/api/users/health", (req, res) => {
  res.send("ok");
});

app.use(currentUser);
app.use(signin);
app.use(signout);
app.use(signupRouter);
app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);
const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("connection established with mongodb://auth-mongo-srv:27017");
  } catch (error) {
    console.log(error);
  }
  app.listen(3000, () => console.log("listening on http://localhost:3000!!!"));
};
start();
