const express = require("express");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) { }
}

app.get("/", (req, res) => {
  res.send(`Perforamnce example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Ding ding ding ${process.pid}`)
});

console.log("Running server...")
console.log("Worker process started..")
app.listen(3000);

