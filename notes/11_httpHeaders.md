## HTTP Headers in Detail:
🔹 What are HTTP Headers?
•	HTTP headers are key-value pairs sent along with HTTP requests and responses.
•	They carry metadata (information about the request/response), not the actual data itself.
•	They tell the server or client how to handle the actual data (body).
👉 Think of it like a postal mail system:
•	The letter (body) is the actual content (data).
•	The envelope (headers) contains information like sender, receiver, priority, etc. → this is metadata.
________________________________________
🔹 Example (Postman / Mail Envelope Analogy)
When you send a request using Postman:
•	The body is like the actual message → e.g., JSON data {"name":"Noman"}.
•	The headers are like the envelope info → e.g., Content-Type: application/json, Authorization: Bearer xyz.
📬 Just like an envelope tells the post office who the sender is, who the receiver is, and how to deliver,
HTTP headers tell the browser/server how to process the message.
________________________________________
📌 Types of HTTP Headers
1️⃣ Request Headers
•	Sent by the client (browser/Postman) to the server.
•	Provide information about the request or the client itself.
👉 Examples:
•	Host: www.google.com → The domain being requested.
•	User-Agent: Mozilla/5.0 → Browser or client info.
•	Accept: application/json → Client expects JSON response.
•	Authorization: Bearer <token> → Security info for authentication.
________________________________________
2️⃣ Response Headers
•	Sent by the server back to the client.
•	Provide information about the server or about the response itself.
👉 Examples:
•	Content-Type: application/json → The body is JSON.
•	Content-Length: 349 → Size of the response.
•	Set-Cookie: sessionId=abc123 → Server setting cookies.
•	Cache-Control: no-cache → Don’t cache this response.
________________________________________
📌 Coding Example (Express.js)
const express = require('express');
const app = express();

// Request Header Example
app.get('/check-headers', (req, res) => {
    console.log("Request Headers:", req.headers);  // logs all request headers
    const userAgent = req.headers['user-agent'];   // specific header
    res.send(`Your User-Agent is: ${userAgent}`);
});

// Response Header Example
app.get('/set-header', (req, res) => {
    res.set('Custom-Header', 'HelloWorld');  // setting a response header
    res.set('Content-Type', 'application/json');
    res.send({ message: "Response header set!" });
});

app.listen(3000, () => {
    console.log("Server running on port 8000");
});
🔹 If you call /check-headers in Postman → you’ll see your request headers.
🔹 If you call /set-header → you’ll see Custom-Header: HelloWorld in the response.
________________________________________
📌 Custom Headers
🔹 What is a Custom Header?
•	Custom headers are user-defined headers you create to send extra information.
•	By convention, custom headers start with X-.
👉 Example:
•	X-API-Key: 12345
•	X-User-Name: Noman
💡 Why "X-"?
•	To avoid conflict with built-in HTTP headers.
•	It tells the server/client → “This is a non-standard, custom header”.
________________________________________
✅ Coding Example (Custom Header)
const express = require('express');
const app = express();

// Middleware to check custom header
app.get('/custom', (req, res) => {
    const apiKey = req.headers['x-api-key'];  // reading custom header
    if (apiKey === '12345') {
        res.send("✅ Access granted!");
    } else {
        res.status(401).send("❌ Access denied! Missing or invalid API Key.");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
👉 When you send request from Postman:
•	Add a Header → Key: X-API-Key, Value: 12345.
•	Response: "✅ Access granted!".
•	If missing/invalid → "❌ Access denied!".
________________________________________
📌 Common Built-in Headers
🔹 Request Headers
•	Host → Domain name of server.
•	User-Agent → Info about client/browser.
•	Accept → Format client accepts (text/html, application/json).
•	Authorization → Authentication credentials.
🔹 Response Headers
•	Content-Type → Format of response (application/json, text/html).
•	Set-Cookie → Sets cookies in client.
•	Cache-Control → Cache instructions.
•	Access-Control-Allow-Origin → CORS settings.
________________________________________
