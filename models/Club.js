const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of your new club (5-15 characters)"],
    maxLength: [15, "don't exceed 15 characters of team name"],
    minLength: [5, "minimum character is 5"],
    unique: true,
  },
  Abbreviation: {
    type: String,
    required: [true, "Enter you Clubs Abbreviated name (2-3 characters)."],
    maxLength: [3, "Don't exceed 3 character for abbreviation"],
    minLength: [2, "minimum character is 2 character for abbreviation"],
    unique: [true],
  },
  Language: {
    type: String,
    required: true,
  },
  PublicClub: ["friend", "public", "private"],
});
module.exports = mongoose.model("Club", ClubSchema);
