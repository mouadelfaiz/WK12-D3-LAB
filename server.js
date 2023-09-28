const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config();


const Fruit = require("./models/fruits.js");
const Vegetable = require("./models/vegetable.js");
const jsxEngine = require("jsx-view-engine");

const methodOverride = require("method-override");



app.set("view engine", "jsx");

app.engine("jsx", jsxEngine());
  
dotEnv.config()

mongoose.connect(process.env.mongo_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});


app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});


app.use(methodOverride("_method"));

// Routes

// SEED Route
app.get("/fruits/seed", async (req, res) => {
  try {
    await Fruit.create([
      {
        name: "grapefruit",
        color: "pink",
        readyToEat: true,
      },
      {
        name: "grape",
        color: "purple",
        readyToEat: false,
      },
      {
        name: "avocado",
        color: "green",
        readyToEat: true,
      },
    ]);
    res.redirect("/fruits");
  } catch (error) {
    console.error(error);
  }
});

// Index Fruit Route
app.get("/fruits/", async (req, res) => {

  try {
    const fruits = await Fruit.find();
    res.render("fruits/index", { fruits: fruits });
  } catch (error) {
    console.error(error);
  }
});


// NEW FRUIT ROUTE
app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

// Fruit DELETE Route

app.delete("/fruits/:id", async (req, res) => {
  try {
    await Fruit.findByIdAndRemove(req.params.id);
    res.redirect("/fruits");
  } catch (error) {
    console.error(error);
  }
});


app.put("/fruits/:id", async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
     
      req.body.readyToEat = true;
    } else {
 
      req.body.readyToEat = false;
    }
   
    await Fruit.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/fruits");
  } catch (error) {
    console.log(error);
  }
});


app.post("/fruits", async (req, res) => {
  
  try {
    if (req.body.readyToEat === "on") {
     
      req.body.readyToEat = true;
    } else {
      
      req.body.readyToEat = false; 
    }

    await Fruit.create(req.body);
    res.redirect("/fruits");
  } catch (error) {
    console.log(error);
  }
});


app.get("/fruits/:id/edit", async (req, res) => {
  try {
    const foundFruit = await Fruit.findById(req.params.id);
    res.render("fruits/Edit", { fruit: foundFruit });
  } catch (error) {
    console.log(error);
  }
});


app.get("/fruits/:indexOfFruitsArray", async (req, res) => {
  try {
    const fruit = await Fruit.findById(req.params.indexOfFruitsArray);
    res.render("fruits/show", { fruits: fruit });
  } catch (error) {
    console.log(error);
  }
});



app.get("/vegetables/", async (req, res) => {
  try {
    const vegetables = await Vegetable.find();
    res.render("vegetables/index", { vegies: vegetables });
  } catch (error) {
    console.log(error);
  }
});


app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});


app.delete("/vegetables/:id", async (req, res) => {
  try {
    await Vegetable.findByIdAndRemove(req.params.id);
    res.redirect("/vegetables");
  } catch (error) {
    console.log(error);
  }
});


app.put("/vegetables/:id", async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }

    await Vegetable.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/vegetables");
  } catch (error) {
    console.log(error);
  }
});

// VEGE EDIT ROUTE
app.get("/vegetables/:id/edit", async (req, res) => {
  try {
    const vegeFruit = await Vegetable.findById(req.params.id);
    res.render("vegetables/Edit", { vegie: vegeFruit });
  } catch (error) {
    console.log(error);
  }
});

app.post("/vegetables", async (req, res) => {
  try {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    await Vegetable.create(req.body);
    res.redirect("/vegetables");
  } catch (error) {
    console.log(error);
  }
});

app.get("/vegetables/:indexOfFruitsArray", async (req, res) => {
  try {
    const vegetable = await Vegetable.findById(req.params.indexOfFruitsArray);
    res.render("vegetables/show", { vege: vegetable });
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log("listening");
});
