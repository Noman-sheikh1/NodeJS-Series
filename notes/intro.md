
## 🌍 What is Node.js?

* Node.js is a **runtime environment** that allows you to run **JavaScript outside the browser**.
* It is built on **Google Chrome’s V8 JavaScript engine** (written in C++), making it **fast and efficient**.
* Before Node.js, JavaScript was used only for **frontend (inside browsers)**. With Node.js, you can also use it for **backend (server-side)**.
* This enables **full-stack development** using only JavaScript.

---

## ⚡ Features of Node.js

1. **Asynchronous & Non-blocking**

   * Does not wait for one task to finish before starting the next.
   * Makes applications very fast.

2. **Single-threaded but Event-driven**

   * Uses a single thread but can handle thousands of connections simultaneously using the **event loop**.

3. **Cross-platform**

   * Works on Windows, macOS, Linux.

4. **NPM (Node Package Manager)**

   * Comes with Node.js by default.
   * Gives access to **millions of packages** (ready-made libraries).

5. **Scalable**

   * Handles multiple requests efficiently → Ideal for **real-time apps**.

---

## 🛠 Installation & Setup

1. Download Node.js from 👉 [nodejs.org](https://nodejs.org)

   * Choose **LTS (Long Term Support)** → Stable version.
   * Rule: Even versions (12, 14, 16, 18) are stable.

2. Verify installation:

```bash
node --version     # check Node.js version
npm --version      # check npm version
```

3. Start Node REPL (interactive shell):

```bash
node
```

---

## 👩‍💻 First Node.js Code

1. Create a file `hello.js`

```js
console.log("Hello World");
```

2. Run in terminal:

```bash
node hello.js
```

---

## ❓ Why `console.log(window)` works in Browser but not in Node.js?

* In **Browser**, JavaScript has built-in objects:

  * `window` → Browser window/tab
  * `document` → Web page (HTML DOM)
  * `alert()` → Popup alert box

* In **Node.js**, JavaScript runs on the **server** (outside browser):

  * No `window` ❌
  * No `document` ❌
  * No `alert()` ❌

👉 Instead, Node.js provides:

* `global` → Similar to `window`
* `process` → Info about current Node.js process
* `require()` → Used to import modules

---

## 📦 Important Node.js Concepts

* **Modules** → Reusable blocks of code (`require`, `module.exports`).
* **Built-in modules** → `fs`, `http`, `path`, `os`.
* **Event Loop** → Handles asynchronous operations.
* **Callbacks & Promises** → Handle async tasks (reading files, APIs).
* **Express.js** → Popular framework built on Node.js for web apps.

---

## 📦 npm init

When creating a new project:

```bash
npm init
```

* Asks questions (name, version, description, entry point, author, license).
* Creates a **package.json** file.

👉 Skip questions and use defaults:

```bash
npm init -y
```

---

## 📄 package.json

* **Heart of every Node.js project**.
* Stores metadata + dependencies.
* Allows others to install dependencies with:

```bash
npm install
```

### 🏗 Example

```json
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "My first Node.js app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Noman",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### 🔑 Important Fields

* `name` → Project name
* `version` → Version of app
* `description` → About project
* `main` → Entry file (`index.js` by default)
* `scripts` → Command shortcuts (e.g., `npm start`)
* `dependencies` → Production libraries (`express`)
* `devDependencies` → Development libraries (`nodemon`)

👉 In short:

* `npm init` → creates `package.json`
* `package.json` → keeps project info + dependencies

---

## 📘 Modules in Node.js

### 🔹 What is a Module?

* A **module** is just a file that contains code (functions, variables, etc.).
* Helps organize code into separate files.
* Example files: `math.js`, `server.js`, `app.js`.

👉 Node.js uses **CommonJS modules** (`require`, `module.exports`).
👉 Modern JS supports **ES6 modules** (`import`, `export`).

---

### 1. CommonJS (Default in Node.js)

📄 `math.js`

```js
// math.js
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
// export functions
module.exports = { add, sub };
```

📄 `app.js`

```js
// app.js
const math = require('./math');

console.log("Addition:", math.add(5, 3));
console.log("Subtraction:", math.sub(10, 4));
```

✅ Run:

```bash
node app.js
```

---

### 2. ES6 Modules (Modern Way)

👉 Enable by adding `"type": "module"` in `package.json`.

📄 `math.js`

```js
// math.js
export function add(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}
```

📄 `app.js`

```js
// app.js
import { add, sub } from './math.js';

console.log("Addition:", add(5, 3));
console.log("Subtraction:", sub(10, 4));
```

✅ Run:

```bash
node app.js
```

---