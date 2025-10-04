
# 📌 MVC in Node.js (Notes)

### 1. **Definition**

MVC is a **design pattern** that separates your application into **three layers**:

* **Model** → Handles data & database logic.
* **View** → Handles UI (frontend / templates).
* **Controller** → Handles request/response logic.

This separation makes code **organized, reusable, and easy to maintain**.

---

### 2. **Components**

#### 🔹 Model

* Represents the **data layer**.
* Defines **schema** & **business rules**.
* In Node.js, often handled with **Mongoose** (for MongoDB) or Sequelize (for SQL).

👉 Example: `models/User.js`

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
```

---

#### 🔹 View

* Represents the **presentation layer**.
* Responsible for what the **user sees**.
* In Node.js + Express, usually implemented with **templating engines** like EJS, Pug, Handlebars or frontend frameworks (React, Angular, etc.).

👉 Example (EJS file `views/home.ejs`):

```html
<h1>Welcome <%= username %>!</h1>
```

---

#### 🔹 Controller

* The **brain** of the app.
* Connects **Model ↔ View**.
* Handles **HTTP requests**, calls the **Model** for data, and sends response (rendering a view or sending JSON).

👉 Example: `controllers/userController.js`

```js
const User = require("../models/User");

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Create a user
exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};
```

---

### 3. **How They Work Together**

1. **Client** makes a request (e.g., `/users`).
2. **Controller** receives the request → asks **Model** for data.
3. **Model** talks to the database → sends data back to Controller.
4. **Controller** passes data to **View**.
5. **View** presents data (HTML/JSON) to the **Client**.

---

### 4. **Benefits of MVC**

* Organized code (separation of concerns).
* Easier to maintain & scale.
* Team collaboration (frontend devs handle Views, backend devs handle Models/Controllers).
* Reusability of components.

---

### 5. **Diagram** (for your notes)

```
Client (Browser / API call)
        |
        v
   [ Controller ]  <-- Handles request/response
        |
        v
   [   Model   ]  <-- Database logic
        |
        v
   [   View    ]  <-- What user sees
```

---

✅ **In your current project**

* `models/User.js` → Model
* `server.js` routes & controllers → Controller
* If you use React/EJS → View

---

