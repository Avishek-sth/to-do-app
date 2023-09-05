const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const commonSchema = require("../common/commonSchema");

const subTaskSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed"],
    required: true,
    default: "pending",
  },
  todo: { type: ObjectId, ref: "Todo" },
  ...commonSchema,
});

module.exports = model("Subtask", subTaskSchema);
