const express = require("express");
const hotelRouter = require("./routers/hotelsRouter");

//creating an express app
const app = express();

//using middleware
app.use(express.json());

//adding routes for app
app.use("/api/v1/hotels", hotelRouter);

/*
//chaining routes
app
  .route("/api/v1/hotels")
  .get(hotelController.getAll)
  .post(hotelController.create);

app
  .route("/api/v1/hotels/:id")
  .get(hotelController.getById)
  .patch(hotelController.update)
  .delete(hotelController.delete);
*/

/*
 //General route handling
//GET: localhost:3000/api/v1/hotels
app.get("/api/v1/hotels", hotelController.getAll);

//POST: localhost:3000/api/v1/hotels
app.post("/api/v1/hotels", hotelController.create);

//GET: localhost:3000/api/v1/hotels/10
app.get("/api/v1/hotels/:id", hotelController.getById);

//PATCH: localhost:3000/api/v1/hotels/10
app.patch("/api/v1/hotels/:id", hotelController.update);

//DELETE: localhost:3000/api/v1/hotels/10
app.delete("/api/v1/hotels/:id", hotelController.delete);
*/

module.exports = app;
