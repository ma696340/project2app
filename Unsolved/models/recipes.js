var orm = require("../config/orm")

var recipes = {
    selectAll: function(cb){
        orm.selectAll("recipes",function(data){
            cb(data)
        })
    }, 
    create: function(userData, cb){
        orm.create("recipes",["recipe_name"], userData, function(data){
            cb(data)
        })

    }, 
    update: function(id, cb){
        orm.update("recipes",["recipe_name", "id"], id, function(data){
            cb(data)
        })
    },

    delete: function(condition, cb) {
      orm.delete("recipe", condition, function(res) {
        cb(res);
      });
    
  
}

module.exports = recipes
