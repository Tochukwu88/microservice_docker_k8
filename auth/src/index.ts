import { app } from "./app";
import mongoose from "mongoose";

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
