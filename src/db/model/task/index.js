const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskScheme = new Schema({
  text: String,
  sum: Number,
  date: Date,
});

module.exports = Task = mongoose.model("tasks", taskScheme);
