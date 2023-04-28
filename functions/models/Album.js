const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema(
  {
    title: { type: String },
    artist: { type: String },
    year: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Album", AlbumSchema);
