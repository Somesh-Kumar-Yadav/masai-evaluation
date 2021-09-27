const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
	{
		roll_no: { type: String, required: true },
		user: {
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

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
