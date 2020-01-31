var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes", function(req, res) {
    db.Example.findAll({}).then(function(recipes_db) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/recipes", function(req, res) {
    db.Example.create(req.body).then(function(recipes_db) {
      res.json(recipes_db);
    });
  });

  // Delete an example by id
  app.delete("/api/recipes/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(recipes_db) {
      res.json(recipes_db);
    });
  });
};
