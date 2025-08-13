const mongoose = require("mongoose");

// Step 1:We are gonna make the schema here
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Step 2: Creating the model
module.exports = mongoose.model("User", userSchema); //that will create the collection
