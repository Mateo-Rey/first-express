import express, { response } from "express";

const app = express();

const students = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Brigette", lastName: "Lemus" },
  { firstName: "Logan", lastName: "Lemus" },
];

app.get("/hello", (request, response) => {
  response.send("hello world!");
});

app.listen(3001, () => {
  console.log("now listening on port 3001");
});

app.get("/students/:firstName", (request, response) => {
    const student = students.find(
      (elem) => elem.firstName === request.params.firstName);
      if (!student) {
        response.status(404).send({ message: 'Student not found', success: false })
        return;
    } else {
    response.send(student)
    }
});
