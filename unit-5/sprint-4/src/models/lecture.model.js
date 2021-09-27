const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		instructor: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Lecture = mongoose.model("lecture", lectureSchema);
module.exports = Lecture;
