const express = require("express");

const usersRouter = express.Router();

usersRouter.param("id", (req, res, next, value, name) => {
  console.log("Id Route Parameter values:" + value);
  next();
});

usersRouter.get("/", (req, res) => {
  res.send("sending all users");
});

usersRouter.get("/:id", (req, res) => {
  res.send("sending user with ID:" + req.params.id);
});

module.exports = usersRouter;
