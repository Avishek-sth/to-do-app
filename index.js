require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const indexRouter = require("./routes");
const PORT=+process.env.PORT || 3000;

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Database connected.");
});

app.use(express.json());

app.use("/", indexRouter);

app.use((err, req, res, next) => {
    err = err.toString() || "Something went wrong!"
    res.status(500).json({data: "", msg: err});
});

app.listen(3005, () => {
    console.log("App running on port 3005.")
});