const express = require("express");
const mongoose = require("mongoose");

const PORT = 4040;
const HOST = "127.0.0.1";
const MONGO_PORT = 27017;

const studentSchema = new mongoose.Schema({
  roll_no: { type: Number, required: true },
  name: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);

const app = express();

mongoose.connect(`mongodb://${HOST}:${MONGO_PORT}/student_db`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/list-student", async (req, res) => {
  const docs = await Student.find({});
  return res.json({ success: true, docs });
});

app.get("/add-student", async (req, res) => {
  const stud = new Student({
    roll_no: 1001,
    name: "Madison Hyde",
  });
  const doc = await stud.save();
  return res.json({ success: true, doc });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
