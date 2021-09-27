const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		instructor: { type: String, required: true },
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Lecture = mongoose.model("lecture", lectureSchema);
module.exports = Lecture;
