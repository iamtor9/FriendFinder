
//require basic npm packages used in class: express and path.

const express = require("express");
const path = require("path");

//create express app function and port
const app = express();
// const routes = require("./app/routing/");
// app.use(routes);

const PORT = process.env.PORT || 3000;

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//john's tip
// app.use(express.static("app/public"))

//handlebars handle
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening (using arrow function):
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});

// // routes
// const routes = require("./routing/friends.js");

// app.use(routes);

// // Start our server so that it can begin listening to client requests.

