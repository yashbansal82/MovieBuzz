import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
dotenv.config({
  path: ".env",
});

databaseConnection();

const app = express();
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

//api
app.get("/", (req, res) => {
  console.log("home route");
  res.json("get request");
});
app.use("/api/v1/user", userRoute);
//http://localhost:8080/api/v1/user/register

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
});
