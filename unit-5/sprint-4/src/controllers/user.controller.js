const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

const upload = require("../utils/fileUploads");

router.post("/", upload.single("profile_photo_url"), async (req, res) => {
	const user = await User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		profile_photo_url: req.file.path,
		roles: req.body.roles,
	});
	return res.status(201).json({ user });
});

router.get("/", async (req, res) => {
	const users = await User.find().lean().exec();
	return res.status(200).json({ users });
});

module.exports = router;
