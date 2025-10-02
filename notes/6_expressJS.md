📘 Express.js Notes
🔹 1. Definition
Express.js is a fast, minimal, and flexible Node.js framework for building web applications and APIs.
It provides easy-to-use methods to handle HTTP requests (GET, POST, PUT, DELETE, etc.), middleware, and routing.
👉 In short:
Express.js = Node.js + extra features to make server building simple.
________________________________________
🔹 2. Why use Express.js?
•	Node.js http module is low-level (you handle routes, headers, responses manually).
•	Express makes this easier & faster:
o	Simple routing (app.get, app.post, etc.)
o	Handles JSON, forms, cookies easily.
o	Works great for APIs & web apps.
o	Huge community & ecosystem (many packages).
________________________________________
🔹 3. Install Express
Run inside your Node.js project folder:
npm init -y        # Initialize package.json
npm install express
________________________________________
🔹 4. Basic Example (Hello World 🌍)
const express = require("express");
const app = express();

// Route: GET /
app.get("/", (req, res) => {
  res.send("Hello, Express.js!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
________________________________________
🔹 5. Handling Different HTTP Methods
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
________________________________________
________________________________________
🔹 7. Key Points (Interview Quick Notes)
•	Built on Node.js.
•	Provides routing.
•	Popular for REST APIs and web apps.
•	Commonly paired with MongoDB, React, Angular, Vue (MERN stack).
•	npm install express to use it.
•	Makes server code shorter & cleaner compared to raw Node.js http.
________________________________________
✅ In one line:
Express.js is a framework for Node.js that makes building servers and APIs simple, clean, and powerful.
________________________________________
