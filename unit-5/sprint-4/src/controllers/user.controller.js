const express = require("express");

const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const router = express.Router();

const upload = require("../utils/fileUploads");

const newToken = (user) => {
	return jwt.sign({ user: user }, "Somesh");
};

router.post("/", upload.single("profile_photo_url"), async (req, res) => {
	let user;
	try {
		user = await User.findOne({ email: req.body.email }).lean().exec();
		if (user) {
			return res.status(400).send({
				status: "failed",
				message: "Try different email or password",
			});
		}
		user = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			profile_photo_url: req.file.path,
			roles: req.body.roles,
		});
		const token = newToken(user);

		return res.status(201).json({ token });
	} catch (e) {
		return res
			.status(400)
			.send({ status: "failed", message: "Something went wrong" });
	}
});

router.get("/", async (req, res) => {
	const users = await User.find().lean().exec();
	return res.status(200).json({ users });
});

module.exports = router;
