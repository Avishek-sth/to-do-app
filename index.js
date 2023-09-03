const express = require("express");
const app = express();
const indexRouter = require("./routes");


app.use(express.json());

app.use("/", indexRouter);

app.use((err, req, res, next) => {
    err = err.toString() || "Something went wrong!"
    res.status(500).json({data: "", msg: err});
});

app.listen(3005, () => {
    console.log("App running on port 3005.")
});