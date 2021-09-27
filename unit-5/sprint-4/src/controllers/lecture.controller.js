const express = require("express");

const Lecture = require("../models/lecture.model");

const authorise = require("../middlewares/authorise");

const auth = require("../middlewares/auth");

const protect = require("../middlewares/protect");

const router = express.Router();

router.post("/", protect, auth(), async (req, res) => {
	let lecture;
	try {
		lecture = await Lecture.create(req.body);
		return res.status(201).json({ lecture });
	} catch (e) {
		return res.status(400).json({ status: "failed" });
	}
});
router.get("/", async (req, res) => {
	let lecture;
	try {
		lecture = await Lecture.find().lean().exec();
		return res.status(201).json({ lecture });
	} catch (e) {
		return res.status(400).json({ status: "failed" });
	}
});
router.delete("/:id", protect, authorise(), async (req, res) => {
	let lecture;
	try {
		lecture = await Lecture.findByIdAndDelete(req.params.id);
		return res.status(200).json({ lecture });
	} catch (e) {
		return res.status(400).json({ status: "failed" });
	}
});
router.patch("/:id", protect, authorise(), async (req, res) => {
	let lecture;
	try {
		lecture = await Lecture.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		return res.status(200).json({ lecture });
	} catch (e) {
		return res.status(400).json({ status: "failed" });
	}
});
router.get("/:id", async (req, res) => {
	let lecture;
	try {
		lecture = await Lecture.findById(req.params.id);
		return res.status(201).json({ lecture });
	} catch (e) {
		return res.status(400).json({ status: "failed" });
	}
});

module.exports = router;
