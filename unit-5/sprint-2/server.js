const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
	return mongoose.connect("mongodb://127.0.0.1:27017/masai");
};
const studentSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		gender: { type: String, required: false, default: "Male" },
		age: { type: Number, required: true },
		course: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "course",
			required: true,
		},
		batch: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "batch",
			required: true,
		},
		instructor: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "instructor",
				required: true,
			},
		],
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

// For students

app.get("/students", async (req, res) => {
	const students = await Student.find().lean().exec();
	return res.status(200).json({ students });
});

app.post("/students", async (req, res) => {
	const students = await Student.create(req.body);
	return res.status(201).json({ students });
});

app.get("/students/:id", async (req, res) => {
	const student = await Student.findById(req.params.id).lean().exec();
	return res.status(200).json({ student });
});

app.patch("/students/:id", async (req, res) => {
	const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})
		.lean()
		.exec();
	return res.status(200).json({ student });
});

app.delete("/students/:id", async (req, res) => {
	const student = await Student.findByIdAndDelete(req.params.id).lean().exec();
	return res.status(200).json({ student });
});

// For course

app.get("/courses", async (req, res) => {
	const courses = await Course.find().lean().exec();
	return res.status(200).json({ courses });
});

app.post("/courses", async (req, res) => {
	const courses = await Course.create(req.body);
	return res.status(201).json({ courses });
});

app.get("/courses/:id", async (req, res) => {
	const course = await Course.findById(req.params.id).lean().exec();
	return res.status(200).json({ course });
});

app.patch("/courses/:id", async (req, res) => {
	const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})
		.lean()
		.exec();
	return res.status(200).json({ course });
});

app.delete("/courses/:id", async (req, res) => {
	const course = await Course.findByIdAndDelete(req.params.id).lean().exec();
	return res.status(200).json({ course });
});

// for instructor

app.get("/instructors", async (req, res) => {
	const instructors = await Instructor.find().lean().exec();
	return res.status(200).json({ instructors });
});

app.post("/instructors", async (req, res) => {
	const instructors = await Instructor.create(req.body);
	return res.status(201).json({ instructors });
});

app.get("/instructors/:id", async (req, res) => {
	const instructor = await Instructor.findById(req.params.id).lean().exec();
	return res.status(200).json({ instructor });
});

app.patch("/instructors/:id", async (req, res) => {
	const instructor = await Instructor.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	)
		.lean()
		.exec();
	return res.status(200).json({ instructor });
});

app.delete("/instructors/:id", async (req, res) => {
	const instructor = await Instructor.findByIdAndDelete(req.params.id)
		.lean()
		.exec();
	return res.status(200).json({ instructor });
});

// for batch

app.get("/batchs", async (req, res) => {
	const batchs = await Batch.find().lean().exec();
	return res.status(200).json({ batchs });
});

app.post("/batchs", async (req, res) => {
	const batchs = await Batch.create(req.body);
	return res.status(201).json({ batchs });
});

app.get("/batchs/:id", async (req, res) => {
	const batch = await Batch.findById(req.params.id).lean().exec();
	return res.status(200).json({ batch });
});

app.patch("/batchs/:id", async (req, res) => {
	const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})
		.lean()
		.exec();
	return res.status(200).json({ batch });
});

app.delete("/batchs/:id", async (req, res) => {
	const batch = await Batch.findByIdAndDelete(req.params.id).lean().exec();
	return res.status(200).json({ batch });
});

// age above 18

app.get("/above-18", async (req, res) => {
	const students = await Student.find({ age: { $gt: 18 } })
		.lean()
		.exec();
	return res.status(200).json({ students });
});

//full stack development course
app.get("/full-stack-web-development-course", async (req, res) => {
	const students = await Student.find({ course: "full stack web development" })
		.lean()
		.exec();
	return res.status(200).json({ students });
});

app.listen(2345, async () => {
	await connect();
	console.log("connect to port 2345");
});
