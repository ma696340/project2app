var firebaseConfig = {
  apiKey: "AIzaSyAK8WN8n8lZUlBY5Qv_8QzjNxEYE_TJYb0",
  authDomain: "recipe-app-f7f1f.firebaseapp.com",
  databaseURL: "https://recipe-app-f7f1f.firebaseio.com",
  projectId: "recipe-app-f7f1f",
  storageBucket: "recipe-app-f7f1f.appspot.com",
  messagingSenderId: "688387737751",
  appId: "1:688387737751:web:113f57152993257a2281d2"
};
​
firebaseConfig.initializeApp(firebaseConfig);
​
var database = firebase.database();
​
// Button for signing up
$("#signupBtn").on("click", function(event) {
event.preventDefault();
});
​
// Grabs user input
var name = $("#name").val().trim();
var email = $("#email").val().trim();
var password = $("#password").val().trim();
​
//Creates local "temporary" object
var newUser = {
name: name,
email: email,
password: password
};
​
​
// Uploaded user data to the database
database.ref().push(newUser);
​
// Logs everything into console
console.log(newUser.name);
console.log(newUser.email);
console.log(newPassword.password);
​
alert("User successfully created");
​
// create Firebase event for adding new user
database.ref().on("child_added", function(childSnapshot) {
console.log(childSnapshot.val());
​
// Store everything into a variable
var name = childSnapshot.val().name;
var email = childSnapshot.val().email;
var password = childSnapshot.val().password;
​
​
// User Info
console.log(name);
console.log(email);
​console.log(password);
​
​
});





















// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newRecipe = {
    recipeName: $("#recipeName").val().trim(),
    recipeIngredients: $("#recipeIngredients").val().trim(),
    recipePrepTime: $("#prepTime").val().trim(),
    recipeCookTime: $("#cookTime").val().trim(),
    recipeInstructions: $("#recipeInstructions").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBook)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#recipeName").val("");
  $("#recipeIngredients").val("");
  $("#prepTime").val("");
  $("#cookTime").val("");
  $("#recipeInstructions").val("");

});
