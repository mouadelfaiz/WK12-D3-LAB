// const vegetables = [
//   {
//     name: "Eggplant",
//     color: "black",
//     readyToEat: false,
//   },
//   {
//     name: "Avocado",
//     color: "green",
//     readyToEat: true,
//   },
//   {
//     name: "Carrot",
//     color: "Orange",
//     readyToEat: true,
//   },
// ];

// module.exports = vegetables;

// STEP 1 IMPORT MONGOOSE
const mongoose = require("mongoose");

// STEP 2 CREATE YOUR SCHEMA
const vegetableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  readyToEat: {
    type: Boolean,
  },
});

// STEP 3 CREATE YOUR MODEL USING SCHEMA
const Vegetable = mongoose.model("Vegetable", vegetableSchema);

// STEP 4 EXPORT YOUR NEWLY CREATED MODEL
module.exports = Vegetable;
