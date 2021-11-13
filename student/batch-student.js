const path = require("path");
const mongoose = require("mongoose");
const Student = require("./student");
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
db.once("open", function () {
  console.log("Connected successfully");
  AddStudents();
});

const AddStudents = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push({
      name: faker.name.firstName(),
      surName: faker.name.lastName(),
      birth: faker.date.past(),
      phone: faker.phone.phoneNumber(),
      gender: "Male",
      courses: [],
    });
  }
  Student.insertMany(arr);
};
