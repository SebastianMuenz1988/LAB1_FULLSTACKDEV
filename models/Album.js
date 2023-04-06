import mongoose from "mongoose";

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

export default mongoose.model("Album", AlbumSchema);

// module.exports = mongoose.model("Album", AlbumSchema);
