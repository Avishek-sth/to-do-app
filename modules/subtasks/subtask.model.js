const { Schema, model } = require("mongoose");

const subTaskSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed"],
    required: true,
    default: "pending",
  },
  created_at: { type: Date, default: Date.now() },
});

module.exports = model("Subtask", subTaskSchema);