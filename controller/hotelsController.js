const fs = require("fs");

let hotels = JSON.parse(fs.readFileSync("./data/hotels.json"));

exports.getAll = (req, res) => {
  res.status(200).json({
    status: "success",
    count: hotels.length,
    data: {
      hotels: hotels,
    },
  });
};

exports.create = (req, res) => {
  const newId = hotels[hotels.length - 1].id + 1;
  const newHotel = Object.assign({ id: newId }, req.body);
  hotels.push(newHotel);

  fs.writeFile("./data/hotels.json", JSON.stringify(hotels), () => {
    res.status(201).json({
      status: "success",
      data: {
        hotel: newHotel,
      },
    });
  });
};

exports.getById = (req, res) => {
  //Read ID Route Parameter value & convert it to number type...
  const id = req.params.id * 1;

  const hotel = hotels.find((hotel) => hotel.id === id);

  if (!hotel) {
    return res.status(404).json({
      status: "fail",
      message: "Hotel with ID " + id + " is not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      hotel,
    },
  });
};

exports.update = (req, res) => {
  const id = +req.params.id;
  const hotelToUpdate = hotels.find((hotel) => hotel.id === id);

  if (!hotelToUpdate) {
    return res.status(404).json({
      status: "fail",
      message:
        "Cannot update because the hotel with ID " + id + " cannot be found",
    });
  }

  const body = req.body;
  const index = hotels.indexOf(hotelToUpdate);

  const updateHotel = Object.assign(hotelToUpdate, body);

  hotels[index] = updateHotel;

  fs.writeFile("./data/hotels.json", JSON.stringify(hotels), () => {
    res.status(200).json({
      status: "success",
      data: {
        hotel: updateHotel,
      },
    });
  });

  Object.assign(hotelToUpdate, body);
};

exports.delete = (req, res) => {
  const id = +req.params.id;

  const hotelToDelete = hotels.find((hotel) => hotel.id === id);

  if (!hotelToDelete) {
    return res.status(404).json({
      status: "fail",
      message:
        "Cannot delete because the hotel with ID " + id + " cannot be found",
    });
  }

  const index = hotels.indexOf(hotelToDelete);
  hotels.splice(index, 1);

  fs.writeFile("./data/hotels.json", JSON.stringify(hotels), () => {
    res.status(204).json({
      status: "success",
      data: {
        hotel: hotelToDelete,
      },
    });
  });
};
