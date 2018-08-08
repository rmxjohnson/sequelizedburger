// **************************************************************************************************
// burgers_controller.js - this file offers a set of routes for displaying and saving data to the db
// **************************************************************************************************

// Dependencies
// =============================================================

// Requiring the models
var db = require("../models");

module.exports = function (app) {


    // API route to display all burgers
    app.get("/", function (req, res) {
        db.Burger.findAll({
            include: [db.Customer],

            // order alphabetically by burger name
            order: [
                ['burger_name', 'ASC']
            ]
        }).then(function (dbBurger) {
            // hbsObject --> handlebars Object
            var hbsObject = {
                item: dbBurger
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        })
    });


    // API route to create a burger
    app.post("/api/burgers", function (req, res) {

        db.Burger.create({
            burger_name: req.body.burger_name,

        }).then(function (result) {
            // Send back the ID of the new burger
            res.json({ id: result.insertId });
        });
    });

    // API route to update a burger devoured state as true & save the name of who ate the burger if given a name
    app.put("/api/burgers/update", function (req, res) {

        // create a new customer if given a name then update the state to "devoured"
        if (req.body.customer) {
            db.Customer.create(
                {
                    customer_name: req.body.customer,
                    BurgerId: req.body.burger_id
                }

            ).then(function (dbCustomer) {
                db.Burger.update({
                    devoured: true
                },
                    {
                        where: {
                            id: req.body.burger_id
                        }
                    }).then(function (result) {
                        if (result.changedRows == 0) {
                            // If no rows were changed, then the ID must not exist, so 404
                            return res.status(404).end();
                        } else {
                            res.status(200).end();
                        }
                    });
            });
        }

        // if no customer name given, just update the burger state to "devoured"
        else {
            db.Burger.update({
                devoured: true
            },
                {
                    where: {
                        id: req.body.burger_id
                    }
                }).then(function (result) {
                    if (result.changedRows == 0) {
                        // If no rows were changed, then the ID must not exist, so 404
                        return res.status(404).end();
                    } else {
                        res.status(200).end();
                    }
                });
        }

    });

    // API route to delete a burger
    app.delete("/api/burgers/:id", function (req, res) {

        db.Burger.destroy(
            {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                if (result.changedRows == 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            });


    });
};


