const path = require("path");
const mongoose = require("mongoose");
const User = require("./collections").User;
const Post = require("./collections").Post;
const Comment = require("./collections").Comment;
const dotenv = require("dotenv").config();
const faker = require("faker");

mongoose.connect(
  `mongodb+srv://yam:yamivgi8947@database.foklg.mongodb.net/practiceData?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", async function () {
  console.log("Connected successfully");
});

const addUsers = async () => {
  User.insertMany([
    {
      username: "GoodGuyGreg",
      first_name: "Good Guy",
      last_name: "Greg",
    },
    {
      username: "ScumbagSteve",
      first_name: "Scumbag",
      last_name: "Steve",
    },
  ]);
};
const addPosts = async () => {
  Post.insertMany([
    {
      username: "GoodGuyGreg",
      title: "Passes out at party",
      body: "Wakes up early and cleans house",
    },
    {
      username: "GoodGuyGreg",
      title: "Steals your identity",
      body: "Raises your credit score",
    },
    {
      username: "GoodGuyGreg",
      title: "Reports a bug in your code",
      body: "Sends you a Pull Request",
    },
    {
      username: "ScumbagSteve",
      title: "Borrows something",
      body: "Sells it",
    },
    {
      username: "ScumbagSteve",
      title: "Borrows everything",
      body: "The end",
    },
    {
      username: "ScumbagSteve",
      title: "Forks your repo on github",
      body: "Sets to private",
    },
  ]);
};
const addComment = async (username, comment, postTitle) => {
  postid = "";
  Post.find({ title: postTitle }).then((result) => {
    console.log(result);
    if (result.length > 0) {
      Comment.insertMany([
        {
          username: username,
          comment: comment,
          post: result[0]._id,
        },
      ]);
    }
  });
};

// addUsers();
// addPosts();
// addComment("GoodGuyGreg", "Hope you got a good deal!", "Passes out at party");
// addComment(
//   "GoodGuyGreg",
//   "What's mine is yours!",
//   "Reports a bug in your code"
// );
// addComment(
//   "GoodGuyGreg",
//   "Don't violate the licensing agreement!",
//   "Reports a bug in your code"
// );
// addComment(
//   "ScumbagSteve",
//   "It still isn't clean",
//   "Reports a bug in your code"
// );
// addComment(
//   "ScumbagSteve",
//   " Denied your PR cause I found a hack",
//   "Reports a bug in your code"
// );
