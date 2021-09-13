const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connect = () => {
	return mongoose.connect("mongodb://127.0.0.1:27017/masai");
};
const studentSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		gender: { type: String, required: false, default: "Male" },
		age: { type: Number, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Student = mongoose.model("student", studentSchema);

const courseSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Course = mongoose.model("course", courseSchema);

const instructorSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Instructor = mongoose.model("instructor", instructorSchema);

const batchSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const Batch = mongoose.model("batch", batchSchema);

app.get("/students", async (req, res) => {
	const students = await Student.find().lean().exec();
	return res.status(200).json({ students });
});

app.post("/students", async (req, res) => {
	const students = await Student.create(req.body);
	return res.status(201).json({ students });
});

app.listen(2345, () => {
	await connect();
	console.log("connect to port 2345");
});
