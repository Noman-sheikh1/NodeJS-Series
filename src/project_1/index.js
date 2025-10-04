const express = require("express");
const mongoose=require("mongoose")
const { logReqRes,logResReq2 } = require("./middleware");
const app = express();
const PORT = 8000;
app.use(express.json());
const User=require("./models/user");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Atlas connected successfully"))
  .catch(err => console.error("❌ Connection error:", err));




app.use(logReqRes);
// ✅ GET all users
app.get("/api/users", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// ✅ GET single user by ID
app.get("/api/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// ✅ POST: Create new user
app.post("/api/users", async (req, res, next) => {
  try {
    const { firstName, lastName, email, gender } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ message: "firstName, lastName, and email are required" });
    }

    const newUser = await User.create({ firstName, lastName, email, gender });
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (err) {
    next(err);
  }
});

// ✅ PATCH: Update user
app.patch("/api/users/:id", async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    next(err);
  }
});

// ✅ DELETE: Remove user
app.delete("/api/users/:id", async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully", user: deletedUser });
  } catch (err) {
    next(err);
  }
});

// ✅ Global Error Handling Middleware
app.use(logResReq2);
app.listen(PORT, () => console.log(`🚀 Server started on port: ${PORT}`));
