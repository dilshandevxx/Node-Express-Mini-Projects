const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { name } = require("ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "views");
const users = [];
app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add users" });
});
app.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "users", users: users });
});
app.post("/add-users", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

app.listen(5000, () => {
  console.log("server running at http://localhost:3000");
});
