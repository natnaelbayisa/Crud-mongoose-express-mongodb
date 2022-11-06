const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

//implementing cors
app.use(cors());
// app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/create_user", userRouter);
app.use("/api/v1/get_users", userRouter);
app.use("/api/v1/single_user", userRouter);
app.use("/api/v1/update_user", userRouter);
app.use("/api/v1/delete_user", userRouter);

module.exports = app;
