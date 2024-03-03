const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('Here is about page');
  }
  res.end(`
  <h1>Oops!</h1>
  <p>What the hell?</p>
  <a href="/">go away!</a>
  `);
});

server.listen(8800);
