const path = require("path");
const mongoose = require("mongoose");
const User = require("./collections").User;
const Post = require("./collections").Post;
const Comment = require("./collections").Comment;
const dotenv = require("dotenv").config();

mongoose.connect(
  `mongodb+srv://yam:${process.env.PASSWORD}@database.foklg.mongodb.net/practiceData?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

function returnAllUsers() {
  User.find({}).then((results) => {
    console.log(results);
  });
}

function returnAllPosts() {
  Post.find({}).then((results) => {
    console.log(results);
  });
}

function returnAllGoodGuyPosts() {
  Post.find({ username: "GoodGuyGreg" }).then((results) => {
    console.log(results);
  });
}

function returnAllScumbagStevePosts() {
  Post.find({ username: "ScumbagSteve" }).then((results) => {
    console.log(results);
  });
}

function returnAllComments() {
  Comment.find({}).then((results) => {
    console.log(results);
  });
}

function returnAllCommentsOfUser(user) {
  Comment.find({ username: `${user}` }).then((results) => {
    console.log(results);
  });
}

function returnCommentsForPost(postTitle) {
  Post.find({ title: `${postTitle}` }).then((results) => {
    if (results.length > 0) {
      Comment.find({ post: `${results[0]._id}` }).then((results) => {
        console.log(results);
      });
    }
  });
}
console.log(`${process.env.PASSWORD}`);
