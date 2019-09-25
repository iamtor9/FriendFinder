
//require basic npm packages used in class: express and path.

const express = require("express");
const path = require("path");

//create express app function and port
const app = express();
const routes = require("./routing/friends.js");
app.use(routes);

const PORT = process.env.PORT || 8889;

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars handle
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Starts the server to begin listening (using arrow function):
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});

// // routes
// const routes = require("./routing/friends.js");

// app.use(routes);

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });
