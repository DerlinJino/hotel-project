const express = require("express");
const hotelController = require("./../controller/hotelsController");

const hotelRouter = express.Router(); //it returns a middleware

hotelRouter.route("/").get(hotelController.getAll).post(hotelController.create);

hotelRouter
  .route("/:id")
  .get(hotelController.getById)
  .patch(hotelController.update)
  .delete(hotelController.delete);

module.exports = hotelRouter; // As we want to export a single value we use module.exports
