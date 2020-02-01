var express = require("express");

var router = express.Router();

// Import the model (recipes.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.Recipe.findAll({}).then(function(data){
    res.render("index", {})
  });
});

router.get("/signup", function(req, res) {
  res.render("signup",{})
})

router.post("/api/recipes", function (req, res) {
  recipe.create([
    req.body.name
  ], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/recipes/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);


});

router.delete("/api/recipes/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  recipe.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router
