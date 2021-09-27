const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

const upload = require("../utils/fileUploads");

router.post("/", async (req, res) => {
	const user = await User.create({
		name: req.body.name,
		name: req.body.name,
		name: req.body.name,
		name: req.body.name,
		name: req.body.name,
	});
});
