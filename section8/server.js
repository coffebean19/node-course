const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "rolande"
  },
  {
    id: 1,
    name: "damian"
  }
];

app.get("/friends", (req, res) => {
  res.json(friends);
})

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: 404, message: "Friend not found" });
  }
})

app.get("/messages", (req, res) => {
  res.send("<ul><li>Helloo</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages.");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});