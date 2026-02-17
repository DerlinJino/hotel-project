const mongoose = require("mongoose");
const app = require("./app");

const connString =
  "mongodb+srv://admin:M8ZJxL8Q1Fz4fHCD@proacdemy-cluster.sluqu3x.mongodb.net/bookmystay?appName=proacdemy-cluster";
mongoose
  .connect(connString)
  .then((conn) => {
    console.log("Connection to DB is Successful");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
  });

// const db = mongoose.connection;
// db.on("disconnected", () => {
//   console.log("MongoDB Connection is disconnected");
// });

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Hotel name is required"],
    unique: [true, "Hotel name is unique"],
    minlength: [5, "Hotel name must have minimum 5 characters"],
    maxlength: [100, "Hotel name must have maximum 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Hotel price is required"],
    min: [100, "Price must be minimum 100"],
    max: [10000, "Price can be maximum of 10000"],
  },
  city: {
    type: String,
    required: [true, "Hotel city is required"],
  },
});
const Hotel = mongoose.model("Hotel", hotelSchema);

const hotel1 = new Hotel({ name: "Test 2", price: 1000, city: "Jaipur" });
hotel1.save();

const port = 3000;
app.listen(port, "localhost", () => {
  console.log("Express server is up and running!");
});
