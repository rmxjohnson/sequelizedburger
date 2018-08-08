# sequelizedburger
# burger

Node Express Handlebars

Rhonda Johnson

## Overview

Eat-Da_Burger is restaurant app that lets users input the names of burgers they would like to eat.  Users then can select when a burger is devoured. They can also include the name of the person who devoured the burger.

The burger logger uses MySQL, Node, Express, Handlebars, and a sequalized ORM.  The app follows the MVC design pattern.  Node and MySQL are to query and route data in the app.  Handlebars is used to generate the HTML. 

# Link to deployed project
https://burger199.herokuapp.com/

# Links to GitHub
https://github.com/rmxjohnson/burger.git

https://rmxjohnson.github.io/burger/


# Built with:
 * Node.js
 * MySQL
 * Handlebars
 * body-parser NPM Package
 * express NPM Package
 * mysql NPM Package
 * sequelize ORM
 * handlebars NPM Package
 * express-handlebars NPM Package


## Home Page

![home.png](public/assets/img/burger-app.png)


# Additional Features
 * A Customer model is associated with the main Burger model
 * A burger can be deleted from the "Devoured" section
 * Burgers are displayed in alphabetical order in each section
 * Validation - a burger's name cannot be null, a burger's devoured state is false by default
