

---

# 📘 Notes: Creating HTTP Server in Node.js (Basic → Advanced)

---

## 🔹 1. What is a Server?

* A **server** is a **program** that waits for requests from clients and replies with responses.
* Example: When you open Google, your **browser (client)** sends a request → Google’s **server** responds with the page.
* 👉 In short: **A server waits, listens, and replies.**

---

## 🔹 2. What is an HTTP Server?

* HTTP = **HyperText Transfer Protocol** → the communication standard of the web.
* An **HTTP server** is a server that:

  1. Waits for **HTTP requests** (like `GET /about`).
  2. Processes them.
  3. Sends back **HTTP responses** (text, HTML, JSON, etc.).

👉 Example flow:
Browser → `"GET /about"`
Server → `"This is the About Page"`

---

## 🔹 3. Steps to Create an HTTP Server in Node.js

1. **Import `http` module**

   ```js
   const http = require("http");
   ```

   * Built-in module, no installation required.

---

2. **Create a server** using `http.createServer()`

   ```js
   const server = http.createServer((req, res) => {
     res.end("Hello, this is my first Node.js server!");
   });
   ```

   * Runs callback `(req, res)` **every time a client requests something**.

     * `req` → request object (URL, headers, method).
     * `res` → response object (status, headers, body we send).
   * `res.end()` → ends the response and sends data to the client.

---

3. **Listen on a port**

   ```js
   server.listen(3000, () => {
     console.log("Server is running at http://localhost:3000/");
   });
   ```

   * Starts server on **port 3000**.
   * Now `http://localhost:3000` will work in your browser.

---

## 🔹 4. Complete Basic Example

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, this is my first Node.js server!");
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
```

---

## 🔹 5. How It Works (Flow)

1. Run file → `node server.js`
2. Node starts server on port 3000
3. Browser requests → `http://localhost:3000/`
4. Server receives request → `(req, res)` runs
5. Server sends response → `"Hello, this is my first Node.js server!"`
6. Browser displays it ✅

---

## 🔹 6. Next Level: Handling Routes

In real projects, servers send **different responses** for **different URLs**.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home Page!");
  } else if (req.url === "/about") {
    res.end("This is the About Page.");
  } else if (req.url === "/api") {
    res.setHeader("Content-Type", "application/json"); // Response type
    res.end(JSON.stringify({ message: "Hello from API", status: "success" }));
  } else {
    res.statusCode = 404; // Not Found
    res.end("404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
```

---

### 🔹 7. Explanation of New Things

1. **`req.url`**

   * Tells which route was requested (`/`, `/about`, `/api`, etc.).

2. **`res.setHeader("Content-Type", "application/json")`**

   * Adds a **header** to the HTTP response.
   * `"Content-Type"` tells browser/client **what kind of data** is being sent.
   * `"application/json"` = JSON response.
   * `"text/html"` = HTML page.
   * `"text/plain"` = plain text.

3. **`JSON.stringify({...})`**

   * Converts a JS object → JSON string (because HTTP only transfers text).

   ```js
   { message: "Hello" }   // JS object
   '{"message":"Hello"}'  // JSON string
   ```

4. **`res.statusCode = 404`**

   * Sets HTTP status code.
   * `200` = success, `404` = not found, `500` = server error.

---

## 🔹 8. Example of JSON Response (from `/api` route)

**Headers:**

```
Content-Type: application/json
```

**Body:**

```json
{"message":"Hello from API","status":"success"}
```

👉 The browser or Postman will know it’s **JSON data** because of the `Content-Type` header.

---

## 🔹 9. Analogy to Remember

* `res.setHeader(...)` → **Label on a parcel** (saying “This box contains JSON”).
* `res.end(...)` → **Actually sending the parcel** (with the data inside).

---

## 🔹 10. Key Points for Interviews

* **Module used?** → `http` (built-in).
* **Default HTTP port?** → 80 (but devs use 3000/5000).
* **`req` vs `res`?**

  * `req` = Incoming request (URL, method, headers).
  * `res` = Response object we send back.
* **`res.end()`** → Ends response + sends data.
* **Why JSON.stringify?** → Converts JS objects to JSON string before sending.
* **404 handling?** → Use `res.statusCode = 404` for unknown routes.

---

✅ **In one line:**
**Creating an HTTP server in Node.js → import `http` → create server with `(req,res)` → handle routes → send response (text/HTML/JSON) → listen on a port.**

---
