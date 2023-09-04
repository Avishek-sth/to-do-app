const { Schema, model} = require("mongoose");


const todoSchema = new Schema({});


module.exports = mongoose.model("Todo", todoSchema);