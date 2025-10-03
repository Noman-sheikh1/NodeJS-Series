

---

# 📌 Middleware in Express.js

### 🔹 What is Middleware?

Middleware in Express.js is a **function** that runs **between the request and the response**.

* Can **modify request & response objects**.
* Can **end the request-response cycle**.
* Can **call the next middleware** using `next()`.
* Runs **in order of definition**.

---

### 🔹 Syntax

```js
app.use((req, res, next) => {
    console.log('Middleware executed');
    next();  // Pass control to next middleware
});
```

---

### 🔹 What Middleware Can Do?

1. **Execute Code** (logging, auth check).
2. **Modify Request/Response** (add data).
3. **End Request-Response Cycle** (send response).
4. **Pass to Next Middleware** (`next()`).

---

### 🔹 Example with Multiple Middleware

```js
const express = require('express');
const app = express();

// Middleware 1: Logger
app.use((req, res, next) => {
    console.log('Middleware 1: Request received at ' + new Date());
    next();
});

// Middleware 2: Add custom property
app.use((req, res, next) => {
    req.username = "Noman";   // adding data to request
    console.log("Middleware 2: Added username to request");
    next();
});

// Route Handler
app.get('/', (req, res) => {
    res.send(`Hello, ${req.username}`);
});

// Middleware 3: Error handling
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).send("Something went wrong!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

### 🔹 Flow of Execution (when user hits `/`)

1. Request comes → Middleware 1 logs request.
2. Middleware 2 adds `username`.
3. Route handler sends response.
4. If error → Error handler runs.

---

### 🔹 Diagram (Text-Based)

```
   Client
     │
     ▼
 Middleware 1 (Logs Request)
     │
     ▼
 Middleware 2 (Adds Data)
     │
     ▼
 Route Handler (Sends Response)
     │
     ▼
   Client
```

---

👉 This format (`.md` file) is **perfect for GitHub Notes / Documentation** because:

* Headings (`#`, `###`) look like sections.
* Code blocks with ```js have syntax highlighting.
* Lists and diagrams remain neat.

---


