const express = require("express");
const Users = require("./userSchema");
const router = express.Router();

// POST Method

router.post("/users", async (req, res) => {
  try {
    const newUser = new Users(req.body);
    await newUser.save();
    res.status(200).json({ msg: "User created", newUser });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// GET Method

router.get("/users", async (req, res) => {
  try {
    const newUser = await Users.find();
    res.status(200).json({ msg: "succes", newUser });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// GET by ID Method

router.get("/users/:id", async (req, res) => {
  try {
    const newUser = await Users.findById(req.params.id);
    if (!newUser) return res.status(404).json({ msg: "cUser not found" });
    res.status(200).json({ msg: "succes", newUser });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// UPDATE Method

router.put("/users/:id", async (req, res) => {
  try {
    const newUser = await Users.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    if (!newUser) return res.status(404).json({ msg: "User not found" });
    res
      .status(200)
      .json({ msg: "User updated", newUser: { ...newUser._doc, ...req.body } });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// DELETE Method

router.delete("/users/:id", async (req, res) => {
  try {
    const newUser = await Users.findByIdAndDelete(req.params.id);
    if (!newUser) return res.status(404).json({ msg: "User not found" });
    res.status(200).json({ msg: "User deleted", newUser });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
