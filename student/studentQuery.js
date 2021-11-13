const path = require("path");
const mongoose = require("mongoose");
const Student = require("./student");
const dotenv = require("dotenv").config();

mongoose.connect(
  `mongodb+srv://yam:yamivgi8947@database.foklg.mongodb.net/practiceData?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
  deleteAllStudentWiththisBirth();
});

//this function return all students in my mongoDB database
async function returnAllStudents() {
  Student.find({}).then((results) => {
    console.log(results);
  });
}

//this function return all students in my mongoDB database, named Ido
async function returnAllStudentsNamedIdo() {
  Student.find({ name: "Ido" }).then((results) => {
    console.log(results);
  });
}

//this function return all students in my mongoDB database, that in Law course
async function returnAllLawStudents() {
  Student.find({ courses: "Law" }).then((results) => {
    console.log(results);
  });
}

//this function return all female students in my mongoDB database, that in Law course
async function returnAllFemaleJavaStudents() {
  Student.find({ courses: { $in: ["Java"] }, gender: "Female" }).then(
    (results) => {
      console.log(results);
    }
  );
}

//this function return all students in my mongoDB database, who born after 05/05/1998
async function returnAllYoungStudents() {
  Student.find({ birth: { $gt: new Date("1998-05-05") } }).then((results) => {
    console.log(results);
  });
}

//this function return all students with phone numbers start with 054 in my mongoDB database
async function returnPhones() {
  Student.find({ phone: { $regex: "054" } }).then((results) => {
    console.log(results);
  });
}

//this function add JS course to any student named Yahalom in my mongoDB database
async function UpdateToJS() {
  Student.updateMany({ name: "Yahalom" }, { $push: { courses: "JavaScript" } });
}

//this function change birth day to any student named Koren to 02/12/1998
async function UpdateBirthToKoren() {
  Student.updateMany({ name: "Koren" }, { birth: new Date(1998, 11, 03) }).then(
    (results) => {
      console.log(results);
    }
  );
}

//this function return any students has "o" letter in his name
async function StudentsNameedWith() {
  Student.find({
    $or: [{ name: { $regex: "o" } }, { name: { $regex: "O" } }],
  }).then((results) => {
    console.log(results);
  });
}

//this function return any students has "h" ,"y" in the surName
async function StudentsSurNameedWith() {
  Student.find({
    $or: [
      { surName: { $regex: "y" } },
      { surName: { $regex: "h" } },
      { surName: { $regex: "Y" } },
      { surName: { $regex: "H" } },
    ],
  }).then((results) => {
    console.log(results);
  });
}

//this function delete all students named Ido
async function deleteAllStudentsNamedIdo() {
  Student.deleteMany({ name: "Ido" }).then((results) => {
    console.log(results);
  });
}

//this function delete all students they birth day is 02-04-1998
async function deleteAllStudentWiththisBirth() {
  Student.deleteMany({ birth: new Date(1998, 03, 03) }).then((results) => {
    console.log(results);
  });
}
