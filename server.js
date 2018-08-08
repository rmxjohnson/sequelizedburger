// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// Modifications from prior burger app
// 1)  Customer model is associated with the burger model
// 2)  Burger mode - hasOne(models.Customer) relation
// 3)  Display the customer's name if one provided
// 4)  BurgerId is a foreign key on the customers table
// 5)  findAll query in burger_controller must now include the customer
// 6)  Burgers are displayed in alpha order
// 7)  Validation - burger_name cannot be null (customer_name can be null), burger's state is false by default

// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Set up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//var routes = require("./controllers/burgers_controller.js");
require("./controllers/burgers_controller.js")(app);



//app.use(routes);

// Start our server so that it can begin listening to client requests.
// app.listen(PORT, function () {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT);
// });

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        // Log (server-side) when our server has started
        console.log("App listening on PORT " + PORT);
    });
});
