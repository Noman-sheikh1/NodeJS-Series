# 📌 HTTP Status Codes  

### 🔹 Definition  
HTTP Status Codes are **3-digit numbers** returned by the server in response to a client’s request.  

- They tell the client whether the request was successful, failed, redirected, or encountered an error.  
- First digit of the code defines the **category** (1xx → Info, 2xx → Success, etc.).  

---

## 📌 Categories of Status Codes  

### 1️⃣ Informational (1xx)  
- These codes mean **request received and still in process**.  
- Server is telling → “I got your request, keep going”.  
- ⚡ Rarely used directly in projects.  

👉 Examples:  
- **100 Continue** → Initial part of request received, continue sending rest.  
- **101 Switching Protocols** → Protocol changed (e.g., HTTP → WebSocket).  

---

### 2️⃣ Successful (2xx)  
- Request was **successfully received, understood, and processed**.  

👉 Examples:  
- **200 OK** → Success (most common).  
- **201 Created** → Resource created (e.g., new user registered).  
- **202 Accepted** → Request accepted but processing not complete.  
- **204 No Content** → Request successful but no data to return.  

---

### 3️⃣ Redirection (3xx)  
- Client needs to **take additional action** (like follow another URL).  

👉 Examples:  
- **301 Moved Permanently** → Resource has new URL (SEO friendly redirect).  
- **302 Found** → Temporary redirect.  
- **304 Not Modified** → Cached version is fine, no need to re-fetch.  

---

### 4️⃣ Client Error (4xx)  
- Something went wrong from **client side** (bad request, unauthorized, not found).  

👉 Examples:  
- **400 Bad Request** → Invalid request syntax/data.  
- **401 Unauthorized** → Authentication required.  
- **403 Forbidden** → Client authenticated but not allowed.  
- **404 Not Found** → Resource not available.  
- **429 Too Many Requests** → Rate limiting (client sent too many requests).  

---

### 5️⃣ Server Error (5xx)  
- Something failed on the **server side**.  

👉 Examples:  
- **500 Internal Server Error** → General server error.  
- **502 Bad Gateway** → One server got invalid response from another.  
- **503 Service Unavailable** → Server overloaded or down.  
- **504 Gateway Timeout** → Server took too long to respond.  

---

## 📊 Important Status Codes (Placement + Project Must-Know)  

| Code | Meaning | Use Case |
|------|----------|----------|
| **200 OK** | Success | Standard response for successful requests |
| **201 Created** | Resource created | When new data added (signup, post, etc.) |
| **204 No Content** | Success, no data | Delete request completed, nothing to return |
| **301 Moved Permanently** | Permanent redirect | Used in SEO & changed API endpoints |
| **302 Found** | Temporary redirect | Login redirects |
| **304 Not Modified** | Cached response valid | Saves bandwidth |
| **400 Bad Request** | Invalid request | Missing fields, wrong data format |
| **401 Unauthorized** | Login needed | Token missing |
| **403 Forbidden** | Access denied | Token present but not enough permissions |
| **404 Not Found** | Resource missing | Wrong URL or deleted data |
| **409 Conflict** | Resource conflict | Duplicate entry (e.g., username already exists) |
| **429 Too Many Requests** | Rate limiting | API protection |
| **500 Internal Server Error** | Server crashed | Debugging needed |
| **503 Service Unavailable** | Server down | Maintenance mode |
| **504 Gateway Timeout** | Timeout | Microservices/API delay |

---

## 📌 Extra Tips (Interview + Projects)  

1. **200 vs 201 vs 204**  
   - `200` → General success.  
   - `201` → Resource successfully created.  
   - `204` → Success but nothing to send back (DELETE request).  

2. **401 vs 403**  
   - `401 Unauthorized` → Client not logged in or token missing.  
   - `403 Forbidden` → Client is logged in but not allowed (e.g., normal user trying to access admin page).  

3. **404 vs 410**  
   - `404 Not Found` → Maybe temporary.  
   - `410 Gone` → Permanently deleted resource.  

4. **Why Status Codes matter in projects?**  
   - Helps **debugging** (whether error is client-side or server-side).  
   - Helps **API communication** (frontend knows what happened without parsing entire body).  
   - Interviewers check if you know **correct codes for correct scenarios** (very common question).  

---

## 📊 Diagram (Request & Response with Status Code)  

   Client (Browser/Postman)
        │      HTTP Request
       ▼
   ┌─────────┐
   │   Server     │
   └─────────┘
          │      HTTP Response + Status Code
         ▼
   Client sees status code + data
* Example Flow:
•	GET /users → 200 OK + user list.
•	POST /users with missing data → 400 Bad Request.
•	GET /wrong-url → 404 Not Found.
•	Server overloaded → 503 Service Unavailable.
________________________________________

