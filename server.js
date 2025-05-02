const http = require('node:http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1'; //because "J", the first letter in my name, is the 10th letter of the alphabet, and I'm feeling selfish
const port = 3000;
const mainPage = path.join(__dirname, 'web_data/files/main.html')

const server = http.createServer((req, res) => {
  fs.readFile(mainPage, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`Error: File not found: ${err}`);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
