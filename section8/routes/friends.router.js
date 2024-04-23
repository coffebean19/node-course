// /friends
const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
})

friendsRouter.use(express.json())
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter