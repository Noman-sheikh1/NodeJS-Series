

# 📘 Notes: URL Module in Node.js

## 🔹 What is a URL?

* A **URL (Uniform Resource Locator)** is the **web address** used to locate resources (like web pages, images, files) on the internet.
* Example:

  ```
  https://www.example.com:8080/pathname?search=query#hash
  ```

### Basic Structure of a URL

| Part              | Meaning                                                  | 
| ----------------- | -------------------------------------------------------- | 
| `https:`          | Protocol → type of connection (HTTP/HTTPS/FTP)           |         
| `www.example.com` | Hostname → domain name or IP address                     |         
| `8080`            | Port → server port (default: 80 for HTTP, 443 for HTTPS) |         
| `/pathname`       | Pathname → specific path to a resource                   |         
| `?search=query`   | Query string → key/value data sent to server             |         
| `#hash`           | Fragment → points to a section inside the page           |         

---

## 🔹 What is the URL Module in Node.js?

* The **URL module** provides utilities to work with URLs.
* With it, you can:

  1. **Parse** → break down URLs into components.
  2. **Format** → build URLs from components.
  3. **Resolve** → turn relative URLs into absolute ones.

👉 To include it:

```js
const url = require('url');
```

---

## 🔹 Parsing a URL

You can use **`url.parse()`** to break down a URL into parts.

### Example:

```js
const url = require('url');

// Example URL
const myURL = 'https://www.example.com:8080/pathname?search=query#hash';

// Parse the URL
const parsedURL = url.parse(myURL);

console.log(parsedURL);
```

### Output:

```js
{
  protocol: 'https:',
  slashes: true,
  host: 'www.example.com:8080',
  port: '8080',
  hostname: 'www.example.com',
  pathname: '/pathname',
  search: '?search=query',
  query: 'search=query',
  hash: '#hash'
}
```

✅ Now you can easily access any part (like `protocol`, `pathname`, `query`, etc.).

---

## 🔹 Working with Query Strings

The query string (`?key=value`) can be converted into a **JavaScript object** using the **`querystring` module**.

### Example:

```js
const url = require('url');
const querystring = require('querystring');

const myURL = 'https://www.example.com/pathname?search=query&name=John';

// Parse the URL
const parsedURL = url.parse(myURL);

// Parse the query string
const parsedQuery = querystring.parse(parsedURL.query);

console.log(parsedQuery);
```

### Output:

```js
{ search: 'query', name: 'John' }
```

✅ Now you can directly use `parsedQuery.search` or `parsedQuery.name`.

---

## 🔹 Formatting a URL

You can build a URL from parts using **`url.format()`**.

### Example:

```js
const url = require('url');

const formattedURL = url.format({
  protocol: 'https',
  hostname: 'www.example.com',
  port: '8080',
  pathname: '/pathname',
  query: {
    search: 'query',
    name: 'John'
  }
});

console.log(formattedURL);
```

### Output:

```
https://www.example.com:8080/pathname?search=query&name=John
```

✅ This is useful for dynamically building URLs.

---

## 🔹 Resolving URLs

You can use **`url.resolve()`** to combine a base URL with a relative path.

### Example:

```js
const url = require('url');

const baseURL = 'https://www.example.com/home/';
const resolvedURL = url.resolve(baseURL, 'about');

console.log(resolvedURL);
```

### Output:

```
https://www.example.com/home/about
```

---

## 🔹 Using the WHATWG URL API (Modern Way ✅)

Node.js also supports the modern **WHATWG URL API**, which is more powerful and recommended.

### Example:

```js
const { URL } = require('url');

// Example URL
const myURL = new URL('https://www.example.com:8080/pathname?search=query#hash');

console.log(myURL.hostname);          // 'www.example.com'
console.log(myURL.searchParams.get('search')); // 'query'
```

### Why prefer WHATWG API?

* It follows web standards (same as browser `URL`).
* It provides **URLSearchParams**, which makes query string handling easier.

---

## 🔹 Key Interview Points

1. **URL Module Purpose** → Parse, Format, Resolve URLs.
2. **Methods**:

   * `url.parse()` → Break URL into parts.
   * `url.format()` → Build URL from parts.
   * `url.resolve()` → Resolve relative → absolute.
3. **Query Handling** → `querystring` module OR `URLSearchParams` (modern).
4. **WHATWG URL API** → Modern, recommended, more powerful.
5. **Example**: `new URL().searchParams.get("key")`.

---
🔹 Key Difference (Old vs New)
Feature	          Old API (url.parse)	          New API (URL class)
Parsing	          url.parse("...")	              new URL("...")
Query string	  Needs querystring module	      myURL.searchParams.get("key")
Status	          Deprecated	                  Recommended ✅

✅ **In one line:**
The **Node.js URL Module** helps in **parsing, formatting, and resolving URLs**, while the **WHATWG URL API** is the modern approach to handle URLs and query strings in a cleaner way.

---

