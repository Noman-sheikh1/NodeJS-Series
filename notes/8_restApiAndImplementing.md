# 📘 Notes: REST API, RESTful API & SSR vs CSR

---

## 🔹 1. What is a REST API?
- **REST API (Representational State Transfer API)** = a way for two systems (client & server) to communicate over HTTP.  
- Works with **resources** (users, products, orders), each identified by a **URL (endpoint)**.  
- Uses **HTTP methods** (GET, POST, PUT, DELETE, PATCH).  
- Data is usually sent/received in **JSON format**.  

✅ **One-liner:**  
REST API is a standard way for client and server to communicate over HTTP using methods like GET, POST, PUT, DELETE on resources.

---

## 🔹 2. What is a RESTful API?
- **RESTful API** = An API that follows **REST principles**.  
- REST is an **architectural style**, not a technology.  
- RESTful APIs are **stateless, scalable, and language-independent**.  

👉 Example endpoints:  

| HTTP Method | Endpoint     | Purpose                                |
|-------------|-------------|----------------------------------------|
| GET         | `/users`    | Fetch all users                        |
| GET         | `/users/1`  | Fetch user with ID = 1                 |
| POST        | `/users`    | Create a new user                      |
| PUT         | `/users/1`  | Update (replace) user with ID = 1      |
| PATCH       | `/users/1`  | Update part of user with ID = 1        |
| DELETE      | `/users/1`  | Delete user with ID = 1                |

✅ **Analogy:**  
REST API is like a **waiter in a restaurant**.  
- Client (you) orders food → API (waiter) delivers food → Server (kitchen) prepares it.

---

## 🔹 3. Why do we use RESTful APIs?
- **Language independent** → Frontend (React, Angular, Flutter) can talk to backend (Node, Java, Python, etc.).  
- **Scalable** → Each resource has its own endpoint.  
- **Stateless** → Every request is independent, no need for server to remember old requests.  
- **Simple & standard** → Works over HTTP (universal).  
- **Widely used** → For web apps, mobile apps, microservices.  

✅ **Interview one-liner:**  
"We use RESTful APIs because they are simple, scalable, stateless, and language-independent, making frontend and backend communication easy."

---

## 🔹 4. Important Interview Points
- RESTful APIs are based on **HTTP methods**.  
- **Resources** are represented by **endpoints (URLs)**.  
- **Stateless** → No session stored on server.  
- **Idempotent methods** → GET, PUT, DELETE (same request = same result).  
- Most REST APIs use **JSON** for data exchange.  

---

## 🔹 5. SSR vs CSR (often asked with APIs)

| Feature       | SSR (Server-Side Rendering)                  | CSR (Client-Side Rendering)                  |
|---------------|----------------------------------------------|----------------------------------------------|
| **Rendering** | Server sends full HTML page                  | Browser builds UI using JavaScript + API data |
| **First Load**| Faster (ready HTML)                          | Slower (JS loads first, then fetches data)   |
| **SEO**       | Good (search engines see full HTML)          | Weak (needs extra setup for SEO)             |
| **API Usage** | Server calls API → builds HTML               | Browser (JS) calls API directly → updates DOM|
| **Examples**  | PHP, Django, Next.js SSR                     | React, Angular, Vue (SPAs)                   |

👉 **Analogy:**  
- SSR = Chef serves **full cooked dish**.  
- CSR = Chef gives **ingredients (JSON)** → Browser cooks it with JS.  

---

## 🔹 6. Quick 30-Second Interview Answer
**Q: What is a RESTful API?**  
"A RESTful API is an API that follows REST principles. It uses HTTP methods like GET, POST, PUT, DELETE to perform operations on resources, usually exchanging data in JSON format. For example, GET /users fetches users, POST /users creates a user, and DELETE /users/1 deletes a user. We use REST APIs because they are simple, stateless, scalable, and language-independent."

**Q: Difference between SSR and CSR?**  
"SSR renders pages on the server, so first load is faster and SEO is better. CSR renders in the browser using JavaScript and APIs, making apps more dynamic but slower on first load."

---

# 📘 Notes: REST Principles

---

## 🔹 1. Client-Server Separation
- Client (frontend) and server (backend) are **independent**.  
- Client only cares about **UI and interaction**, server about **data & logic**.  

---

## 🔹 2. Statelessness
- Each request must contain **all necessary information**.  
- Server does **not store client’s state/session**.  
- Example: Every API call should include authentication token.  

👉 **Benefit** → Scalable & simple.  

---

## 🔹 3. Cacheable
- Responses should define if they can be **cached or not**.  
- Example: `GET /products` response can be cached for 5 minutes.  

👉 **Benefit** → Improves performance & reduces server load.  

---

## 🔹 4. Uniform Interface
- Consistent & standard communication.  
- Achieved by:  
  - Using standard HTTP methods (GET, POST, PUT, DELETE, PATCH).  
  - Resources identified by URLs (e.g., `/users/1`).  
  - Responses usually in JSON format.  

👉 **Benefit** → Simple & predictable.  

---

## 🔹 5. Layered System
- REST API can have multiple layers (load balancers, proxies, firewalls).  
- Client doesn’t need to know if it’s directly talking to the **real server**.  

👉 **Benefit** → Scalable & secure.  

---

## 🔹 6. Code on Demand (Optional)
- Server can send code (like JavaScript) to the client.  
- Example: sending a JS snippet to execute in client browser.  
- Rarely used, but allowed.  

---

## ✅ Why REST APIs are Simple, Stateless, Scalable?
- **Simple** → Uses standard HTTP methods & JSON.  
- **Stateless** → Every request is independent.  
- **Scalable** → Stateless + client-server separation + caching.  
- **Language independent** → Any frontend (React, Angular, Flutter) can talk to any backend (Node, Java, Python).  

---

# ✅ Final One-Liners for Quick Revision
- **REST API** = Standard way for client & server to talk over HTTP using JSON.  
- **RESTful API** = REST API that strictly follows REST principles (stateless, resource-based).  
- **SSR** = Server sends full page → fast, SEO friendly.  
- **CSR** = Browser builds page with JS → good for SPAs, but slower first load.  


---

# 📌 Notes: Implementing a REST API with Express.js

### 🔹 1. Project Setup

* Create a new folder for your project (e.g., `project_1`).
* Inside it, initialize a Node.js project:

  ```bash
  npm init -y
  ```
* Install Express.js:

  ```bash
  npm install express
  ```
* Create `index.js` (main server file).

---

### 🔹 2. Dummy Database

* Instead of using a real database, generate fake JSON data from **[Mockaroo](https://mockaroo.com/)**.
* Save the generated file as `MOCK_DATA.json` in the project folder.
* This acts like a **temporary database** for testing APIs.

---

### 🔹 3. Writing the Server (index.js)

```js
const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// ✅ GET all users
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// ✅ GET user by ID
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

// ✅ POST new user (currently dummy response)
app.post("/api/users", (req, res) => {
  res.json({ status: "pending" });
});

// ✅ PATCH update user (currently dummy response)
app.patch("/api/users/:id", (req, res) => {
  res.json({ status: "pending" });
});

// ✅ DELETE user (currently dummy response)
app.delete("/api/users/:id", (req, res) => {
  res.json({ status: "pending" });
});

// Start server
app.listen(PORT, () =>
  console.log("🚀 Server started at port:", PORT)
);
```

---

### 🔹 4. REST API Endpoints

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| GET    | `/api/users`     | Fetch all users                 |
| GET    | `/api/users/:id` | Fetch a single user by ID       |
| POST   | `/api/users`     | Create a new user (dummy)       |
| PATCH  | `/api/users/:id` | Update an existing user (dummy) |
| DELETE | `/api/users/:id` | Delete a user (dummy)           |

---

### 🔹 5. How to Run

```bash
node index.js
```

Server will run at:
👉 [http://localhost:8000/api/users](http://localhost:8000/api/users)

---

# 📌 Key Learning / Interview Points

1. **Express.js Basics**

   * Express is a minimal and fast web framework for Node.js.
   * Provides easy routing (`app.get`, `app.post`, etc.).

2. **REST API**

   * REST (Representational State Transfer) is an architecture style.
   * Uses HTTP methods (GET, POST, PATCH, DELETE) to perform CRUD operations.

3. **Route Parameters**

   * Example: `/api/users/:id` → `req.params.id` lets us capture dynamic values.

4. **Dummy Database**

   * `MOCK_DATA.json` is acting like a database.
   * In real-world apps, this will be replaced with **MongoDB, PostgreSQL, MySQL**, etc.

5. **Middleware (Future Enhancement)**

   * Use `express.json()` to parse request bodies for POST/PATCH.
   * Example:

     ```js
     app.use(express.json());
     ```

6. **Error Handling (Future Enhancement)**

   * Always check if user exists before returning.
   * Example: return a 404 if user not found.

---

