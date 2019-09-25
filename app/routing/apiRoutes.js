// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
const friends = require("../data/friends");

module.exports = function (app) {

  //app get requests and callbacks (req & res)
  app.get("app/data/friends.js", function (req, res) {
    res.json(friends);
  });
  app.get("/app/waitlist", function (req, res) {
    res.json(waitListData);
  });

  //create callback to display friends
  app.post("/api/friends.js", function (req, res) {
    if (friends.length < 5) {
      friends.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });
}