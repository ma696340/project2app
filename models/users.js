// recipe_name VARCHAR(255) NOT NULL, 
// recipe_ingredients VARCHAR(255) NOT NULL,
// prep_time INTEGER(50),
// cook_time INTEGER(50),
// recipe_instructions VARCHAR(255) NOT NULL,

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING
      }
    });
    return User;

  };
  