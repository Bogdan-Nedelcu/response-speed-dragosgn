const express = require("express");
const responseTime = require("response-time");
const fibo = require("./fibo");

const app = express();

app.use(responseTime());

app.get("/fibo", function (req, res) {
  const n = parseInt(req.query.n);
  // heavy server work here
  const result = fibo(n);
  res.status(200).json({ result });
});

module.exports = app;
