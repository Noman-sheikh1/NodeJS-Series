

---

# 📌 REST API with Express.js

## 🔹 Tools we use

* **Postman** → to test APIs (send GET, POST, PATCH, DELETE requests).
* **Express.js** → Node.js framework for building APIs.
* **fs module** → to read/write data in `MOCK_DATA.json`.

---

## 🔹 How to test API in Postman

1. Select **Method** (GET / POST / PATCH / DELETE).
2. Enter API URL (example: `http://localhost:8000/api/users`).
3. For `POST` / `PATCH` → go to **Body → x-www-form-urlencoded** (or raw JSON if you add `express.json()`).
4. Send request and check response.

---

## 🔹 API Endpoints in this project

### 1. GET → Fetch all users

```js
app.get("/api/users", (req,res) => {
  return res.json(users);
});
```

📌 *Use in Postman*:

* Method: **GET**
* URL: `http://localhost:8000/api/users`

---

### 2. GET by ID → Fetch single user

```js
app.get("/api/users/:id", (req,res) => {
  const id = Number(req.params.id);
  const user = users.find((user)=>user.id===id);
  return res.json(user);
});
```

📌 *Postman*:

* GET → `http://localhost:8000/api/users/5`

---

### 3. POST → Add a new user

```js
app.post("/api/users", (req,res) => {
  const body = req.body;
  users.push({...body, id: users.length+1});
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users,null,2), () => {
    res.json({status:"success", id: users.length});
  });
});
```

📌 *Postman*:

* POST → `http://localhost:8000/api/users`
* Body: `x-www-form-urlencoded`

  ```
  first_name: Tushar
  email: tushar@test.com
  ```

---

### 4. PATCH → Update a user

```js
app.patch("/api/users/:id", (req,res) => {
  const body = req.body;
  const id = Number(req.params.id);
  const userIndex = users.findIndex((user)=>user.id===id);

  if(userIndex === -1) return res.status(404).json({message:"User not found"});

  users[userIndex] = {...users[userIndex], ...body};
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users,null,2), () => {
    res.json({status:"success", user: users[userIndex]});
  });
});
```

📌 *Postman*:

* PATCH → `http://localhost:8000/api/users/2`
* Body:

  ```
  first_name: UpdatedName
  ```

---

### 5. DELETE → Remove a user

```js
app.delete("/api/users/:id", (req,res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((user)=>user.id===id);

  if(userIndex === -1) return res.status(404).json({error:"User not found"});

  const deletedUser = users.splice(userIndex, 1);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users,null,2), () => {
    res.json({status:"success", deletedUser});
  });
});
```

📌 *Postman*:

* DELETE → `http://localhost:8000/api/users/3`

---

✅ **Summary**

* **GET** → fetch data
* **POST** → add new data
* **PATCH** → update partial data
* **DELETE** → remove data
* Data is stored in `MOCK_DATA.json` and updated after each change.

---

