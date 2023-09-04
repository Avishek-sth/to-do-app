const { Schema, model } = require("mongoose");
const commonSchema = require("../common/commonSchema");

const subTaskSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed"],
    required: true,
    default: "pending",
  },
  ...commonSchema,
});

module.exports = model("Subtask", subTaskSchema);
