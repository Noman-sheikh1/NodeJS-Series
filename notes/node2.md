


# 📂 File Handling in Node.js (Using `fs` Module)

### 🔹 What is `fs`?

* `fs` stands for **File System**.
* It is a **built-in module** in Node.js (no need to install).
* Provides functions to **read, write, update, delete, copy, and manage files & directories**.

👉 Import `fs`:

```js
const fs = require('fs');
```

---
* Async vs Sync in fs

Asynchronous (Async)

Uses callbacks / arrow functions → (err, data) => { ... }.

Non-blocking → Node.js can continue executing other code while file operation finishes in the background.

Example:

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log("This line runs immediately!");


👉 Here, "This line runs immediately!" prints before file content.

Synchronous (Sync)

Does not use callbacks.

Blocking → Code execution waits until operation finishes.

Example:

const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
console.log("This line runs after file is read!");


👉 Here, "This line runs after file is read!" prints only after file content.

* throw err; – What it Does?

In callbacks, we often write:

if (err) throw err;


Meaning:

If an error occurs, it is thrown (raised as an exception).

Node.js will stop execution and display the error in the console (terminal).

It does not print to user/browser directly (unless you catch and send it).

## 📝 File Operations

### 1. Write to File

* **Asynchronous (non-blocking)**

```js
fs.writeFile('example.txt', 'Hello Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully ✅');
});
```

* **Synchronous (blocking)**

```js
fs.writeFileSync('example.txt', 'Hello Node.js!');
console.log('File written successfully ✅');
```

---

### 2. Read from File

* **Async**

```js
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});
```

* **Sync**

```js
const data = fs.readFileSync('example.txt', 'utf8');
console.log("File content:", data);
```

---

### 3. Append to File

* **Async**

```js
fs.appendFile('example.txt', '\nThis is appended text.', (err) => {
  if (err) throw err;
  console.log('Text appended ✅');
});
```

* **Sync**

```js
fs.appendFileSync('example.txt', '\nThis is appended text.');
console.log('Text appended ✅');
```

---

### 4. Copy File

* **Async**

```js
fs.copyFile('example.txt', 'copy.txt', (err) => {
  if (err) throw err;
  console.log('File copied ✅');
});
```

* **Sync**

```js
fs.copyFileSync('example.txt', 'copy.txt');
console.log('File copied ✅');
```

---

### 5. Delete File

* **Async**

```js
fs.unlink('copy.txt', (err) => {
  if (err) throw err;
  console.log('File deleted ✅');
});
```

* **Sync**

```js
fs.unlinkSync('copy.txt');
console.log('File deleted ✅');
```

---

### 6. Rename File

* **Async**

```js
fs.rename('example.txt', 'newExample.txt', (err) => {
  if (err) throw err;
  console.log('File renamed ✅');
});
```

* **Sync**

```js
fs.renameSync('example.txt', 'newExample.txt');
console.log('File renamed ✅');
```

---

## 📁 Directory Operations

### 1. Create Directory

* **Async**

```js
fs.mkdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder created ✅');
});
```

* **Sync**

```js
fs.mkdirSync('myFolder');
console.log('Folder created ✅');
```

---

### 2. Remove Directory

* **Async**

```js
fs.rmdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder removed ✅');
});
```

* **Sync**

```js
fs.rmdirSync('myFolder');
console.log('Folder removed ✅');
```

---

### 3. Read Directory Contents

```js
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log("Files in current directory:", files);
});
```

---

### 4. Check File/Folder Exists & Info

```js
fs.stat('newExample.txt', (err, stats) => {
  if (err) throw err;
  console.log("Is file:", stats.isFile());
  console.log("Is directory:", stats.isDirectory());
  console.log("Size:", stats.size, "bytes");
});
```

---

## 🔑 Important Notes for Placements

1. **Async vs Sync**

   * Async → Non-blocking, preferred in production.
   * Sync → Blocking, good for small scripts/testing.

2. **Key Methods of `fs`:**

   * `fs.writeFile()` / `fs.writeFileSync()` → Create/overwrite file.
   * `fs.readFile()` / `fs.readFileSync()` → Read file content.
   * `fs.appendFile()` → Add content to file.
   * `fs.copyFile()` → Copy file.
   * `fs.rename()` → Rename file.
   * `fs.unlink()` → Delete file.
   * `fs.mkdir()` / `fs.rmdir()` → Create/remove directories.
   * `fs.readdir()` → List files in directory.
   * `fs.stat()` → Get file details.

3. **Practical Use Cases:**

   * Logging system (append logs).
   * File-based database (JSON read/write).
   * Upload & manage files in a web app.

---


