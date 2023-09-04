const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({});


const model = mongoose.model("Todo", todoSchema);


module.exports = model;