const mongoose = require("mongoose");

const charitySchema = new mongoose.Schema(
  {
    name: { type: String },
    mission: { type: String },
    charityNavigatorURL: { type: String },
    websiteURL: { type: String },
  },
  {
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true },
  }
);

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;
