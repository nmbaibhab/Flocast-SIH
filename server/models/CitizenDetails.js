const mongoose = require("mongoose");

const CitizenDetailsSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Please provide username"],
    },
    phone: {
        type: Number,
        required: [true, "Please provide a phone number"],
        minlength: 10,
        unique: true,
    },
    dist: {
        type: String,
        required: [true, "Please provide a district name"],

    }

});

const CitizenDetails = mongoose.model("CITIZEN", CitizenDetailsSchema);

module.exports = CitizenDetails;