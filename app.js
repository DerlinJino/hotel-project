const express = require("express");
const hotelController = require("./controller/hotelsController");
const app = express();
app.use(express.json());

//GET: localhost:3000/api/v1/hotels
app.get("/api/v1/hotels", hotelController.getAllHotels);

//POST: localhost:3000/api/v1/hotels
app.post("/api/v1/hotels", hotelController.createHotel);

//GET: localhost:3000/api/v1/hotels/10
app.get("/api/v1/hotels/:id", hotelController.getHotelById);

//PATCH: localhost:3000/api/v1/hotels/10
app.patch("/api/v1/hotels/:id", hotelController.updateHotel);

//DELETE: localhost:3000/api/v1/hotels/10
app.delete("/api/v1/hotels/:id", hotelController.deleteHotel);

module.exports = app;
