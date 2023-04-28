const express = require("express");
const Album = require("../models/Album.js");

const router = express.Router();

// GET ALL
router.get("/albums", async (req, res) => {
  try {
    const albums = await Album.find();
    console.log("albums: ", albums);
    res.status(200).json(albums);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// GET SINGLE ALBUM
router.get("/albums/:title", async (req, res) => {
  try {
    const album = await Album.findOne({ title: req.params.title });
    console.log("album: ", album);
    res.status(200).json(album);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// CREATE ALBUM
router.post("/albums", async (req, res) => {
  console.log("req.body: ", req.body);
  const newAlbum = new Album(req.body);
  console.log("newAlbum: ", newAlbum);
  try {
    const check = await Album.findOne({ title: req.body.title });
    if (check === null) {
      const savedAlbum = await newAlbum.save();
      res.status(201).json(savedAlbum);
      console.log("Saved Album: ", savedAlbum);
    } else {
      res.status(400).json("Album already exists!");
      console.log("Album already exists!");
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// UPDATE ALBUM
router.put("/albums/:id", async (req, res) => {
  try {
    // new: true --> adds the updated album to the callback
    const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedAlbum);
    console.log("Album successfully updated: ", updatedAlbum);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// DELETE ALBUM
router.delete("/albums/:id", async (req, res) => {
  try {
    // new: true --> adds the updated album to the callback
    const deletedAlbum = await Album.findByIdAndDelete(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(deletedAlbum);
    console.log("Album successfully deleted: ", deletedAlbum);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
