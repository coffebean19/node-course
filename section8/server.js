const express = require("express");

const server = express();

const PORT = 3000;

server.listen();
console.log("Server listening on port: 3000..");

server.get("/", () => {
  server.send("hello");
})