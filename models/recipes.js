// recipe_name VARCHAR(255) NOT NULL, 
// recipe_ingredients VARCHAR(255) NOT NULL,
// prep_time INTEGER(50),
// cook_time INTEGER(50),
// recipe_instructions VARCHAR(255) NOT NULL,

module.exports = function(sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
      recipe_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      recipe_ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      prep_time: {
        type: DataTypes.INTEGER
        
      },
      cook_time: {
        type: DataTypes.INTEGER
      },
      recipe_instructions: {
        type: DataTypes.STRING
        
      }
    });
    return Recipe;
  };
  