const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  

const now = new Date();
const day = String(now.getDate()).padStart(2, "0");      // 02
const month = String(now.getMonth() + 1).padStart(2, "0"); // 10 (months start from 0)
const year = now.getFullYear();                         // 2025

const formattedDate = `${day}-${month}-${year}`;



  const log = `${formattedDate} : ${req.method} ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url, true);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("HomePage");
        break;

      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;

      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your results for " + search);
        break;

      case "/signup":
        if (req.method === "GET") {
          res.end("This is a signup Form");
        } else if (req.method === "POST") {
          // DB Query can be added here
          res.end("Success");
        }
        break;

      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(3000, () => console.log("Server started at port 3000"));



const myURL = 'https://www.example.com:8080/pathname?search=query#hash';

const parsedURL = url.parse(myURL);

console.log(parsedURL);

