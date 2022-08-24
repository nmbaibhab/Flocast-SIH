// const { response } = require("express");
const express = require("express");
const router = express.Router();
require("../config/db");
const Citizen = require("../models/CitizenDetails");
const ErrorResponse = require("../utils/errorResponse");

exports.create = async (req, res, next) => {
    const { fullname, phone, dist } = req.body;

    // Check if email and password is provided
    if (!fullname || !phone || !dist) {
        return next(new ErrorResponse("Please provide all details", 400));
    }

    try {
        // Check that user exists by phne
        const citizen = await Citizen.findOne({ phone });
        if (citizen) return next(new ErrorResponse("User with this phone already exists", 401));
        else {
            const citizenData = new Citizen({
                fullname,
                phone,
                dist,
            });
            await citizenData.save();
            return res.status(201).json({ message: "User Created" });
            // sendToken(user, 200, res);
        }

    } catch (err) {
        next(err);
    }
};
