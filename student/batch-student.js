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
  AddStudents();
});

const AddStudents = () => {
  try {
    Student.insertMany([
      {
        name: "Chen",
        surName: "Halevi",
        birth: 11 / 03 / 1997,
        phone: "0526323421",
        gender: "Male",
        courses: ["Math", "Law"],
      },
      {
        name: "Koren",
        surName: "Gan - or",
        birth: 19 / 01 / 1997,
        phone: "0526305321",
        gender: "Male",
        courses: ["JavaScript", "Finance", "Law"],
      },
      {
        name: "Oryan",
        surName: "Levy",
        birth: 02 / 04 / 1998,
        phone: "0542305321",
        gender: "Male",
        courses: ["JavaScript", "Law"],
      },
      {
        name: "Yahalom",
        surName: "Cohen",
        birth: 03 / 11 / 1993,
        phone: "0542305392",
        gender: "Female",
        courses: ["Java", "Law"],
      },
    ]);
  } catch (err) {
    console.log(err);
  }
};
