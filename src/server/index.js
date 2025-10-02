const express=require("express");
const app = express();

app.get("/users", (req, res) => {
  res.send("Fetching users...");
});

app.post("/users", (req, res) => {
  res.send("Creating a user...");
});

app.put("/users/:id", (req, res) => {
  res.send(`Updating user with ID ${req.params.id}`);
});

app.delete("/users/:id", (req, res) => {
  res.send(`Deleting user with ID ${req.params.id}`);
});


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


